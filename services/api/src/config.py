import os


class Config(object):
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    TESTING = False

    # noinspection PyPep8Naming
    @property
    def SQLALCHEMY_DATABASE_URI(self):
        database_name = os.environ.get('POSTGRES_DB')
        host = os.environ.get('POSTGRES_HOST')
        password = os.environ.get('POSTGRES_PASSWORD')
        port = os.environ.get('POSTGRES_PORT')
        user = os.environ.get('POSTGRES_USER')

        return f'postgresql://{user}:{password}@{host}:{port}/{database_name}'


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
