from graphene_django import DjangoObjectType
from notas.models import Nota

class NotaType(DjangoObjectType):
    class Meta:
        model = Nota
        only_fields = (
            'id',
            'titulo',
            'descripcion',
            'creado_el',
        )
        use_connection = True


