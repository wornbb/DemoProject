from django.forms import ModelForm
from .models import UserPanel
from django import forms

class PanelForm(ModelForm):
    rank = forms.IntegerField()

    class Meta:
        model = UserPanel
        fields = ['username']
