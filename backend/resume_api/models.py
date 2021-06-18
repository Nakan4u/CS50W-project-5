from django.db import models

from datetime import datetime

class Resume(models.Model):
  firstName = models.CharField(max_length=64)
  lastName = models.CharField(max_length=64)
  label = models.CharField(max_length=64, null=True, blank=True)
  summary = models.CharField(max_length=256, null=True, blank=True)

  def __str__(self):
    return self.firstName

class WorkItem(models.Model):
  user = models.ForeignKey(Resume, related_name="work", on_delete=models.CASCADE)
  company = models.CharField(max_length=64)
  position = models.CharField(max_length=64)  
  startDate = models.DateField()
  endDate = models.DateField(null=True, blank=True)
  website = models.CharField(max_length=64, blank=True)
  summary = models.CharField(max_length=256)

  def __str__(self):
    return self.company

  class Meta:
    ordering = ('-startDate',)

class EducationItem(models.Model):
  user = models.ForeignKey(Resume, related_name="education", on_delete=models.CASCADE)
  institution = models.CharField(max_length=64)
  degreeTitle = models.CharField(max_length=64)
  level = models.CharField(max_length=32)
  startDate = models.DateField()
  endDate = models.DateField()

  class Meta:
    ordering = ('-startDate',)
    
  def __str__(self):
    return self.institution
