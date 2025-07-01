# Define la estructura de las tablas en la base de datos para los cursos y las clases.
from django.db import models
import uuid


class Curso(models.Model):
    """
    Representa un curso o materia, que agrupa varias clases.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=100, unique=True, help_text="Nombre del curso, ej: 'Cálculo I'")
    # El atributo 'lista' es ambiguo. Lo interpretaremos como una relación
    # a una lista de estudiantes, que se puede añadir más adelante.
    # Por ahora, lo dejamos como un campo de texto opcional.
    lista_info = models.TextField(blank=True, null=True,
                                  help_text="Información adicional o lista de estudiantes (temporal)")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre


class Clase(models.Model):
    """
    Representa una clase específica que pertenece a un curso.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Relación con Curso: Una clase pertenece a un solo curso, pero un curso puede tener muchas clases.
    curso = models.ForeignKey(Curso, related_name='clases', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100, help_text="Nombre o tema de la clase, ej: 'Clase de Límites'")
    horario = models.CharField(max_length=100, help_text="Horario de la clase, ej: 'Lunes 10:00 - 12:00'")
    # El QR se puede generar basado en el ID de la clase, por lo que no necesitamos almacenarlo.
    # Si se quisiera almacenar una imagen o un código específico, se podría usar un ImageField o CharField.
    # Por simplicidad, asumimos que el QR se genera dinámicamente.
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.curso.nombre} - {self.nombre}"
