FROM python:3
WORKDIR /app
RUN pip install Django
RUN pip install psycopg2-binary
RUN pip install graphene_django
RUN pip install requests
COPY . /app
CMD python /app/manage.py runserver