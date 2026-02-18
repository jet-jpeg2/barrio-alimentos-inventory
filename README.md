# ☕ Barrio Alimentos - Inventory Management System

A complete full-stack inventory management system for coffee businesses, built with React, Node.js, Express, and MongoDB.

## 🎯 Features

- ✅ Add, view, and delete inventory materials
- ✅ Track quantities, prices, and expiry dates
- ✅ Category management (coffee-making, packaging, costs)
- ✅ Real-time statistics dashboard
- ✅ Automatic value calculations
- ✅ Beautiful, responsive UI with coffee theme

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- MongoDB installed and running locally
- npm or yarn

### Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start server
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

```bash
# Navigate to frontend folder  
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on http://localhost:5173

## 🚀 Usage

1. Make sure MongoDB is running locally
2. Start the backend server (Terminal 1)
3. Start the frontend development server (Terminal 2)
4. Open http://localhost:5173 in your browser
5. Click "+ Add Material" to add your first inventory item

## 📁 Project Structure

```
barrio-alimentos-inventory/
├── backend/
│   ├── models/
│   │   └── Material.js          # Material schema
│   ├── routes/
│   │   └── materials.js         # Material API routes
│   ├── server.js                # Express server
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── services/
    │   │   └── api.js           # API calls
    │   ├── App.jsx              # Main component
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── index.html
```

## 🔧 Environment Variables

Create a `.env` file in the backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/barrio-alimentos-inventory
PORT=5000
NODE_ENV=development
```

## 📝 API Endpoints

### Materials

- `GET /api/materials` - Get all materials
- `GET /api/materials/:id` - Get single material
- `POST /api/materials` - Create new material
- `PUT /api/materials/:id` - Update material
- `DELETE /api/materials/:id` - Delete material

## 🎨 Features in Development

- [ ] Edit material functionality
- [ ] Transaction tracking (stock in/out)
- [ ] Search and filters
- [ ] Reports and analytics
- [ ] User authentication
- [ ] Email notifications
- [ ] Cloud deployment

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📄 License

MIT

## 👤 Author

Built for Barrio Alimentos - A Filipino-owned coffee business

---

**Need help?** Check the issues section or create a new issue!
