from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):

    class Meta:
        model = ToDo
        fields = '__all__'
        # fields = ['project', 'project_name', 'text', 'data_create', 'data_update', 'user', 'is_active']
