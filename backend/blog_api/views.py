from rest_framework import generics
from .models import BlogPost
from .serializers import BlogPostSerializer

class PostList(generics.ListCreateAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializer

class PostDetail(generics.RetrieveDestroyAPIView):
  pass