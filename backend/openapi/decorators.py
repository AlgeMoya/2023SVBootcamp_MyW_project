from functools import wraps
from django.http import JsonResponse

# def login_required_api(view_func):

#     @wraps(view_func)
#     def wrapped_view(request, *args, **kwargs):
#         if request.user.is_authenticated:
#             return view_func(request, *args, **kwargs)
#         else:
#             return JsonResponse({'message': '로그인이 필요합니다.'}, status=401)

#     return wrapped_view


def login_required_api(view_func):
    @wraps(view_func)
    def wrapped_view(request, *args, **kwargs):
        id_param = request.META.get("HTTP_ID")  # HTTP header로부터 ID 정보 가져오기
        if id_param is None:
            return JsonResponse({"error": "로그인하세요."}, status=403)
        else:
            return view_func(request, *args, **kwargs)

    return wrapped_view
