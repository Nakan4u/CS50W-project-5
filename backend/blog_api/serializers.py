from rest_framework import serializers
from .models import BlogCategory, BlogPost

class BlogCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogCategory
    fields = ('id', 'name')

class BlogPostSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogPost
    fields = ('id', 'category', 'title', 'excerpt', 'published', 'content', 'slug')