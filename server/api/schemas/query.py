import graphene
from graphene_django.types import DjangoObjectType

from .container import ContainerType
from container.models import Container


class Query(graphene.ObjectType):
    all_containers = graphene.List(ContainerType)

    def resolve_all_containers(self, info, **kwargs):
        return Container.objects.all()