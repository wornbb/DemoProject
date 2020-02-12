from django.urls import path, include
from . import views
app_name = 'registration'
urlpatterns = [
    path('', views.redirect, name='login_redirect'),
    path('authentication/signup', views.UserCreate.as_view(), name='signup'),
    path('authentication/', include('django.contrib.auth.urls')),
]