import graphene
from graphene_django.types import DjangoObjectType

from api.objects import ContainerType
from container.models import Container


class AllContainersQuery(graphene.ObjectType):
    all_containers = graphene.List(ContainerType)

    def resolve_all_containers(self, info, **kwargs):
        return Container.objects.all()