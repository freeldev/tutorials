from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    GENDER_CHOICES = (
            ('M', 'Male'),
            ('F', 'Female'),
        )
    age = models.PositiveIntegerField(default=0)
    title = models.CharField(max_length=200, default='', blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='', blank=True)

