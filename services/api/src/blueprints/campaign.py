from flask import Blueprint
from flask.json import jsonify
from ..models import Campaign

campaign_blueprint = Blueprint('campaign', __name__, url_prefix='/campaigns')


@campaign_blueprint.route('/', methods=['GET'])
def index():
    campaigns = Campaign.query.all()

    return jsonify([campaign.serialize for campaign in campaigns])


@campaign_blueprint.route('/<campaign_id>', methods=['GET'])
def get(campaign_id):
    campaign = Campaign.query.get(campaign_id)

    return jsonify(campaign.serialize)
