// Configuration
const API_BASE_URL = 'http://localhost:3000/api';

// DOM Elements
const dataContainer = document.getElementById('data-container');

// Utility functions
function showLoading() {
    dataContainer.innerHTML = '<div class="loading"></div><p>Loading data...</p>';
}

function showError(message) {
    dataContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

function showSuccess(message) {
    dataContainer.innerHTML = `<p style="color: green;">${message}</p>`;
}

// API Functions
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

async function postData(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Post error:', error);
        throw error;
    }
}

// Main functions
async function loadData() {
    showLoading();
    
    try {
        // Try to fetch data from backend
        const data = await fetchData('/data');
        displayData(data);
    } catch (error) {
        // If backend is not available, show sample data
        console.warn('Backend not available, showing sample data');
        showSampleData();
    }
}

function displayData(data) {
    if (!data || data.length === 0) {
        dataContainer.innerHTML = '<p>No data available.</p>';
        return;
    }
    
    let html = '<div class="data-grid">';
    data.forEach((item, index) => {
        html += `
            <div class="data-item">
                <h4>Item ${index + 1}</h4>
                <p>${item.name || item.title || 'Data Item'}</p>
                <small>${item.description || item.value || 'Sample data'}</small>
            </div>
        `;
    });
    html += '</div>';
    
    dataContainer.innerHTML = html;
}

function showSampleData() {
    const sampleData = [
        { name: 'Sample Data 1', description: 'This is sample data from the frontend' },
        { name: 'Sample Data 2', description: 'Backend connection will be available soon' },
        { name: 'Sample Data 3', description: 'Start your backend server to see live data' }
    ];
    
    displayData(sampleData);
    
    // Add a note about backend
    const note = document.createElement('div');
    note.style.marginTop = '1rem';
    note.style.padding = '1rem';
    note.style.background = '#fff3cd';
    note.style.border = '1px solid #ffeaa7';
    note.style.borderRadius = '5px';
    note.innerHTML = `
        <strong>Note:</strong> This is sample data. Start your backend server to see live data.
        <br><small>Run: <code>cd backend && node server.js</code></small>
    `;
    dataContainer.appendChild(note);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Hackathon Project Frontend Loaded!');
    console.log('Ready to connect to backend API at:', API_BASE_URL);
});

// Test function for development
function testAPI() {
    console.log('Testing API connection...');
    loadData();
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadData,
        fetchData,
        postData,
        testAPI
    };
}