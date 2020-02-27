"""Create Campaign table

Revision ID: 6c369edd2a4c
Revises: 
Create Date: 2020-02-27 04:08:22.170132

"""
from alembic import op
from sqlalchemy import Column, func, Integer, String, TIMESTAMP

# revision identifiers, used by Alembic.
revision = '6c369edd2a4c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    campaign_table = op.create_table('campaign',
                    Column('id', Integer, primary_key=True),
                    Column('name', String(255), nullable=False),
                    Column('created_on', TIMESTAMP, nullable=False, server_default=func.now()),
                    Column('updated_on', TIMESTAMP, nullable=False, server_default=func.now(), server_onupdate=func.now()),
                    )

    # This type of data is not necessary for the application to work. It shouldn't be
    #  added as part of a migration. This is merely for convenience.
    op.bulk_insert(campaign_table, [
        {'name': 'Campaign 1'},
        {'name': 'Campaign 2'},
        {'name': 'Campaign 3'},
    ])


def downgrade():
    op.drop_table('campaign')
