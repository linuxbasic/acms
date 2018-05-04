import graphene
from api.schemas.query import Query

schema = graphene.Schema(query=Query)