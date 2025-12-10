#!/bin/bash

echo "
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║           🎊 ShaadiBazaar Full Stack Quick Start 🎊           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
"

echo "📋 Checking Node.js installation..."
if command -v node &> /dev/null; then
    echo "✅ Node.js: $(node --version)"
    echo "✅ npm: $(npm --version)"
else
    echo "❌ Node.js not found. Please install from https://nodejs.org/"
    exit 1
fi

echo ""
echo "📦 Installing Frontend Dependencies..."
cd /Users/bhavyagedar/mansi/frontend
npm install --legacy-peer-deps 2>/dev/null || npm install

echo ""
echo "📦 Installing Backend Dependencies..."
cd /Users/bhavyagedar/mansi/backend
npm install

echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "✅ Installation Complete!"
echo ""
echo "🚀 To start the application:"
echo ""
echo "   Terminal 1 (Frontend):"
echo "   $ cd /Users/bhavyagedar/mansi/frontend"
echo "   $ npm run dev"
echo ""
echo "   Terminal 2 (Backend):"
echo "   $ cd /Users/bhavyagedar/mansi/backend"
echo "   $ npm run dev"
echo ""
echo "📱 Frontend: http://localhost:3000"
echo "⚙️  Backend: http://localhost:5000"
echo ""
echo "════════════════════════════════════════════════════════════════"
