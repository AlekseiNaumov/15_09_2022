from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=32, unique=True)
    repository = models.URLField(max_length=200, blank=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    # project_name = Project.name
    text = models.TextField(blank=False)
    data_create = models.DateField(auto_now_add=False)
    data_update = models.DateField(auto_now=True, blank=True)
    user = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField()

    # def __str__(self):
    #     return self.project_name
