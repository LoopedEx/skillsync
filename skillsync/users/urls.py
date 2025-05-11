from django.urls import path
from .views import CreateUserAPI, LoginUserAPI, LogoutUserAPI, RefreshTokenAPI

urlpatterns=[
    path('login/', LoginUserAPI.as_view(), name="login"),
    path('logout/', LogoutUserAPI.as_view(), name="logout"),
    path('signup/', CreateUserAPI.as_view(), name="signup"),
    path('refresh/', RefreshTokenAPI.as_view(), name="refresh")
]