from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import WalkthroughRequest
from .serializers import WalkthroughRequestSerializer


@api_view(['GET'])
def health(request):
    return Response({'status': 'ok'})


class WalkthroughRequestCreate(generics.CreateAPIView):
    queryset = WalkthroughRequest.objects.all()
    serializer_class = WalkthroughRequestSerializer
    permission_classes = [AllowAny]
