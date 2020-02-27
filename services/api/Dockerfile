# [STAGE] base (build)
FROM python:3.6-buster as base

# Install and configure virtual environment
ARG VIRTUAL_ENV_PATH=/opt/virtualenv
RUN pip3 install --upgrade pip setuptools virtualenv
RUN virtualenv --python=python3 ${VIRTUAL_ENV_PATH} && \
    . ${VIRTUAL_ENV_PATH}/bin/activate

# Install application dependencies
COPY requirements.txt /requirements.txt
RUN pip3 install -r /requirements.txt


# [STAGE] development (runtime)
FROM base as development

WORKDIR /app

ENV FLASK_APP=src/app.py

CMD ["./entrypoint.sh"]