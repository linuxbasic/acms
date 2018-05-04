import graphene
from container.models import Container
from api.objects import ContainerType

class RegisterContainerMutation(graphene.Mutation):
    class Arguments:
        id = graphene.String()
        tracker_id = graphene.String()
    ok = graphene.Boolean()
    container = graphene.Field(lambda: ContainerType)

    def mutate(self, info, id, tracker_id):
        container = Container(id=id, tracker=tracker_id)
        container.save()
        return container