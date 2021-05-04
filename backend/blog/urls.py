from django.urls import path, include
from rest_framework import routers
from .views import ArticleViewSet

router = routers.SimpleRouter()
router.register('article', ArticleViewSet, 'article')

urlpatterns = [
    path('api/', include(router.urls))
]
