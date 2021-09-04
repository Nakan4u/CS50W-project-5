from django.db import models

from django.db.models.fields.related import ForeignKey

class Project(models.Model):
  title = models.CharField(max_length=64)
  subtitle = models.CharField(max_length=64, blank=True, null=True)
  body = models.TextField(max_length=512)
  website = models.CharField(max_length=128, blank=True, null=True)
  website_slug = models.CharField(max_length=64, blank=True, null=True)
  image_url = models.CharField(max_length=128, blank=True, null=True)
  order = models.IntegerField(blank=True, null=True)

  def __str__(self):
    return self.title
  


