import graphene
from graphene_django.types import DjangoObjectType

from container.models import Container


class ContainerType(DjangoObjectType):
    class Meta:
        model = Container