# Generated by Django 2.0.5 on 2018-05-05 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='name',
            field=models.TextField(default='name'),
            preserve_default=False,
        ),
    ]
