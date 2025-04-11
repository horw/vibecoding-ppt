from app import db
from datetime import datetime

class Flashcard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    chinese = db.Column(db.String(100), nullable=False)
    pinyin = db.Column(db.String(100))
    english = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f"Flashcard('{self.chinese}', '{self.english}')"
