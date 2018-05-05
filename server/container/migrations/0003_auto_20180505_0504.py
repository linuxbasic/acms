# Generated by Django 2.0.5 on 2018-05-05 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('container', '0002_auto_20180505_0003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='container',
            name='container_id',
            field=models.CharField(editable=False, max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='container',
            name='tracker_id',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
