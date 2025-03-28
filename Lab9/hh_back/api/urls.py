from django.urls import path
from api.views import company_list, company_detail, company_vacancies, vacancy_list, vacancy_detail, vacancies_top10
from api.views import category_list, category_detail, category_products, product_list, product_detail

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/products/', category_products),

    path('products/', product_list),
    path('products/<int:pk>/', product_detail),

    path('companies/', company_list),
    path('companies/<int:pk>/', company_detail),
    path('companies/<int:pk>/vacancies/', company_vacancies),

    path('vacancies/', vacancy_list),
    path('vacancies/<int:pk>/', vacancy_detail),
    path('vacancies/top_ten/', vacancies_top10),
]
