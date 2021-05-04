from rest_framework import serializers
from .models import Article


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        lookup_field = 'id'
