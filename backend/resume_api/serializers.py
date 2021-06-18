from rest_framework import serializers
from .models import Resume, WorkItem, EducationItem

class WorkItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = WorkItem
    fields = ('company', 'position', 'startDate', 'endDate', 'website', 'summary')
  
  # overwriting method to format dates
  def to_representation(self, instance):
    representation =  super(WorkItemSerializer, self).to_representation(instance)
    representation['startDate'] = instance.startDate.strftime("%b %Y")
    representation['endDate'] = instance.endDate.strftime("%b %Y") if representation['endDate'] else "Present"
    return representation

class EducationItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = EducationItem
    fields = ('institution', 'level', 'degreeTitle', 'startDate', 'endDate')

  # overwriting method to format dates
  def to_representation(self, instance):
    representation =  super(EducationItemSerializer, self).to_representation(instance)
    representation['startDate'] = instance.startDate.strftime("%Y")
    representation['endDate'] = instance.endDate.strftime("%Y")
    return representation
  
class ResumeSerializer(serializers.ModelSerializer):
  education = EducationItemSerializer(many=True)
  work = WorkItemSerializer(many=True)

  class Meta:
    model = Resume
    fields = ('firstName', 'lastName', 'label', 'summary', 'education', 'work')