import graphene
from graphene_django.types import DjangoObjectType

from container.models import Container
from location.api_client import get_data

class ContainerType(DjangoObjectType):
    class Meta:
        model = Container

    lon = graphene.Float()
    lat = graphene.Float()
    pickup = graphene.Boolean()

    def resolve_lon(self, info, **kwargs):
        return get_data(self.tracker_id)[-1]['lon']

    def resolve_lat(self, info, **kwargs):
        return get_data(self.tracker_id)[-1]['lat']

    def resolve_pickup(self, info, **kwargs):
        return get_data(self.tracker_id)[-1]['request'] == 1
        