from django.db import models

# Create your models here.

class Task(models.Model):
    # Creamos el modelo con titulo y si esta hecho o no
    title = models.CharField(max_length=200)
    done = models.BooleanField(default=False)

    # Sirve para visualizar en el admin el nombre de las tareas
    def __str__(self):
        return self.title