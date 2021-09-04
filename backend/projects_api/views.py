from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Project
from .serializers import ProjectSerializer

@api_view(['GET'])
def GetProjects(request):
  projects = Project.objects.all()
  serializer = ProjectSerializer(projects, many=True)
  return Response(serializer.data)