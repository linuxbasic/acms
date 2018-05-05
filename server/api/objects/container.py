import graphene
from graphene_django.types import DjangoObjectType

from container.models import Container
from location.api_client import get_data

class ContainerType(DjangoObjectType):
    class Meta:
        model = Container

    lon = graphene.Float()
    lat = graphene.Float()

    def resolve_lon(self, info, **kwargs):
        return get_data(self.tracker_id)[0]['lon']

    def resolve_lat(self, info, **kwargs):
        return get_data(self.tracker_id)[0]['lat']
        