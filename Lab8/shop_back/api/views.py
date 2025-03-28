from django.http.response import JsonResponse

from api.models import Category, Product


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

