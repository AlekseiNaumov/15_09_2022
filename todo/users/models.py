# from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=64, unique=True,)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.last_name
