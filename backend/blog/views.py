# Create your views here.

from .models import Article
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAdminUser
from .serializers import ArticleSerializers


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArticleSerializers
