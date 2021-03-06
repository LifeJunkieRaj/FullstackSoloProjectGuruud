from .db import db


class Response(db.Model):
    __tablename__ = "responses"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    ask_a_guru_id = db.Column(db.Integer, db.ForeignKey("ask_a_guru.id"),
                              nullable=False)
    response = db.Column(db.String(1000), nullable=False)

    user = db.relationship("User", back_populates="response")
    ask_a_guru = db.relationship("AskAGuru", back_populates="responses")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "ask_a_guru_id": self.ask_a_guru_id,
            "response": self.response,
            "username": self.user.username,
        }
