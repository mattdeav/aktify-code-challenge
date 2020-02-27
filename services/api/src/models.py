from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Campaign(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    created_on = db.Column(db.TIMESTAMP, server_default=db.func.now())
    updated_on = db.Column(db.TIMESTAMP, server_default=db.func.now(), server_onupdate=db.func.now())

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
