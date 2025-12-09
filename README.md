Node.js + MongoDB + Docker Backend API

This project is a complete backend application built using Node.js , Express , MongoDB , Mongoose , Docker , and Docker Compose .
It demonstrates how to containerize applications, orchestrate multi-container environments, and build a production-style backend service.

🧱 Features

REST API with Express
MongoDB database running inside Docker
Mongoose schema + model structure
Multi-container setup using Docker Compose
Automatic networking between API ↔ MongoDB
Persistent database storage using Docker volumes
Clean environment-based configuration
Easy to run on any machine with Docker installed

🛠️ Tech Stack

Node.js
Express.js
MongoDB
Mongoose
Docker
Docker Compose

📂 Project Structure
node-docker-learn/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── src/
    ├── index.js
    └── models/
        └── User.js

🔌 API Endpoints
➤ POST /users — Create a user

Request Body (JSON):

{
  "name": "Khurram",
  "email": "test@example.com"
}


Example Response:

{
  "message": "user created",
  "user": {
    "_id": "123...",
    "name": "Khurram",
    "email": "test@example.com"
  }
}

➤ GET /users — Get all users

Example Response:

{
  "users": [
    {
      "_id": "123...",
      "name": "Khurram",
      "email": "test@example.com"
    }
  ]
}

🐳 Running the Project with Docker Compose
1️⃣ Build & Start Containers
docker compose up --build

2. Run in Background
docker compose up -d

3. Stop Containers
docker compose down


Containers included:

mongo-db→ MongoDB database

node-api→ Node.js backend

📦 Dockerfile Summary

This Dockerfile:

Sets up Node environment

Installs dependencies

Copies source code

Exposes port3000

Starts the app withnpm start

⚙️ Environment Configuration

In index.js, MongoDB connection is dynamic:

const MONGO_URI = process.env.MONGO_URL || "mongodb://localhost:27017/userdb";


Inside Docker Compose, the MongoDB URL becomes:

mongodb://mongo:27017/userdb

📸 Screenshots (Recommended)

Add screenshots for better visibility:

✔ Thunder Client / Postman Response

POST/users

GET/users

✔ Docker Compose Running

Both containers UP

Connection logs

🎓 What I Learned

How to containerize Node.js apps

Running MongoDB inside Docker

Docker networking & port mappings

Docker Compose for service orchestration

Debugging container logs & service failures

Building backend APIs with a real database

👤 Author

Mohammad Khurram
Cloud & DevOps Enthusiast

GitHub: @mdkhurram0207

LinkedIn: https://linkedin.com/in/mohammad-khurram-721734227

🚀 Want to contribute?

Pull requests are welcome. Feel free to fork this project and build on it!
