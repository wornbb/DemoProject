from django.shortcuts import render
from django.contrib.staticfiles.views import serve
from django.http import HttpResponseRedirect
from django.urls import reverse
# Create your views here.
def redirect(request):
    return HttpResponseRedirect(reverse('registration:login'))