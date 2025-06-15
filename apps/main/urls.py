# apps/main/urls.py
from django.urls import path
from .views import KpiDataAPI

urlpatterns = [
    # La URL para nuestra API de KPIs
    path('api/kpi-data/', KpiDataAPI.as_view(), name='api-kpi-data'),
]