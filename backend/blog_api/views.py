from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import BlogCategory, BlogPost
from .serializers import BlogCategorySerializer, BlogPostSerializer

class PostList(generics.ListCreateAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializer

class CategoryList(generics.ListCreateAPIView):
  queryset = BlogCategory.objects.all()
  serializer_class = BlogCategorySerializer

@api_view(['GET'])
def PostListByCategory(request, category):
  posts = BlogPost.objects.filter(category__name=category)
  serializer = BlogPostSerializer(posts, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def PostDetail(request, slug):
  post = BlogPost.objects.get(slug=slug)
  serializer = BlogPostSerializer(post, many=False)
  return Response(serializer.data)
