import graphene
from graphene_django.types import DjangoObjectType

from client.models import Client

class ClientType(DjangoObjectType):
    class Meta:
        model = Client
        