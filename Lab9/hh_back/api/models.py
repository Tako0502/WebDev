from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category.to_json(),
        }

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Salary: {self.salary}, Company: {self.company}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': {
                'id': self.company.id,
                'name': self.company.name
            }
        }

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"
