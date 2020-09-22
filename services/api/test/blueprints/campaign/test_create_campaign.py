from flask import url_for, request
from src.models import Campaign

CREATE_CAMPAIGNS_PATH = '/campaigns/'


def test_create_campaign(client):
    campaign_name = 'Campaign 1'
    # POST /campaigns/
    response = client.post(
        CREATE_CAMPAIGNS_PATH,
        data=dict(
            campaign_name=campaign_name,
            campaign_description='test campaign',
            campaign_is_active=True
        )
    )

    # Should redirect with status code 302
    assert response.status_code == 302

    # I'm sure there's a smarter way to test this but it works
    campaign_id = response.location.split(CREATE_CAMPAIGNS_PATH)[1]
    assert Campaign.query.get(campaign_id).name == campaign_name
    assert response.location == url_for("campaign.get", campaign_id=campaign_id, _external=True)
