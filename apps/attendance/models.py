# Create your models here.
# attendance/models.py
from django.db import models
from apps.users.models import CustomUser

class ClassSession(models.Model):
    subject = models.CharField(max_length=100)
    teacher = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    qr_token = models.CharField(max_length=256)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location_lat = models.FloatField()
    location_lng = models.FloatField()

class AttendanceRecord(models.Model):
    student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    session = models.ForeignKey(ClassSession, on_delete=models.CASCADE)
    scan_time = models.DateTimeField(auto_now_add=True)
    device_id = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    is_valid = models.BooleanField(default=True)
