from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager

# Create your models here.

# NEEDS TO MATCH THE UserProfileManager in objects list


class UserProfileManager(BaseUserManager):

    def create_user(self, email, name, password=None):
        """Creates a new user profile object."""

        if not email:
            raise ValueError('Users must have an email address.')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        """Creates and saves a new super user with given details"""
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """ Represents a user profile inside our system """

    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)

    # REQUIRED
    is_active = models.BooleanField(default=True)

    # REQUIRED
    is_staff = models.BooleanField(default=False)

    # REQUIRED
    # object manager is used to manage user profiles
    # teaches django how to use the user profiles because we customized to AbstractBaseUser
    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    # email is already required by the system by default that is why only name
    REQUIRED_FIELDS = ['name']

    # REQUIRED
    def get_full_name(self):
        """Used to get a users full name."""
        return self.name

    # REQUIRED
    def get_short_name(self):
        """Used to gt a users short name"""
        return self.name

    # REQUIRED
    # SO DJANGO KNOWS HOW TO RETURN USER NAME AS STRING
    def __str__(self):
        """Django uses this when it needs to convert an object to a string"""
        return self.email


class ProfileFeedItem(models.Model):
    """Profile status update."""

    # models.CASCADE -- will delete all profile status updates that go with it
    user_profile = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    status_text = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Return the model as a string"""
        return self.status_text
