# Create your views here.
# users/views.py
from django.shortcuts import render

def login_view(request):
    return render(request, 'pages/sign-in.html')
