FROM python:3.11.3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1


RUN pip3 install django


WORKDIR /backend
COPY requirements.txt /backend/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

COPY . /backend

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



