import datetime
from getpass import getuser
from site import getuserbase
from tokenize import TokenError
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from config.settings import JWT_Key
from users.models import MyUser
from users.forms import UserCreationForm
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer,
)
from users.serializers import LoginSerializer, RegistrationSerializer, UserSeriallizer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import jwt
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model


def index(request):
    return HttpResponse("안녕하세요 pybo에 오신것을 환영합니다.")


class RegistrationAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

    @swagger_auto_schema(
        operation_description="User Sign API",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["email", "password", "nickname"],
            properties={
                "email": openapi.Schema(
                    type=openapi.TYPE_STRING, description="ex) abc@naver.com"
                ),
                "password": openapi.Schema(
                    type=openapi.TYPE_STRING,
                    format=openapi.FORMAT_PASSWORD,
                    description="ex) 1q2w3e4r!",
                ),
                "nickname": openapi.Schema(
                    type=openapi.TYPE_STRING, description="ex) bootcamp"
                ),
            },
        ),
        responses={
            201: "회원가입 성공",
            403: "서버에러",
        },
    )
    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    @swagger_auto_schema(
        operation_description="User Login API",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["email", "password"],
            properties={
                "email": openapi.Schema(
                    type=openapi.TYPE_STRING, description="ex) abc@naver.com"
                ),
                "password": openapi.Schema(
                    type=openapi.TYPE_STRING,
                    format=openapi.FORMAT_PASSWORD,
                    description="ex) 1q2w3e4r!",
                ),
            },
        ),
        responses={200: "로그인 성공", 400: "로그인 실패"},
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_email = request.data.get("email")
        user = MyUser.objects.filter(email=user_email).first()
        if user is None:
            raise AuthenticationFailed("User does not found!")

        # 토큰 생성
        token = TokenObtainPairSerializer.get_token(user)
        refresh_token = str(token)
        access_token = str(token.access_token)
        response = Response(
            {
                "user": UserSeriallizer(user).data,
                "message": "login success",
                "jwt_token": {
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                },
            },
            status=status.HTTP_200_OK,
        )
        response.set_cookie("access_token", access_token, httponly=True)
        response.set_cookie("refresh_token", refresh_token, httponly=True)
        return response


class MyTokenView(APIView):
    # def refresh_tokens(self, request):
    #     try:
    #         serializer = TokenRefreshSerializer(
    #             data={"refresh": request.COOKIES.get("refresh_token", None)}
    #         )

    #         if serializer.is_valid(raise_exception=True):
    #             access_token = serializer.validated_data["access"]
    #             refresh_token = request.COOKIES.get("refresh_token", None)

    #             # 기존 액세스 토큰을 디코드하여 사용자 정보 가져오기
    #             access_payload = jwt.decode(access_token, JWT_Key, algorithms=["HS256"])
    #             pk = access_payload.get("user_id")  # 사용자 ID 가져오기
    #             User = get_user_model()
    #             user = User.objects.get(id=pk)

    #             # 사용자 정보를 직렬화하여 응답 데이터에 포함
    #             serializer = UserSeriallizer(user)
    #             response_data = {
    #                 "user": serializer.data,
    #                 "message": _("Token refreshed successfully"),
    #                 "jwt_token": {
    #                     "access_token": access_token,
    #                     "refresh_token": refresh_token,
    #                 },
    #             }

    #             response = Response(response_data, status=status.HTTP_200_OK)
    #             response.set_cookie("access_token", access_token, httponly=True)
    #             response.set_cookie("refresh_token", refresh_token, httponly=True)
    #             return response

    #     except TokenError:
    #         return Response(
    #             {"message": _("로그인이 만료되었습니다.")}, status=status.HTTP_401_UNAUTHORIZED
    #         )
    #     except jwt.exceptions.InvalidTokenError:
    #         return Response(
    #             {"message": _("토큰이 유효하지 않습니다.")}, status=status.HTTP_401_UNAUTHORIZED
    #         )

    def post(self, request):
        # try:
        access_token = request.COOKIES["access_token"]
        payload = jwt.decode(access_token, JWT_Key, algorithms=["HS256"])
        return Response({"accenss": access_token})
        # pk = payload.get("user_id")  # 사용자 ID 가져오기x

    #     User = get_user_model()
    #     user = User.objects.get(id=pk)

    #     # 사용자 정보를 직렬화하여 응답 데이터에 포함
    #     serializer = UserSeriallizer(user)
    #     response_data = {
    #         "user": serializer.data,
    #         "message": _("Token obtained successfully"),
    #         "jwt_token": {
    #             "access_token": access_token,
    #             "refresh_token": request.COOKIES["refresh_token"],
    #         },
    #     }

    #     response = Response(response_data, status=status.HTTP_200_OK)
    #     response.set_cookie("access_token", access_token, httponly=True)
    #     response.set_cookie(
    #         "refresh_token", request.COOKIES["refresh_token"], httponly=True
    #     )
    #     return response

    # except jwt.exceptions.ExpiredSignatureError:
    #     return self.refresh_tokens(request)

    # except jwt.exceptions.InvalidTokenError:
    #     return Response(
    #         {"message": ("토큰이 유효하지 않습니다.")}, status=status.HTTP_401_UNAUTHORIZED
    #     )


class LogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logout success"})
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")

        return response


# class UserView(APIView):
#     def get(self, request):
#         token = request.COOKIES.get("jwt")

#         if not token:
#             raise AuthenticationFailed("UnAuthenticated!")

#         try:
#             payload = jwt.decode(token, JWT_Key, algorithms=["HS256"])

#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed("UnAuthenticated!")

#         user = MyUser.objects.filter(id=payload["id"]).first()
#         user_serializer = UserSeriallizer(user)

#         return Response(user_serializer.data)
