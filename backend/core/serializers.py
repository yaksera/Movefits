from rest_framework import serializers

from .models import WalkthroughRequest


class WalkthroughRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = WalkthroughRequest
        fields = ['id', 'location', 'full_name', 'email', 'phone', 'discipline', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
