from flask import Blueprint
from flask.json import jsonify
from ..models import Campaign

campaign = Blueprint('campaign', __name__, url_prefix='/campaigns')


@campaign.route('/', methods=['GET'])
def index():
    campaigns = Campaign.query.all()

    return jsonify([c.serialize for c in campaigns])
