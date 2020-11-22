from graphene import Argument, Field, ID, ObjectType, Schema, relay
from graphene_django import DjangoConnectionField
from notas.models import Nota, Persona
from notas.types import NotaType, PersonaType
from notas.mutations import NotaCreatepi, NotaDelete


class Query(ObjectType):
    notas = DjangoConnectionField(NotaType)
    personas = DjangoConnectionField(PersonaType)
    nota = Field(NotaType, id=Argument(ID, required=True))

    def resolve_notas(root, info, **kwargs):
        return Nota.objects.all()
    def resolve_nota(root, info, **kwargs):
        return Nota.objects.get(id=kwargs.get('id'))
    def resolve_personas(root, info, **kwargs):
        return Persona.objects.all()    
    def resolve_all_notas(root, info, **kwargs):
        return Nota.objects.select_related('persona').all()



class Mutation(ObjectType):
    nota_create2 = NotaCreatepi.Field()
    nota_delete = NotaDelete.Field()
    
schema = Schema(query=Query, mutation=Mutation)