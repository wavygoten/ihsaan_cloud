from django.shortcuts import render

# Create your views here.

from .models import Lead
from .serializer import LeadSerializer
from rest_framework import generics


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
