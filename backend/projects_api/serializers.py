from rest_framework import serializers
from .models import Project

ProjectFields = ['title', 'subtitle', 'body', 'website', 'website_slug', 'image_url']

class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = ProjectFields
