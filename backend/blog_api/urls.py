from django.urls import path
from . import views

urlpatterns = [
  path('<str:slug>', views.PostDetail),
  path('', views.PostList.as_view()),
]

