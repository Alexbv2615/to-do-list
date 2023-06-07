from rest_framework import serializers
from .models import Task

# este codigo en resumen sirve para poder enviar los datos del back, que estan en formato python, al front en formato JSON
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # el codigo de abajo sirve para seleccionar todo los atributos
        fields = '__all__'
        # si quieres seleccionar solo algunos puedes optar por esto:
        # fields = ('id', 'title', 'done')