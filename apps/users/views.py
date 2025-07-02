from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserRegistrationSerializer, MyTokenObtainPairSerializer
from .models import User
from rest_framework_simplejwt.views import TokenObtainPairView

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,) # Cualquiera puede registrarse
    serializer_class = UserRegistrationSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    """
    Vista de Login que usa nuestro serializador personalizado.
    django-axes se enganchará a esta vista automáticamente.
    """
    serializer_class = MyTokenObtainPairSerializer

class UserProfileView(generics.RetrieveAPIView):
    """
    Vista para obtener los datos del usuario logueado.
    """
    permission_classes = (permissions.IsAuthenticated,) # Solo usuarios autenticados
    serializer_class = UserRegistrationSerializer # Reutilizamos el serializer sin los campos de password

    def get_object(self):
        return self.request.user