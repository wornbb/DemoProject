from django.urls import path, include
from . import views
from django.contrib.auth.views import LoginView

app_name = 'registration'
urlpatterns = [
    path('', views.redirect, name='login_redirect'),
    path('authentication/auth', LoginView.as_view(), name="login_validation"),
    path('authentication/signup', views.UserCreate.as_view(), name='signup'),
    path('authentication/', include('django.contrib.auth.urls')),
]