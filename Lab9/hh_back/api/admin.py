from django.contrib import admin

from api.models import Company, Vacancy, Category, Product

# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)
admin.site.register(Category)
admin.site.register(Product)