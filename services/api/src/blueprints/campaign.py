from flask import Blueprint, request, redirect
from flask.json import jsonify
from src.models import Campaign, db

campaign_blueprint = Blueprint('campaign', __name__, url_prefix='/campaigns')


@campaign_blueprint.route('/', methods=['GET'])
def index():
    campaigns = Campaign.query.all()

    return jsonify([campaign.serialize for campaign in campaigns])


@campaign_blueprint.route('/<campaign_id>', methods=['GET'])
def get(campaign_id):
    if not campaign_id.isdigit():
        return jsonify({'message': 'id must be an integer'}), 422

    campaign = Campaign.query.get(campaign_id)

    if not campaign:
        return jsonify({'message': 'Campaign not found.'}), 404

    return jsonify(campaign.serialize)

@campaign_blueprint.route('/', methods=['POST'])
def create():
    new_campaign = Campaign(
        name=request.form.get('campaign_name'),
        description=request.form.get('campaign_description'),
        is_active=bool(request.form.get('campaign_is_active'))
    )
    db.session.add(new_campaign)
    db.session.commit()

    return redirect('/campaigns/%s' % (new_campaign.id))
