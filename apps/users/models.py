from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

class User(AbstractUser):
    """
    Modelo de Usuario personalizado para Docentes.
    Hereda todos los campos de Django (username, email, password, etc.)
    y podemos añadir más si es necesario.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True) # Hacemos el email único y requerido

    # El campo 'username' ya viene de AbstractUser.
    # Usaremos el email para el login.
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username'] # Campos requeridos al crear un superusuario

    def __str__(self):
        return self.email