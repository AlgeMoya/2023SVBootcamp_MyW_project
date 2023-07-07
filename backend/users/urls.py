from django.urls import path
from users import views

app_name = "users"
urlpatterns = [
    path("", views.index),
    path(
        "login/",
        views.login_view,
        name="login",
    ),
    path("signup/", views.signup, name="signup"),
]
