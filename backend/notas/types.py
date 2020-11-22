from graphene_django import DjangoObjectType
from graphene import relay
from notas.models import Nota, Persona

class NotaType(DjangoObjectType):
    class Meta:
        model = Nota
        filter_fields = {
            'titulo': ['exact', 'icontains', 'istartswith'],
            'descripcion': ['exact', 'icontains'],
            'persona': ['exact'],
            'persona__nombre': ['exact'],
        }
        interfaces = (relay.Node, )


class PersonaType(DjangoObjectType):
    class Meta:
        model = Persona
        only_fields = (
            'id',
            'nombre',
        )
        use_connection = True


