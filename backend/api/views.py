# from django.shortcuts import render, get_object_or_404, redirect
# from django.http import HttpResponse
# from django.contrib.auth.decorators import login_required
# from django.db.models import Q
# from .models import Person
# from .forms import PersonForm
from rest_framework import viewsets
from .permissions import IsAuthenticatedUser
from .models import Person
from .serializer import BirthDateSerializer


# @login_required
# def events_list(request):
#     param = request.GET.get('search')
#     if param:
#         persons = Person.objects.filter(Q(name__icontains=param)).distinct()
#     else:
#         persons = Person.objects.all()
#     return render(request, '', {'persons': persons, 'search_keyword': param}) # in empty string we should have the template file's address

# @login_required
# def event_detail(request, pk):
#     person = get_object_or_404(Person, pk=pk)
#     return render(request, '', {'person': person})

# @login_required
# def event_create(request, pk):
#     if request.method == 'POST':
#         form = PersonForm(request.POST)
#         if form.is_valid():
#             person = form.save(commit=False)
#             person.user = request.user
#             person.save()
#             return redirect('events_list')
#     else:
#         form = PersonForm()
#     return render(request, '', {'form': form}) # in empty string we should have the template file's address

# @login_required
# def event_update(request, pk):
#     person = get_object_or_404(Person, pk=pk)
#     if request.method == 'POST':
#         form = PersonForm(request.POST, instance=person)
#         if form.is_valid():
#             form.save()
#             return redirect('event_detail', pk=person.pk)
#     else:
#         person = PersonForm(instance=person)
#     return render(request, '', {'form': form}) # in empty string we should have the template file's address

# @login_required
# def event_delete(request, pk):
#     person = get_object_or_404(Person, pk=pk)
#     if request.method == 'POST':
#         person.delete()
#         return redirect('events_list')
#     return render(request, '', {'person': person}) # in empty string we should have the template file's address

class BirthDateViewSet(viewsets.ModelViewSet):
    model = Person
    serializer_class = BirthDateSerializer
    queryset = Person.objects.all() 
    permission_classes = [IsAuthenticatedUser]
    