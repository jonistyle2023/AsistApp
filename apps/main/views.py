# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

def home_view(request):
    return render(request, 'index.html')

class KpiDataAPI(APIView):
    def get(self, request, format=None):
        """
        Retorna datos de prueba para los KPIs.
        """
        data = {
            "asistencia": { "valor": 10145, "cambio": 1.50 },
            "atraso": { "valor": 10145, "cambio": -2.71 },
            "falta": { "valor": 10145, "cambio": 0.32 },
            "justificacion": { "valor": 10145, "cambio": -0.18 }
        }
        return Response(data)