# Create your models here.
from django.db import models
# import PIL
import datetime


class Article(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()
    # category_choice = (
    #     ('s', 'Software'),
    #     ('b', 'Book'),
    #     ('d', 'Development'),
    #     ('t', 'Tips'),
    #     ('s', 'Tutorial'),
    #     ('w', 'Web'),
    #     # add more for other choice
    # )
    # category = models.CharField(max_length=1, choices=category_choice)
    # picture = models.ImageField(blank=True, null=True)
    date_created = models.DateField(auto_now_add=True)
    date = models.DateField(
        default=datetime.date.today)

    def __str__(self):
        return self.title
