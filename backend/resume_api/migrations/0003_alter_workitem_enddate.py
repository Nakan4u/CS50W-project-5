# Generated by Django 3.2 on 2021-06-18 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume_api', '0002_auto_20210617_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workitem',
            name='endDate',
            field=models.DateField(null=True),
        ),
    ]
