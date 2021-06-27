from django.db import models

from django.db.models.fields.related import ForeignKey

class Resume(models.Model):
  firstName = models.CharField(max_length=64)
  lastName = models.CharField(max_length=64)
  label = models.CharField(max_length=64, null=True, blank=True)
  summary = models.CharField(max_length=256, null=True, blank=True)

  def __str__(self):
    return self.firstName

class ResumeItem(models.Model):
  title = models.CharField(max_length=64)
  subtitle = models.CharField(max_length=64)
  startDate = models.DateField()
  endDate = models.DateField(null=True, blank=True)
  summary = models.TextField(max_length=256, null=True, blank=True)
  bulletPoints = models.TextField(max_length=512, null=True, blank=True)
  website = models.CharField(max_length=128, null=True, blank=True)
  
  class Meta:
    ordering = ('-startDate',)

  def __str__(self):
    return self.title

class WorkItem(ResumeItem):
  user = ForeignKey(Resume, related_name="work", on_delete=models.CASCADE)

class EducationItem(ResumeItem):
  user = ForeignKey(Resume, related_name="education", on_delete=models.CASCADE)

class CPDItem(ResumeItem):
  user = ForeignKey(Resume, related_name="cpd", on_delete=models.CASCADE)