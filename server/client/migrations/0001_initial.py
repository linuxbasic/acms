# Generated by Django 2.0.5 on 2018-05-05 05:16

import client.models.client
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('client_id', models.CharField(editable=False, max_length=100, primary_key=True, serialize=False)),
                ('client_pin', models.IntegerField(validators=[client.models.client.validate_pin])),
            ],
        ),
    ]
