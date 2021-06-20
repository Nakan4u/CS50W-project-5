from rest_framework import serializers
from .models import BlogCategory, BlogPost

class BlogCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogCategory
    fields = ('id', 'name')

  def __str__(self):
    return self.name

class BlogPostSerializer(serializers.ModelSerializer):
  category = serializers.StringRelatedField(many=False)
  
  class Meta:
    model = BlogPost
    fields = ('id', 'category', 'title', 'excerpt', 'published', 'content', 'slug')
  
  def to_representation(self, instance):
      representation = super(BlogPostSerializer, self).to_representation(instance)
      representation['published'] = instance.published.strftime('%d %b %Y')
      return representation