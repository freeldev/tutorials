# base image
FROM python:3.4-alpine

# copy app into image
ADD . /code

# set working dir
WORKDIR /code

# install requirements
RUN pip install -r requirements.txt

#set the default app
CMD ["python", "app.py"]
