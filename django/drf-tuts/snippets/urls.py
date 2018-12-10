# USING ROUTERS WITH VIEWSETS

from django.conf.urls import url, include
from snippets import views


# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determine autmatically by the router
urlpatterns = [
            url(r'^', include(router.urls))
        ]

# UNDER THE HOOD ACTIONS WITH VIEWSET

# from snippets.views import SnippetViewSet, UserViewSet, api_root

# snippet_list = SnippetViewSet.as_view({
    # 'get': 'list',
    # 'post': 'create'
# })

# snippet_detail = SnippetViewSet.as_view({
    # 'get': 'retrieve',
    # 'put': 'update',
    # 'patch': 'partial_update',
    # 'delete': 'destroy'
# })

# snippet_highlight = SnippetViewSet.as_view({
    # 'get': 'highlight'
    # }, renderer_classses=[renderers.StaticHTMLRenderer])

# user_list = UserViewSet.as_view({
    # 'get': 'list'
# })

# user_detail = UserViewSet.as_view({
    # 'get': 'retrieve'
# })

# urlpatterns = format_suffix_patterns([
    # url(r'^$', api_root),
    # url(r'^snippets/$', snippet_list, name='snippet-list'),
    # url(r'^snippets/(?P<pk>[0-9]+)/$', snippet_detail, name='snippet-detail'),
    # url(r'^snippets/(?P<pk>[0-9]+)/highlight/$', snippet_highlight, name='snippet-highlight'),
    # url(r'^users/$', user_list, name='user-list'),
    # url(r'^users/(?P<pk>[0-9]+/$', user_detail, name='user-detail')
# ])
    


# URL CONF WITHOUT VIEWSET ROUTER

# from django.conf.urls import url
# from rest_framework.urlpatterns import format_suffix_patterns

# from snippets import views


# urlpatterns = [
        # url(r'^$', views.api_root),
        # url(r'^snippets/$', views.SnippetList.as_view(), name='snippet-list'),
        # url(r'^snippets/(?P<pk>[0-9]+)/$', views.SnippetDetail.as_view(), name='snippet-detail'),
        # url(r'^snippets/(?P<pk>[0-9]+)/highlight/$', views.SnippetHighlight.as_view(), name='snippet-highlight'),
        # url(r'^users/$', views.UserList.as_view(), name='user-list'),
        # url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='user-detail'),
    # ]

# urlpatterns = format_suffix_patterns(urlpatterns)
