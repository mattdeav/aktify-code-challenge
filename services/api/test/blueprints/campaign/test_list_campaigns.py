from src.models import Campaign

LIST_CAMPAIGNS_PATH = '/campaigns/'


def test_list_campaigns_empty(client):
    # With no campaigns in the DB

    # GET /campaigns/
    response = client.get(LIST_CAMPAIGNS_PATH)

    # Should successfully return an empty array
    assert response.status_code == 200
    json_data = response.get_json()
    assert len(json_data) == 0


def test_list_campaigns_non_empty(client, session):
    # With campaigns in the DB
    campaign1 = Campaign(name='Campaign 1', is_active=True)
    campaign2 = Campaign(name='Campaign 2', is_active=False)
    session.add(campaign1)
    session.add(campaign2)
    session.commit()

    # GET /campaigns/
    response = client.get(LIST_CAMPAIGNS_PATH)

    # Should successfully return a non-empty array
    assert response.status_code == 200
    json_data = response.get_json()
    assert len(json_data) == 2
