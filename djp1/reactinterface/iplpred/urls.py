from django.urls import path
from .views import AskLLMView

urlpatterns = [
    path("api/ask/", AskLLMView.as_view(), name="ask-llm"),
]
# import sys
# print(sys.executable)
