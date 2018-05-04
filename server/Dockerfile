FROM python:3
WORKDIR /app
RUN pip install Django
RUN pip install psycopg2-binary
COPY . /app
CMD python /app/manage.py runserver