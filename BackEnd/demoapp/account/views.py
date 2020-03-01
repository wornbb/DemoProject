from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import PanelForm
# Create your views here.
class account(FormView):
    form_class = PanelForm
    def get(self, request, *args, **kwargs):
        form = self.get_form()
        self.kwargs['username']

