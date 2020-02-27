from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from .config import Config
from .blueprints.campaign import campaign_blueprint
from .blueprints.root import root_blueprint
from .models import db

migrate = Migrate()


def create_app(config_class):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # DO NOT deploy this application to a production environment without first adjusting
    # the CORS settings
    CORS(app)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Initialize blueprints
    app.register_blueprint(root_blueprint)
    app.register_blueprint(campaign_blueprint)

    return app
