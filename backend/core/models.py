from django.db import models


class WalkthroughRequest(models.Model):
    class Location(models.TextChoices):
        MAYFAIR = 'mayfair', 'Mayfair • London'
        TRIBECA = 'tribeca', 'Tribeca • New York'

    class Discipline(models.TextChoices):
        REFORMER = 'reformer', 'Reformer & Somatic Flow'
        STRENGTH = 'strength', 'Olympic & Functional Strength'
        METABOLIC = 'metabolic', 'High-Cadence Metabolic'
        RESTORATIVE = 'restorative', 'Contrast Restorative'

    location = models.CharField(max_length=20, choices=Location.choices, default=Location.MAYFAIR)
    full_name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=32)
    discipline = models.CharField(max_length=20, choices=Discipline.choices, default=Discipline.REFORMER)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} ({self.get_location_display()})'
