from rest_framework import serializers
from .models import Resume, ResumeItem, WorkItem, EducationItem, CPDItem

resumeItemFields = ["title", "subtitle", "startDate", "endDate", "summary", "bulletPoints", "website"]

class ResumeItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = ResumeItem
    fields = resumeItemFields

  def to_representation(self, instance):
    representation =  super(ResumeItemSerializer, self).to_representation(instance)
    representation['startDate'] = instance.startDate.strftime("%b %Y")
    representation['endDate'] = instance.endDate.strftime("%b %Y") if representation['endDate'] else "Present"
    return representation

class WorkItemSerializer(ResumeItemSerializer):
  class Meta:
    model = WorkItem
    fields = resumeItemFields

class EducationItemSerializer(ResumeItemSerializer):
  class Meta:
    model = EducationItem
    fields = resumeItemFields

class CPDItemSerializer(ResumeItemSerializer):
  class Meta:
    model = CPDItem
    fields = resumeItemFields

class ResumeSerializer(serializers.ModelSerializer):
  work = WorkItemSerializer(many=True)
  education = EducationItemSerializer(many=True)
  cpd = CPDItemSerializer(many=True)

  class Meta:
    model = Resume
    fields = ('firstName', 'lastName', 'label', 'summary', 'work', 'education', 'cpd')