from .views import ResumeViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resume', ResumeViewset, basename='resume')

urlpatterns=router.urls