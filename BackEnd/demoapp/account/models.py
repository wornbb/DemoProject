from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserPanel(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    highest_score = models.IntegerField(default=0)
