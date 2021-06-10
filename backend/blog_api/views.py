from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import BlogPost
from .serializers import BlogPostSerializer

class PostList(generics.ListCreateAPIView):
  queryset = BlogPost.objects.all()
  serializer_class = BlogPostSerializer

@api_view(['GET'])
def PostDetail(request, slug):
  post = BlogPost.objects.get(slug=slug)
  serializer = BlogPostSerializer(post, many=False)
  return Response(serializer.data)
