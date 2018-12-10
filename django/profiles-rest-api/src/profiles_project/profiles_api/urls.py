from django.conf.urls import url
from django.conf.urls import include

from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

# 1st paramenter is name of api
# 2nd paaremeter is name of viewset we want to assign to router
# 3rd parameter is the base_name
router.register('hello-viewset', views.HelloViewSet, base_name="hello-viewset")
# because this uses a model serializer don't need to define base_name
router.register('profile', views.UserProfileViewSet)
# need to set the base_name because it is not a model viewset
router.register('login', views.LoginViewSet, base_name="login")
router.register('feed', views.UserProfileFeedViewSet)

urlpatterns = [
    url(r'^hello-view/', views.HelloApiView.as_view()),
    # need include to include urls which router automaticaly generates
    url(r'', include(router.urls))

]
