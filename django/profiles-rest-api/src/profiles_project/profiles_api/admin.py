from django.contrib import admin

from . import models

# Register your models here.
# Need to add code below to show models in
# django admin
admin.site.register(models.UserProfile)
admin.site.register(models.ProfileFeedItem)
