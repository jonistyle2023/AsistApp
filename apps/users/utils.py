from django.contrib.auth import get_user_model


def get_user_from_request(request, credentials):
    """
    Función helper para que django-axes pueda encontrar al usuario
    basado en el email durante un intento de login.
    """
    User = get_user_model()
    try:
        user = User.objects.get(email=credentials.get('email'))
        return user
    except User.DoesNotExist:
        return None
