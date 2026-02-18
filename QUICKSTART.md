# 🚀 Quick Start Guide

## ⚡ Super Fast Setup (5 minutes)

### Step 1: Clone or Download

```bash
# If you cloned from GitHub
cd barrio-alimentos-inventory

# Or extract the downloaded ZIP file
```

### Step 2: Install Backend

```bash
cd backend
npm install
cp .env.example .env
```

### Step 3: Install Frontend

```bash
cd ../frontend
npm install
```

### Step 4: Start MongoDB

Make sure MongoDB is running:

```bash
# Windows
Get-Service MongoDB

# If not running
Start-Service MongoDB
```

### Step 5: Run the App

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### Step 6: Open Browser

Go to: http://localhost:5173

## ✅ You Should See

- ☕ Barrio Alimentos header
- Statistics dashboard
- "+ Add Material" button
- Beautiful coffee-themed interface

## 🎯 First Steps

1. Click "+ Add Material"
2. Fill in the form:
   - Name: Coffee Beans
   - Quantity: 50
   - Unit: kg
   - Category: Coffee Making
   - Price: 500
3. Click "Add Material"
4. Watch it appear in the table!

## 🐛 Troubleshooting

**Backend won't start:**
- Check if MongoDB is running
- Check .env file exists in backend/

**Frontend shows blank:**
- Make sure backend is running first
- Check browser console (F12) for errors

**Port errors:**
- Make sure ports 5000 and 5173 are free
- Close any apps using those ports

## 💡 Pro Tips

- Keep both terminals open while using the app
- Press Ctrl+C to stop servers
- Run `npm run dev` to restart

---

**Having issues?** Check the main README.md or create an issue on GitHub!
