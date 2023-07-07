from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from users.forms import UserCreationForm


def index(request):
    return HttpResponse("안녕하세요 pybo에 오신것을 환영합니다.")


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            email = form.cleaned_data.get("email")
            password = form.cleaned_data.get("password")
            user = authenticate(username=email, password=password)
            login(request, user)
            return redirect("index")
    else:
        form = UserCreationForm()
    return render(request, "users/signup.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("index")
        else:
            error_message = "로그인에 실패했습니다. 다시 시도해주세요."
    else:
        error_message = ""

    return render(request, "users/login.html", {"error_message": error_message})
