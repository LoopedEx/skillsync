from django.shortcuts import render

# Create your views here.
from .serilizers import UserSerializer
from rest_framework.generics import GenericAPIView, CreateAPIView
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .authentication import CookieJWTAuthentication
from rest_framework.authentication import authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
# Create user endpoint

class CreateUserAPI(GenericAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]
    authentication_classes=[CookieJWTAuthentication]

    def post(self, request):
        user = request.data
        serializer = self.get_serializer(data=user)

        if serializer.is_valid():
            user = serializer.save()
            token = RefreshToken.for_user(user)
            response = Response(serializer.data, status=status.HTTP_201_CREATED)
            response.set_cookie(key='refresh_token', value=str(token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            response.set_cookie(key='access_token', value=str(token.access_token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            return response
        return Response(serializer.errors)


# Login user endpoint

class LoginUserAPI(GenericAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[AllowAny]
    authentication_classes=[CookieJWTAuthentication]

    def post(self, request):
        unsigned_user = request.data
        user = authenticate(request, username=unsigned_user['username'], password=unsigned_user['password'])
        serializer = self.get_serializer(user)

        if user:
            token = RefreshToken.for_user(user)
            response = Response(serializer.data, status=status.HTTP_201_CREATED)
            response.set_cookie(key='refresh_token', value=str(token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            response.set_cookie(key='access_token', value=str(token.access_token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            return response
        return Response({'error': 'Credentials Invalid'})
    
#Refresh Token endpoint

class RefreshTokenAPI(GenericAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[CookieJWTAuthentication]

    def post(self, request):
        
        token = request.COOKIES.get('refresh_token')
        serializer = self.get_serializer(request.user)

        if token:
            token = RefreshToken(token)
            response = Response(serializer.data, status=status.HTTP_201_CREATED)
            response.set_cookie(key='refresh_token', value=str(token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            response.set_cookie(key='access_token', value=str(token.access_token), max_age=1800, samesite='Lax', httponly=True, secure=False)
            return response
        return Response({'error': 'Auth token not provided'}, status=status.HTTP_400_BAD_REQUEST)
    

    
# Logout User 

class LogoutUserAPI(GenericAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[CookieJWTAuthentication]

    def post(self, request):
        ref_cookie = request.COOKIES.get('refresh_token')
        acc_cookie = request.COOKIES.get('access_token')
        token = RefreshToken(ref_cookie)
        token.blacklist()
        response = Response({'msg': 'Signed Out'}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')

        return response