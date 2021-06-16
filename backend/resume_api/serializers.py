from rest_framework import serializers
from .models import Resume, WorkItem, EducationItem

class WorkItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = WorkItem
    fields = ('company', 'position', 'startDate', 'endDate', 'website', 'summary')

class EducationItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = EducationItem
    fields = ('institution', 'level', 'degreeTitle', 'startDate', 'endDate')

class ResumeSerializer(serializers.ModelSerializer):
  education = EducationItemSerializer(many=True)
  work = WorkItemSerializer(many=True)

  class Meta:
    model = Resume
    fields = ('firstName', 'lastName', 'education', 'work')