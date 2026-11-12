
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// MENU DATA
const menuItems = [
    { id: 1, name: "Chicken Adobo Rice Meal", category: "Rice Meals", price: 65 },
    { id: 2, name: "Halo-Halo", category: "Desserts", price: 45 },
    { id: 3, name: "Iced Tea", category: "Drinks", price: 15 },
    { id: 4, name: "Pancit Canton", category: "Rice Meals", price: 55 },
    { id: 5, name: "Leche Flan", category: "Desserts", price: 30 }
];

// ROUTE 1: GET ALL MENU ITEMS OR FILTER BY CATEGORY
app.get('/menu', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filtered = menuItems.filter(
            m => m.category.toLowerCase() === category.toLowerCase()
        );

        return res.json(filtered);
    }

    res.json(menuItems);
});

// ROUTE 2: GET ONE MENU ITEM BY ID
app.get('/menu/:id', (req, res) => {
    const item = menuItems.find(
        m => m.id === parseInt(req.params.id)
    );

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
