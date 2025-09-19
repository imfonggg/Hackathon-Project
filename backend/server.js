const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data (replace with database later)
let sampleData = [
    { id: 1, name: 'Hackathon Item 1', description: 'First amazing feature', value: 100 },
    { id: 2, name: 'Hackathon Item 2', description: 'Second innovative solution', value: 250 },
    { id: 3, name: 'Hackathon Item 3', description: 'Third game-changing idea', value: 175 },
    { id: 4, name: 'Hackathon Item 4', description: 'Fourth breakthrough concept', value: 300 }
];

// Routes

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'Hackathon Project API is running!', 
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

// Get all data
app.get('/api/data', (req, res) => {
    try {
        res.json(sampleData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Get specific item by ID
app.get('/api/data/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const item = sampleData.find(item => item.id === id);
        
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch item' });
    }
});

// Create new item
app.post('/api/data', (req, res) => {
    try {
        const { name, description, value } = req.body;
        
        if (!name || !description) {
            return res.status(400).json({ error: 'Name and description are required' });
        }
        
        const newItem = {
            id: sampleData.length + 1,
            name,
            description,
            value: value || 0
        };
        
        sampleData.push(newItem);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create item' });
    }
});

// Update item
app.put('/api/data/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const itemIndex = sampleData.findIndex(item => item.id === id);
        
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        const { name, description, value } = req.body;
        sampleData[itemIndex] = {
            ...sampleData[itemIndex],
            name: name || sampleData[itemIndex].name,
            description: description || sampleData[itemIndex].description,
            value: value !== undefined ? value : sampleData[itemIndex].value
        };
        
        res.json(sampleData[itemIndex]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update item' });
    }
});

// Delete item
app.delete('/api/data/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const itemIndex = sampleData.findIndex(item => item.id === id);
        
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        const deletedItem = sampleData.splice(itemIndex, 1)[0];
        res.json({ message: 'Item deleted successfully', deletedItem });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
});

// Search endpoint
app.get('/api/search', (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query) {
            return res.json(sampleData);
        }
        
        const results = sampleData.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Search failed' });
    }
});

// Statistics endpoint
app.get('/api/stats', (req, res) => {
    try {
        const stats = {
            totalItems: sampleData.length,
            totalValue: sampleData.reduce((sum, item) => sum + item.value, 0),
            averageValue: sampleData.length > 0 ? 
                sampleData.reduce((sum, item) => sum + item.value, 0) / sampleData.length : 0,
            timestamp: new Date().toISOString()
        };
        
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get statistics' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Hackathon Project API running on http://localhost:${PORT}`);
    console.log(`📊 Available endpoints:`);
    console.log(`   GET  /                  - Health check`);
    console.log(`   GET  /api/data          - Get all data`);
    console.log(`   GET  /api/data/:id      - Get item by ID`);
    console.log(`   POST /api/data          - Create new item`);
    console.log(`   PUT  /api/data/:id      - Update item`);
    console.log(`   DELETE /api/data/:id    - Delete item`);
    console.log(`   GET  /api/search?query  - Search items`);
    console.log(`   GET  /api/stats         - Get statistics`);
});

module.exports = app;