import graphene
from client.models import Client
from api.objects import ClientType

class RegisterClientMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        client_id = graphene.String()
        pin = graphene.Int()
    ok = graphene.Boolean()
    client = graphene.Field(lambda: ClientType)

    def mutate(self, info, name, client_id, pin):
        client = Client(client_id=client_id, name=name, client_pin=pin)
        client.save()
        return RegisterClientMutation(ok=True, client=client)