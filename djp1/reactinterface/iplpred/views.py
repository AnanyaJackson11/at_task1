from rest_framework.views import APIView
from rest_framework.response import Response
import openai

openai.api_key = "YOUR_API_KEY"  # Secure this in prod

class AskLLMView(APIView):
    def post(self, request):
        prompt = request.data.get("prompt")
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        reply = completion.choices[0].message.content
        return Response({"response": reply})
