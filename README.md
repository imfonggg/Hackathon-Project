# Hackathon Project

A full-stack web application built for hackathon competitions, featuring a modern frontend and robust backend API.

## 🚀 Project Structure

```
Hackathon-Project/
├── frontend/           # Frontend application
│   ├── index.html     # Main HTML file
│   ├── styles.css     # CSS styles
│   └── script.js      # JavaScript functionality
├── backend/           # Backend API
│   ├── server.js      # Express server
│   ├── package.json   # Node.js dependencies
│   └── .env.example   # Environment variables template
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Modern semantic markup
- **CSS3** - Responsive design with Grid and Flexbox
- **Vanilla JavaScript** - Modern ES6+ features
- **Fetch API** - For backend communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/imfonggg/Hackathon-Project.git
cd Hackathon-Project
```

### 2. Set Up Backend
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env

# Start the backend server
npm start
```

The backend will be running at `http://localhost:3000`

### 3. Set Up Frontend
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Open with a local server (choose one):

# Option 1: Using Python (if installed)
python -m http.server 8080

# Option 2: Using Node.js http-server (install first: npm install -g http-server)
http-server -p 8080

# Option 3: Simply open index.html in your browser
```

The frontend will be available at `http://localhost:8080`

## 📡 API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/data` | Get all data items |
| GET | `/api/data/:id` | Get specific item by ID |
| POST | `/api/data` | Create new item |
| PUT | `/api/data/:id` | Update existing item |
| DELETE | `/api/data/:id` | Delete item |
| GET | `/api/search?query=term` | Search items |
| GET | `/api/stats` | Get statistics |

### Example API Usage

#### Get All Data
```bash
curl http://localhost:3000/api/data
```

#### Create New Item
```bash
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item", "description": "Item description", "value": 123}'
```

#### Search Items
```bash
curl "http://localhost:3000/api/search?query=hackathon"
```

## 🎨 Features

### Frontend Features
- **Responsive Design** - Works on desktop and mobile
- **Modern UI/UX** - Clean, professional interface
- **Real-time Data** - Dynamic content loading
- **Error Handling** - Graceful error messages
- **Smooth Navigation** - Smooth scrolling between sections

### Backend Features
- **RESTful API** - Standard HTTP methods
- **CORS Enabled** - Cross-origin requests supported
- **Error Handling** - Comprehensive error responses
- **Search Functionality** - Text-based search
- **Statistics** - Data analytics endpoints
- **Environment Configuration** - Flexible deployment options

## 🔧 Development

### Backend Development
```bash
cd backend

# Install nodemon for auto-restart during development
npm install -g nodemon

# Start in development mode
npm run dev
```

### Frontend Development
- Edit files in the `frontend/` directory
- Refresh browser to see changes
- Use browser developer tools for debugging

### Adding New Features

1. **Frontend**: Modify `script.js` for new functionality, `styles.css` for styling
2. **Backend**: Add new routes in `server.js`, update API documentation

## 🧪 Testing

### Test Backend API
```bash
# Test health check
curl http://localhost:3000

# Test data endpoint
curl http://localhost:3000/api/data

# Test with browser
# Open http://localhost:3000 in your browser
```

### Test Frontend
1. Open `http://localhost:8080` in your browser
2. Click "Get Started" button to test API integration
3. Check browser console for any errors

## 📦 Deployment

### Backend Deployment (Heroku example)
```bash
# Install Heroku CLI and login
heroku login

# Create new app
heroku create your-app-name

# Deploy
git push heroku main

# Set environment variables
heroku config:set NODE_ENV=production
```

### Frontend Deployment (Netlify/Vercel)
1. Upload `frontend/` folder to your hosting service
2. Update API base URL in `script.js` to your backend URL
3. Deploy

## 🛡️ Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Hackathon Tips

- **Start Simple**: Get basic functionality working first
- **Document Everything**: Keep README updated
- **Test Often**: Test API and frontend integration frequently
- **Version Control**: Commit changes regularly
- **Deploy Early**: Set up deployment pipeline early
- **Demo Ready**: Prepare a smooth demo presentation

## 🆘 Troubleshooting

### Common Issues

1. **Backend won't start**
   - Check if Node.js is installed: `node --version`
   - Install dependencies: `npm install`
   - Check if port 3000 is available

2. **Frontend can't connect to backend**
   - Ensure backend is running on port 3000
   - Check CORS settings in `server.js`
   - Verify API_BASE_URL in `script.js`

3. **CORS errors**
   - Backend includes CORS middleware
   - Check if frontend URL is allowed

### Getting Help

- Check browser console for errors
- Check backend terminal for error logs
- Ensure all dependencies are installed
- Verify file paths and URLs

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

**Good luck with your hackathon! 🚀**