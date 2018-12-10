from rest_framework import permissions


class UpdateOwnProfile(permissions.BasePermission):
    """Allow users to edit their own profile."""

    def has_object_permission(self, request, view, obj):
        """Check user is trying to edit own profile."""

        # if method does not change any data (GET)
        # then everything is ok to simply view another profile
        if request.method in permissions.SAFE_METHODS:
            return True

        # if obj.id ==request.user.id then allow for user to edit
        # own data
        return obj.id == request.user.id


class PostOwnStatus(permissions.BasePermission):
    """Allow users to update their own status item"""

    def has_object_permission(self, request, view, obj):
        """Check user is trying to edit own profile"""

        # can view other people statuses but cannot edit other people statuses
        if request.method in permissions.SAFE_METHODS:
            return True

        # obj.user_profile is from post / status -- request.user is loggined in user
        return obj.user_profile.id == request.user.id
