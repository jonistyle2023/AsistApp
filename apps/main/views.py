# Create your views here.
# FUNCIÓN: Define la lógica de la API. Qué hacer cuando se recibe una petición
#          GET, POST, PUT, DELETE para Cursos y Clases.

from rest_framework import viewsets
from .models import Curso, Clase
from .serializers import CursoSerializer, ClaseSerializer


class CursoViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver, crear, editar y eliminar Cursos.
    Proporciona automáticamente las acciones: .list(), .retrieve(), .create(),
    .update(), .partial_update(), .destroy()
    """
    queryset = Curso.objects.all().order_by('nombre')
    serializer_class = CursoSerializer


class ClaseViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver, crear, editar y eliminar Clases.
    """
    queryset = Clase.objects.all().order_by('-created_at')
    serializer_class = ClaseSerializer
