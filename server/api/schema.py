import graphene
from api.queries.all_containers import AllContainersQuery
from api.mutations.register_container import RegisterContainerMutation

class Query(AllContainersQuery, graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    register_container = RegisterContainerMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)