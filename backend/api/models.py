from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
    name = models.CharField(max_length=15)
    birth_date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    
    