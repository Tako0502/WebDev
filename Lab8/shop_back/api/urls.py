from django.urls import path
from api.views import category_list, category_detail, category_products, product_list, product_detail

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/vacancies/', category_products),

    path('products/', product_list),
    path('products/<int:pk>/', product_detail),
]
