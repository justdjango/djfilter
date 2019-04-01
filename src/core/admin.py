from django.contrib import admin

from .models import Author, Category, Journal

admin.site.register(Author)
admin.site.register(Category)
admin.site.register(Journal)
