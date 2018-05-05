import graphene
from container.models import Container
from api.objects import ContainerType

class RegisterContainerMutation(graphene.Mutation):
    class Arguments:
        container_id = graphene.String()
        tracker_id = graphene.String()
    ok = graphene.Boolean()
    container = graphene.Field(lambda: ContainerType)

    def mutate(self, info, container_id, tracker_id):
        container = Container(container_id=container_id, tracker_id=tracker_id)
        container.save()
        return RegisterContainerMutation(ok=True, container=container)