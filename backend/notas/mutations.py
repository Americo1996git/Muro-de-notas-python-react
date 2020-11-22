from graphene import Boolean, Field, ID, InputObjectType, Mutation, String, Int
from rest_framework import serializers
from notas.models import Nota
from .types import NotaType

class NotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nota
        fields = (
            'titulo',
            'descripcion',
            'persona',
        )
class NotaInputType(InputObjectType):
    titulo = String()
    descripcion = String()
    persona = Int()

class NotaCreatepi(Mutation):
    class Arguments:
        input = NotaInputType(required=True)
    nota = Field(NotaType)
    
    @classmethod
    def mutate(cls, root, info, **data):
        serializer = NotaSerializer(data=data.get('input'))
        serializer.is_valid(raise_exception=True)
        return NotaCreatepi(nota=serializer.save())

class NotaDelete(Mutation):
    class Arguments:
        id = ID(required=True)
    ok = Boolean()
    @classmethod
    def mutate(cls, root, info, **data):
        nota = Nota.objects.get(id=data.get('id'))
        nota.delete()
        return NotaDelete(ok=True)