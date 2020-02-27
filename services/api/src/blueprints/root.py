from flask import Blueprint
from flask.json import jsonify

root = Blueprint('root', __name__, url_prefix='')


@root.route('/', methods=['GET'])
def index():
    return jsonify('Hello, from Flask!')
