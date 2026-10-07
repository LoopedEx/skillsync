# SkillSync

SkillSync is a full-stack job-matching prototype designed to help job seekers discover relevant opportunities based on their skills and resume. The project combines a React frontend with a Django REST API and includes cookie-based JWT authentication, a resume upload model, and a dashboard/job discovery flow.

## Current project status

This repository is currently a working prototype / early-stage application. The UI is implemented for key flows such as landing, sign-up, login, dashboard, and job listings, while the backend provides the core auth and resume upload endpoints. Some functionality is still placeholder or mock data, especially the job content and some dashboard stats.

## Tech stack

### Frontend
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React icons

### Backend
- Django 5
- Django REST Framework
- Simple JWT
- django-cors-headers
- SQLite database

## Project structure

```text
skillsync/
├── client/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── server/
│   ├── jobs/
│   ├── resume/
│   ├── skillsync/
│   ├── users/
│   ├── db.sqlite3
│   ├── manage.py
│   └── media/
├── Pipfile
├── LICENSE
└── README.md
```

## Included features

### Authentication
The Django backend provides user creation, login, refresh, and logout endpoints using JWT tokens stored in cookies.

Routes defined in the backend:
- `POST /api/auth/signup/`
- `POST /api/auth/login/`
- `POST /api/auth/refresh/`
- `POST /api/auth/logout/`

### Resume upload
A `Resume` model stores uploaded resume files under the `media/resumes/` folder.

The API is exposed through the resume app router:
- `GET/POST /api/resumes/resume/`
- `GET/PUT/PATCH/DELETE /api/resumes/resume/:id/`

### Frontend experience
The frontend currently includes:
- Landing page with marketing content for the product
- Sign-up and login screens
- Protected dashboard route
- Job match list page with static mock entries

## Main app files

- Frontend app shell: `client/src/App.tsx`
- Landing page: `client/src/pages/Home.tsx`
- Login flow: `client/src/pages/Login.tsx`
- Sign-up flow: `client/src/pages/SignUp.tsx`
- Dashboard: `client/src/pages/Dashboard.tsx`
- Job listing page: `client/src/pages/Jobs.tsx`
- Django settings: `server/skillsync/settings.py`
- API routes: `server/skillsync/urls.py`
- User auth views: `server/users/views.py`
- Resume model: `server/resume/models.py`

## Local development setup

### 1) Backend
From the project root:

```bash
cd server
pipenv install
pipenv run python manage.py migrate
pipenv run python manage.py runserver
```

The Django server runs on:
- http://127.0.0.1:8000

### 2) Frontend
In a second terminal:

```bash
cd client
npm install
npm run dev
```

The Vite app runs on:
- http://localhost:8020

The frontend is configured to proxy `/api` requests to the Django backend on port 8000.

## Django configuration notes

The current configuration includes:
- SQLite database (`server/db.sqlite3`)
- JWT auth via `rest_framework_simplejwt`
- CORS enabled for `http://localhost:8020` and `http://127.0.0.1:8020`
- Media upload support under `/media/`

## Current limitations / placeholders

As of the current codebase:
- Job listings are hardcoded mock data in the frontend
- The `jobs` app models are still empty
- The dashboard contains example stats and activity cards rather than live data
- The app is not yet production-ready and is best treated as a frontend/backend prototype
- Some auth and routing logic is still in early implementation stages

## Suggested next steps

- connect real job data to the backend
- build out the remaining `jobs` and user profile models
- implement resume parsing / AI matching logic
- add real database relationships for applications, saved jobs, and profile metrics
- expand testing and deployment configuration for production use

## License

This project is licensed under the MIT License. See the repository license file for details.
