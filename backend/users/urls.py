from django.urls import path
from users.views import index, RegistrationAPIView, LoginAPIView

app_name = "users"
urlpatterns = [
    path("", index),
    path(
        "login/",
        LoginAPIView.as_view(),
    ),
    path("signup/", RegistrationAPIView.as_view()),
]
