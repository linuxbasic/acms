import graphene
from api.queries import AllContainersQuery, AllClientsQuery
from api.mutations import RegisterContainerMutation, RegisterClientMutation

class Query(AllContainersQuery, AllClientsQuery, graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    register_container = RegisterContainerMutation.Field()
    register_client = RegisterClientMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)