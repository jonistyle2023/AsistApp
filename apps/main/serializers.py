# FUNCIÓN: Convierte los modelos de Django a formato JSON para que la API
#          pueda enviarlos al frontend (React) o a Postman.

from rest_framework import serializers
from .models import Curso, Clase


class ClaseSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Clase.
    """

    class Meta:
        model = Clase
        fields = ['id', 'curso', 'nombre', 'horario', 'created_at']


class CursoSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Curso.
    Incluye las clases anidadas para ver toda la información del curso de una vez.
    """
    # Usamos el serializador de Clase para mostrar las clases asociadas a este curso.
    # 'many=True' porque un curso puede tener muchas clases. 'read_only=True' porque
    # las clases se crearán por separado, no al mismo tiempo que el curso.
    clases = ClaseSerializer(many=True, read_only=True)

    class Meta:
        model = Curso
        fields = ['id', 'nombre', 'lista_info', 'clases', 'created_at']
