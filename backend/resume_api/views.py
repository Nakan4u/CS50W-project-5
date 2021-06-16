from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Resume, WorkItem, EducationItem
from .serializers import ResumeSerializer, WorkItemSerializer, EducationItemSerializer

@api_view(['GET'])
def GetResume(request):
  resume = Resume.objects.all()
  serializer = ResumeSerializer(resume, many=True)
  return Response(serializer.data)