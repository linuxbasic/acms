import graphene
from graphene_django.types import DjangoObjectType

from api.objects import ClientType
from client.models import Client


class AllClientsQuery(graphene.ObjectType):
    all_clients = graphene.List(ClientType)

    def resolve_all_clients(self, info, **kwargs):
        return Client.objects.all()