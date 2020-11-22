from graphene import Argument, Field, ID, ObjectType, Schema
from graphene_django import DjangoConnectionField
from notas.models import Nota
from notas.types import NotaType
class Query(ObjectType):
    notas = DjangoConnectionField(NotaType)
    nota = Field(NotaType, id=Argument(ID, required=True))
    def resolve_notas(root, info, **kwargs):
        return Nota.objects.all()
    def resolve_nota(root, info, **kwargs):
        return Nota.objects.get(id=kwargs.get('id'))
schema = Schema(query=Query)