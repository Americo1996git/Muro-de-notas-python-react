from django.db import models
from django.utils.translation import ugettext_lazy as _

class Persona(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Nota(models.Model):
    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    creado_el = models.DateTimeField(auto_now_add=True)
    persona = models.ForeignKey(
        Persona, related_name="notas", on_delete=models.CASCADE
    )
    def __str__(self):
        return self.titulo