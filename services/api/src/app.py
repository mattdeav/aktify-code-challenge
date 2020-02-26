from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# DO NOT deploy this application to a production environment without first adjusting
# the CORS settings
CORS(app)


@app.route('/')
def index():
    return 'Hello, from Flask!'
