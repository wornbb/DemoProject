from django.shortcuts import render
from django.contrib.staticfiles.views import serve
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
from django.views.generic.edit import CreateView

# Create your views here.
def redirect(request):
    return HttpResponseRedirect(reverse('registration:login'))
def signup(request):

    return render(request, 'registration/signup.html')
class UserCreate(CreateView):
    model = User
    fields = ['username', 'password','email','first_name', 'last_name']