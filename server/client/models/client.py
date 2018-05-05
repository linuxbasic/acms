from django.db import models
from django.core.exceptions import ValidationError

def validate_pin(value):
    if value < 0 or value > 9999:
        raise ValidationError('Invalide PIN')

# Create your models here.
class Client(models.Model):
    client_id = models.CharField(max_length=100, primary_key=True, editable=False)
    client_pin = models.IntegerField(validators=[validate_pin])