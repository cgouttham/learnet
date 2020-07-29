import graphene
from graphene_django import DjangoObjectType

from learnapp.models import Concept, Resource

class ConceptType(DjangoObjectType):
    class Meta:
        model = Concept
        fields = '__all__'

class ResourceType(DjangoObjectType):
    class Meta:
        model = Resource
        fields = '__all__'

class Query(graphene.ObjectType):
    concepts = graphene.List(ConceptType)
    resources = graphene.List(ResourceType)
    concept = graphene.Field(ConceptType, id=graphene.Int())

    def resolve_concepts(self, info):
        return Concept.objects.all()
    
    def resolve_resources(self, info):
        return Resource.objects.all()
        
    def resolve_concept(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Concept.objects.get(pk=id)



schema = graphene.Schema(query=Query)
