from django.db import models

# Create your models here.

class Concept(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)

class Resource(models.Model):
    VIDEO, AUDIO, TEXT = 'V', 'A', 'T'
    MEDIA_TYPE_CHOICES = [(VIDEO, 'video'), (AUDIO, 'audio'), (TEXT, 'text')]
    
    media_type = models.CharField(max_length=1, choices=MEDIA_TYPE_CHOICES, default=TEXT)
    description = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    hyperlink = models.CharField(max_length=100)
    votes = models.IntegerField(default=0)
    concept =  models.ForeignKey(Concept, on_delete=models.CASCADE)

class ConceptConnection(models.Model):
    start_concept = models.ForeignKey(Concept, related_name="start_concept", on_delete=models.CASCADE)
    end_concept = models.ForeignKey(Concept, related_name="end_concept", on_delete=models.CASCADE)

