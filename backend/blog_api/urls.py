from django.urls import path
from . import views

urlpatterns = [
  path('post/<str:slug>', views.PostDetail),
  path('category/<str:category>', views.PostListByCategory),
  path('categories', views.CategoryList.as_view()),
  path('', views.PostList.as_view()),
]

