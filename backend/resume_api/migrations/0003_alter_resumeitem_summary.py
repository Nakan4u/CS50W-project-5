# Generated by Django 3.2 on 2021-09-03 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume_api', '0002_auto_20210626_1428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumeitem',
            name='summary',
            field=models.TextField(blank=True, max_length=512, null=True),
        ),
    ]