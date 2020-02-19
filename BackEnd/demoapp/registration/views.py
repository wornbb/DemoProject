from django.shortcuts import render
from django.contrib.staticfiles.views import serve
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.generic.edit import CreateView
from .forms import UserForm
# Create your views here.
def redirect(request):
    return HttpResponseRedirect(reverse('registration:login'))
def signup(request):
    return render(request, 'registration/signup.html')
class UserCreate(CreateView):
    template_name = 'registration/user_form.html'
    form_class  = UserForm