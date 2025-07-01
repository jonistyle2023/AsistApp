# ARCHIVO: apps/main/urls.py
# FUNCIÓN: Define las rutas (URLs) para acceder a los ViewSets de la API.

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CursoViewSet, ClaseViewSet

# Creamos un router que registrará automáticamente las URLs para nuestros ViewSets.
router = DefaultRouter()
router.register(r'cursos', CursoViewSet, basename='curso')
router.register(r'clases', ClaseViewSet, basename='clase')

# Las URLs de la API son ahora generadas automáticamente por el router.
urlpatterns = [
    # Esto creará URLs como:
    # /api/main/cursos/ (para GET y POST)
    # /api/main/cursos/{id}/ (para GET, PUT, PATCH, DELETE)
    # /api/main/clases/ (para GET y POST)
    # /api/main/clases/{id}/ (para GET, PUT, PATCH, DELETE)
    path('', include(router.urls)),
]