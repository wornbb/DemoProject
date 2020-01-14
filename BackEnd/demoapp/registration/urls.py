from django.urls import path, include
from . import views
app_name = 'registration'
urlpatterns = [
    path('', views.redirect, name='login_redirect'),
    path('authentication/', include('django.contrib.auth.urls')),
]