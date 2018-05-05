from django.db import models

# Create your models here.
class Container(models.Model):
    container_id = models.CharField(max_length=100, primary_key=True, editable=False)
    tracker_id = models.CharField(max_length=100)