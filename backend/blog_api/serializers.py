from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogPost
    fields = ('id', 'category', 'title', 'excerpt', 'published', 'content', 'slug')