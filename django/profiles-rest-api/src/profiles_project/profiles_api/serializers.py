from rest_framework import serializers

from . import models


class HelloSerializer(serializers.Serializer):
    """Serializez a name field for testing our APIView"""

    name = serializers.CharField(max_length=10)

# model serializer is like the base serializer but built to work with django models


class UserProfileSerializer(serializers.ModelSerializer):
    """A serializer for our user profile objects"""

    class Meta:
        # what model do we want to use ?
        model = models.UserProfile
        # what fields from model we want to use
        fields = ("id", "email", "name", "password")
        # extra kew
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """Create and return a new user."""

        user = models.UserProfile(
            email=validated_data['email'],
            name=validated_data['name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class ProfileFeedItemSerializer(serializers.ModelSerializer):
    """A serializer for profile feed items"""

    class Meta:
        model = models.ProfileFeedItem
        fields = ('id', 'user_profile', 'status_text', 'created_on')
        extra_kwargs = {'user_profile': {'read_only': True}}
