const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
// PART 2: Guided Build — Your First Endpoint
// ==========================================
app.get('/', (req, res) => {
  res.send('Hello API! Your server is running.');
});

// ==========================================
// PART 3: Hands-On Practice 1 — Digital Profile API
// ==========================================
app.get('/profile', (req, res) => {
  res.json({
    name: "Mark Aaron M. Mara", 
    course: "BS Computer Science",
    year: "3rd Year",
    school: "Sacred Heart College"
  });
});

app.get('/skills', (req, res) => {
  res.json({
    skills: ["HTML", "CSS", "JavaScript", "Flutter"]
  });
});

// ==========================================
// PART 4: Hands-On Practice 2 — Sari-Sari Store API
// ==========================================
app.get('/store-info', (req, res) => {
  res.json({
    store: "Aling Bella's Sari-Sari Store",
    isOpen: true,
    hours: {
      open: "6:00 AM",
      close: "9:00 PM"
    },
    popularItems: ["Puff", "Marshmallows", "Proyo","Coke"],
    contactNumber: "0917-123-4567"
  });
});

// ==========================================
// CHALLENGE: Launch Your Own Mini Business API
// Sample Business: QuickClean Printing & Laundry
// ==========================================

// Endpoint 1: Basic Business Info (Flat Object)
app.get('/api/business-info', (req, res) => {
  res.json({
    businessName: "Yun Oh Laundry Shop & Printing Services",
    owner: "Mark Aaron",
    contactNumber: "0918-987-6543",
    email: "@yun.oh.laundry.shop",
    isOperational: true
  });
});

// Endpoint 2: List of Services (Array)
app.get('/api/services', (req, res) => {
  res.json({
    availableServices: [
      "Document Printing (B&W / Color)",
      "Lamination & Binding",
      "Wash, Dry, & Fold Laundry",
      "Dry Cleaning",
      "ID Picture Printing"
    ]
  });
});

// Endpoint 3: Service Rates (Nested Object)
app.get('/api/pricing', (req, res) => {
  res.json({
    printingRates: {
      blackAndWhite: "₱2 per page",
      fullColor: "₱5 per page",
      photoPaper: "₱15 per page"
    },
    laundryRates: {
      regularWash: "₱150 per 7kg load",
      dryCleaning: "₱250 per piece",
      expressService: "₱250 per 7kg load"
    }
  });
});

// Endpoint 4: Active Promos (Array of Objects)
app.get('/api/promos', (req, res) => {
  res.json({
    activePromos: [
      {
        code: "STUDENT10",
        discount: "10% OFF on Printing",
        validUntil: "2026-12-31"
      },
      {
        code: "LAUNDRY20",
        discount: "₱20 OFF for loads over 10kg",
        validUntil: "2026-11-30"
      }
    ]
  });
});

// Endpoint 5: Operating Schedule (Nested Object)
app.get('/api/schedule', (req, res) => {
  res.json({
    weekdays: {
      open: "7:00 AM",
      close: "8:00 PM"
    },
    weekends: {
      open: "8:00 AM",
      close: "5:00 PM"
    },
    holidays: "Closed"
  });
});

// ==========================================
// Start Server
// ==========================================
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});