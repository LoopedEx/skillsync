from .models import Resume
from rest_framework import serializers

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Resume
        fields='__all__'
        read_only_fields=['created_at',]