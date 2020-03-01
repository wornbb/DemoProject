from django.shortcuts import render
from django.contrib.staticfiles.views import serve
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views.generic.edit import CreateView
from .forms import UserForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.views import LoginView
# Create your views here.
def redirect(request):
    return HttpResponseRedirect(reverse('registration:login'))


def my_view(request):
    if request.method == "POST":
        username = request.POST.get('username','')
        password = request.POST.get('password','')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return HttpResponse("good")
        else:
            # Return an 'invalid login' error message.
            return HttpResponse(username+password)
class UserCreate(CreateView):
    template_name = 'registration/user_form.html'
    form_class  = UserForm