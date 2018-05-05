import graphene
from client.models import Client
from api.objects import ClientType
from random import randint

class RegisterClientMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        client_id = graphene.String()
    ok = graphene.Boolean()
    client = graphene.Field(lambda: ClientType)

    def mutate(self, info, name, client_id):
        pin = randint(0, 10000)
        client = Client(client_id=client_id, name=name, client_pin=pin)
        client.save()
        return RegisterClientMutation(ok=True, client=client)