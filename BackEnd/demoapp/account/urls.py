from django.urls import path, include
from . import views

app_name = 'account'
urlpatterns = [
    path('<str:username>/', views.account.as_view(), name="account"),
]