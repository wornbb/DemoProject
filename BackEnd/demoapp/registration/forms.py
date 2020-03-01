from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm, ValidationError
import django.forms as forms    
from django.urls import reverse
def get_absolute_url(self):
    return reverse('registration:login_redirect')
class UserForm(UserCreationForm):
    class Meta:
        model = User
        model.get_absolute_url = get_absolute_url
        fields = ['username', 'email','first_name', 'last_name']
