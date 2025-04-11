from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import random

app = Flask(__name__, template_folder='app/templates', static_folder='app/static')
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flashcards.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import models after db initialization
from app.models.flashcard import Flashcard

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cards', methods=['GET'])
def cards():
    flashcards = Flashcard.query.all()
    return render_template('cards.html', flashcards=flashcards)

@app.route('/add_card', methods=['GET', 'POST'])
def add_card():
    if request.method == 'POST':
        chinese = request.form.get('chinese')
        pinyin = request.form.get('pinyin')
        english = request.form.get('english')
        
        if chinese and english:
            new_card = Flashcard(chinese=chinese, pinyin=pinyin, english=english)
            db.session.add(new_card)
            db.session.commit()
            flash('New flashcard added!', 'success')
            return redirect(url_for('cards'))
        else:
            flash('Chinese and English fields are required!', 'danger')
    
    return render_template('add_card.html')

@app.route('/edit_card/<int:id>', methods=['GET', 'POST'])
def edit_card(id):
    card = Flashcard.query.get_or_404(id)
    
    if request.method == 'POST':
        card.chinese = request.form.get('chinese')
        card.pinyin = request.form.get('pinyin')
        card.english = request.form.get('english')
        
        db.session.commit()
        flash('Flashcard updated!', 'success')
        return redirect(url_for('cards'))
    
    return render_template('edit_card.html', card=card)

@app.route('/delete_card/<int:id>')
def delete_card(id):
    card = Flashcard.query.get_or_404(id)
    db.session.delete(card)
    db.session.commit()
    flash('Flashcard deleted!', 'success')
    return redirect(url_for('cards'))

@app.route('/study', methods=['GET'])
def study():
    flashcards = Flashcard.query.all()
    if not flashcards:
        flash('Add some flashcards first!', 'warning')
        return redirect(url_for('add_card'))
    return render_template('study.html')

@app.route('/api/cards')
def api_cards():
    flashcards = Flashcard.query.all()
    return jsonify([{
        'id': card.id,
        'chinese': card.chinese,
        'pinyin': card.pinyin,
        'english': card.english
    } for card in flashcards])

@app.route('/api/random_card')
def random_card():
    flashcards = Flashcard.query.all()
    if not flashcards:
        return jsonify({'error': 'No flashcards available'}), 404
    card = random.choice(flashcards)
    return jsonify({
        'id': card.id,
        'chinese': card.chinese,
        'pinyin': card.pinyin,
        'english': card.english
    })

if __name__ == '__main__':
    # Create the database tables if they don't exist
    with app.app_context():
        db.create_all()
    app.run(debug=True)
