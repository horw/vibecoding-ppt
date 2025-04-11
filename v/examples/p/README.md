# Chinese Flashcard Learning Application

A Flask-based web application for learning Chinese characters using digital flashcards. This application allows users to create, manage, and study Chinese vocabulary with support for Chinese characters, pinyin, and English translations.

## Features

- Create, edit, and delete flashcards
- View all flashcards in a card layout
- Study mode with flip cards to test your knowledge
- Random card selection for varied study sessions
- Responsive design for desktop and mobile use

## Installation

1. Clone or download this repository
2. Install the required packages:

```
pip install -r requirements.txt
```

## Usage

1. Start the Flask application:

```
python app.py
```

2. Open your web browser and navigate to: http://localhost:5000

## Application Structure

- `app.py`: Main application file with Flask routes
- `app/models/`: Database models
- `app/templates/`: HTML templates
- `app/static/`: Static files (CSS, JS)

## Dependencies

- Flask: Web framework
- Flask-SQLAlchemy: ORM for database operations
- SQLite: Database backend (no installation required)
- Bootstrap 5: Frontend framework (loaded via CDN)

## Extending the Application

Possible future enhancements:
- User authentication
- Categorizing flashcards by topic
- Spaced repetition learning algorithm
- Import/export flashcard data
- Audio pronunciation
