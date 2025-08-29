from django.shortcuts import render
from .serializers import ResumeSerializer
from .models import Resume
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework.permissions import AllowAny, IsAuthenticated
from users.authentication import CookieJWTAuthentication

# Create your views here.


class ResumeViewset(ModelViewSet):
    queryset=Resume.objects.all()
    serializer_class=ResumeSerializer
    permission_classes=[AllowAny]
    authentication_classes=[CookieJWTAuthentication]
    parser_classes=[MultiPartParser, FormParser]

    def destroy(self, request, *args, **kwargs):
        file = self.get_object()
        if file:
            file.path.delete()
            
        return super().destroy(request, *args, **kwargs)