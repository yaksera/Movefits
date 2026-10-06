from django.contrib import admin

from .models import WalkthroughRequest


@admin.register(WalkthroughRequest)
class WalkthroughRequestAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'location', 'discipline', 'created_at']
    list_filter = ['location', 'discipline', 'created_at']
    search_fields = ['full_name', 'email', 'phone']
