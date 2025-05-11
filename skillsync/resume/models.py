from django.db import models

# Create your models here.
class Resume(models.Model):
    file = models.FileField(upload_to='resumes/')
    created_at = models.DateTimeField(auto_now_add=True)