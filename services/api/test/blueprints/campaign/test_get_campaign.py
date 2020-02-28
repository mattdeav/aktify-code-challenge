from src.models import Campaign


def get_campaign_path(campaign_id):
    return f'/campaigns/{campaign_id}'


def test_get_campaign_not_found(client):
    # With no campaigns in the DB

    # GET /campaigns/1001
    response = client.get(get_campaign_path(1001))

    # Should return a 404
    assert response.status_code == 404


def test_get_campaign_invalid_id(client):
    # With no campaigns in the DB

    # GET /campaigns/<STRING>
    response = client.get(get_campaign_path('invalid_id'))

    # Should return a 422
    assert response.status_code == 422


def test_get_campaign_ok(client, session):
    # With a campaign in the DB
    campaign1 = Campaign(name='Campaign 1')
    session.add(campaign1)
    session.commit()

    # GET /campaigns/<NEW_CAMPAIGN_ID>
    response = client.get(get_campaign_path(campaign1.id))

    # Should successfully return the campaign
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['name'] == 'Campaign 1'
