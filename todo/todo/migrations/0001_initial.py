# Generated by Django 3.2.8 on 2022-10-03 08:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, unique=True)),
                ('repository', models.URLField(blank=True)),
                ('users', models.ManyToManyField(to='users.User')),
            ],
        ),
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('data_create', models.DateField()),
                ('data_update', models.DateField(auto_now=True)),
                ('is_active', models.BooleanField()),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todo.project')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='users.user')),
            ],
        ),
    ]
