from django.db import models

class Resume(models.Model):
  firstName = models.CharField(max_length=64)
  lastName = models.CharField(max_length=64)

  def __str__(self):
    return self.firstName

class WorkItem(models.Model):
  user = models.ForeignKey(Resume, related_name="work", on_delete=models.CASCADE)
  company = models.CharField(max_length=64)
  position = models.CharField(max_length=64)  
  startDate = models.DateField()
  endDate = models.DateField()
  website = models.CharField(max_length=64, blank=True)
  summary = models.CharField(max_length=256)

  def __str__(self):
    return self.company

class EducationItem(models.Model):
  user = models.ForeignKey(Resume, related_name="education", on_delete=models.CASCADE)
  institution = models.CharField(max_length=64)
  degreeTitle = models.CharField(max_length=64)
  level = models.CharField(max_length=32)
  startDate = models.DateField()
  endDate = models.DateField()

  def __str__(self):
    return self.institution
