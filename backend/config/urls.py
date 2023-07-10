from django.urls import path
from openapi import views

urlpatterns = [
    path('input_form/', views.input_form, name='input_form'),
    path('chat/', views.chat, name='chat'),
]