from django.db import models
from django.utils import timezone
# Create your models here.
class BlogCategory(models.Model):
  name = models.CharField(max_length=128)

  def __str__(self):
    return self.name

options = (
  ('draft', 'Draft'),
  ('publicshed', 'Published'),
)

class BlogPost(models.Model):
  category = models.ForeignKey(BlogCategory, on_delete=models.PROTECT)
  title = models.CharField(max_length=256)
  excerpt = models.TextField(null=True)
  content = models.TextField()
  slug = models.SlugField(max_length=256, unique_for_date='published')
  published = models.DateTimeField(default=timezone.now)
  status = models.CharField(max_length=10, choices=options, default='published')

  class Meta:
    ordering = ('-published',)

  def __str__(self):
    return self.title