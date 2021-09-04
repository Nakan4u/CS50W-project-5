from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog_api.urls')),
    path('resume/', include('resume_api.urls')),
    path('projects/', include('projects_api.urls')),
]

