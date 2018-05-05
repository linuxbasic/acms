import graphene
from api.queries.all_containers import AllContainersQuery
from api.queries.all_clients import AllClientsQuery
from api.mutations.register_container import RegisterContainerMutation

class Query(AllContainersQuery, AllClientsQuery, graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    register_container = RegisterContainerMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)