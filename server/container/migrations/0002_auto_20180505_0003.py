# Generated by Django 2.0.5 on 2018-05-05 00:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('container', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='container',
            old_name='id',
            new_name='container_id',
        ),
        migrations.RenameField(
            model_name='container',
            old_name='tracker',
            new_name='tracker_id',
        ),
    ]
