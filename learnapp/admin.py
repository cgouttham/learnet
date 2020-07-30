from django.contrib import admin
from learnapp import models
# Register your models here.

# Added a single comment for testing

admin.site.register(models.Concept)
admin.site.register(models.ConceptConnection)
admin.site.register(models.Resource)