# SpendSmart

Personal finance tracker with expense categorization, budget tracking, and spending charts.

## Stack

- Django + SQLite (backend)
- HTML/CSS/JS templates + Chart.js (frontend charts)
- React frontend (in progress)

## Running it

```bash
cd backend/Spend-Smart-Main
python -m venv venv
source venv/bin/activate
pip install django pillow
python manage.py migrate
python manage.py runserver
```

Then go to http://127.0.0.1:8000/
