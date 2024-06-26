from django.urls import path, include
from .views import BirthDateViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', BirthDateViewSet)

urlpatterns = [
    # path('', events_list, name='events_list'),
    # path('create/', event_create, name='event_create'),
    # path('<int:pk>/', event_detail, name='event_detail'),
    # path('<int:pk>/edit/', event_update),
    # path('<int:pk>/delete/', event_delete)
    path('', include(router.urls))
]
