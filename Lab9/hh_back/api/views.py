from django.http.response import JsonResponse

from api.models import Company, Vacancy, Category, Product


def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def category_products(request, pk=None):
    try:
        category = Category.objects.get(id=pk)
        products = Product.objects.filter(category=category)
        products_json = [product.to_json() for product in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, pk=None):
    try:
        product = Product.objects.get(id=pk)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def company_vacancies(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })


def vacancies_top10(request):
    vacancies = Vacancy.objects.all().order_by("-salary")[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
