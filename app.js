const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Car data matching your design
const cars = [
    {
        id: 1,
        name: "Ferrari SF90 Stradale",
        type: "Sports Car",
        price: "$625,000",
        specs: {
            engine: "4.0L V8 Hybrid",
            horsepower: "986 HP",
            acceleration: "0-60: 2.5s",
            topspeed: "211 mph"
        },
        description: "The ultimate hybrid supercar combining stunning performance with cutting-edge technology.",
        color: "#ff2800"
    },
    {
        id: 2,
        name: "Lamborghini Aventador",
        type: "Super Car",
        price: "$517,000",
        specs: {
            engine: "6.5L V12",
            horsepower: "770 HP",
            acceleration: "0-60: 2.9s",
            topspeed: "217 mph"
        },
        description: "A masterpiece of Italian engineering with breathtaking design and performance.",
        color: "#ffd700"
    },
    {
        id: 3,
        name: "Porsche 911 Turbo S",
        type: "Sports Car",
        price: "$216,000",
        specs: {
            engine: "3.8L Flat-6 Twin-Turbo",
            horsepower: "640 HP",
            acceleration: "0-60: 2.6s",
            topspeed: "205 mph"
        },
        description: "The perfect blend of daily usability and track-ready performance.",
        color: "#2d2d2d"
    },
    {
        id: 4,
        name: "McLaren 720S",
        type: "Super Car",
        price: "$299,000",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            horsepower: "710 HP",
            acceleration: "0-60: 2.8s",
            topspeed: "212 mph"
        },
        description: "Revolutionary design meets extraordinary performance in this British masterpiece.",
        color: "#ff6b35"
    }
];

// Main Route
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AutoVision 3D - Experience Cars in 360°</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            ${getCSS()}
        </style>
    </head>
    <body>
        <div class="app">
            <nav class="navbar">
                <div class="nav-brand" onclick="scrollToTop()">
                    <span class="logo">AutoVision 3D</span>
                    <span class="tagline">Experience Cars in 360°</span>
                </div>
                <div class="nav-links">
                    <a href="#home" class="nav-link">Home</a>
                    <a href="#models" class="nav-link">Models</a>
                    <a href="#features" class="nav-link">Features</a>
                    <a href="#customize" class="nav-link">Customize</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
            </nav>

            <main class="main-content">
                <!-- Hero Section -->
                <section class="hero" id="home">
                    <div class="hero-content">
                        <h1>Experience Cars in Stunning 3D</h1>
                        <p>Explore the world's most exotic and luxury cars with our immersive 360° viewing experience. Every detail, every angle, brought to life.</p>
                        <div class="cta-buttons">
                            <button class="primary-btn" onclick="exploreModels()">
                                <i class="fas fa-play"></i> Explore Models
                            </button>
                            <button class="secondary-btn" onclick="startCustomization()">
                                <i class="fas fa-palette"></i> Customize
                            </button>
                        </div>
                        <div class="stats">
                            <div class="stat">
                                <h3>50+</h3>
                                <p>Car Models</p>
                            </div>
                            <div class="stat">
                                <h3>360°</h3>
                                <p>View Experience</p>
                            </div>
                            <div class="stat">
                                <h3>4K</h3>
                                <p>Quality</p>
                            </div>
                        </div>
                    </div>
                    <div class="car-container">
                        <div class="car-model" id="mainCarModel">
                            <div class="car-body">
                                <div class="car-roof"></div>
                                <div class="car-window"></div>
                                <div class="wheel wheel-front-left"></div>
                                <div class="wheel wheel-front-right"></div>
                                <div class="wheel wheel-rear-left"></div>
                                <div class="wheel wheel-rear-right"></div>
                                <div class="headlight headlight-left"></div>
                                <div class="headlight headlight-right"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features Section -->
                <section class="features-section" id="features">
                    <div class="section-header">
                        <h2>Why Choose AutoVision 3D?</h2>
                        <p>Experience the future of car visualization</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-vr-cardboard"></i>
                            </div>
                            <h3>Immersive 360° View</h3>
                            <p>Explore every angle of your dream car with our photorealistic 360° visualization technology.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-palette"></i>
                            </div>
                            <h3>Real-time Customization</h3>
                            <p>Change colors, wheels, and accessories in real-time and see instant visual updates.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-expand"></i>
                            </div>
                            <h3>4K Ultra HD</h3>
                            <p>Experience stunning visual quality with 4K resolution and realistic lighting effects.</p>
                        </div>
                    </div>
                </section>

                <!-- Car Models Section -->
                <section class="car-models-section" id="models">
                    <div class="section-header">
                        <h2>Featured Car Models</h2>
                        <p>Discover our exclusive collection of premium vehicles</p>
                    </div>
                    <div class="car-grid">
                        ${cars.map(car => `
                            <div class="car-card" onclick="viewCarDetails(${car.id})">
                                <div class="car-image">
                                    <div class="mini-car">
                                        <div class="mini-body" style="background: ${car.color}"></div>
                                        <div class="mini-wheels">
                                            <div class="mini-wheel"></div>
                                            <div class="mini-wheel"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="car-specs">
                                    <h3>${car.name}</h3>
                                    <p>${car.type}</p>
                                    <ul class="specs-list">
                                        <li><span>Engine:</span> <span>${car.specs.engine}</span></li>
                                        <li><span>Power:</span> <span>${car.specs.horsepower}</span></li>
                                        <li><span>Acceleration:</span> <span>${car.specs.acceleration}</span></li>
                                        <li><span>Top Speed:</span> <span>${car.specs.topspeed}</span></li>
                                    </ul>
                                    <div class="price">${car.price}</div>
                                    <button class="view-details-btn">View in 3D</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Customization Section -->
                <section class="customization-section" id="customize">
                    <div class="section-header">
                        <h2>Customize Your Dream Car</h2>
                        <p>Choose from millions of possible configurations</p>
                    </div>
                    <div class="color-options">
                        <div class="color-option active" style="background: #ff2800;" onclick="changeCarColor('#ff2800')"></div>
                        <div class="color-option" style="background: #2d2d2d;" onclick="changeCarColor('#2d2d2d')"></div>
                        <div class="color-option" style="background: #00d4ff;" onclick="changeCarColor('#00d4ff')"></div>
                        <div class="color-option" style="background: #ffd700;" onclick="changeCarColor('#ffd700')"></div>
                        <div class="color-option" style="background: #ff6b35;" onclick="changeCarColor('#ff6b35')"></div>
                        <div class="color-option" style="background: #ffffff;" onclick="changeCarColor('#ffffff')"></div>
                    </div>
                    <div class="car-container">
                        <div class="car-model">
                            <div class="car-body" id="customizableCar">
                                <div class="car-roof"></div>
                                <div class="car-window"></div>
                                <div class="wheel wheel-front-left"></div>
                                <div class="wheel wheel-front-right"></div>
                                <div class="wheel wheel-rear-left"></div>
                                <div class="wheel wheel-rear-right"></div>
                                <div class="headlight headlight-left"></div>
                                <div class="headlight headlight-right"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <!-- Footer -->
            <footer class="footer" id="contact">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>AutoVision 3D</h3>
                        <p>Experience Cars in 360°</p>
                        <p>The ultimate platform for car enthusiasts to explore and customize their dream vehicles in stunning 3D detail.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <a href="#home">Home</a>
                        <a href="#models">Car Models</a>
                        <a href="#features">Features</a>
                        <a href="#customize">Customization</a>
                    </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <p><i class="fas fa-envelope"></i> contact@autovision3d.com</p>
                        <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                        <p><i class="fas fa-map-marker-alt"></i> New York, NY 10001</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 AutoVision 3D. All rights reserved. | Made with <i class="fas fa-heart" style="color: #ff6b35;"></i> for car enthusiasts</p>
                </div>
            </footer>
        </div>

        <script>
            // Navigation scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(26, 26, 26, 0.98)';
                } else {
                    navbar.style.background = 'rgba(26, 26, 26, 0.95)';
                }
            });

            // Smooth scrolling
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Car color customization
            function changeCarColor(color) {
                const carBody = document.getElementById('customizableCar');
                const mainCar = document.querySelector('#mainCarModel .car-body');
                
                carBody.style.background = \`linear-gradient(135deg, \${color}, \${color}dd)\`;
                mainCar.style.background = \`linear-gradient(135deg, \${color}, \${color}dd)\`;
                
                // Update active color option
                document.querySelectorAll('.color-option').forEach(option => {
                    option.classList.remove('active');
                });
                event.target.classList.add('active');
            }

            // View car details
            function viewCarDetails(carId) {
                alert(\`Loading 3D view for car ID: \${carId}\\nThis would open an immersive 3D viewer in a full implementation.\`);
            }

            function exploreModels() {
                document.getElementById('models').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }

            function startCustomization() {
                document.getElementById('customize').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Auto-rotate main car model
            let rotation = 15;
            setInterval(() => {
                rotation += 0.2;
                document.getElementById('mainCarModel').style.transform = \`perspective(1000px) rotateY(\${rotation}deg)\`;
            }, 50);

            console.log('🚗 AutoVision 3D - Immersive car experience loaded!');
        </script>
    </body>
    </html>
    `);
});

// API Routes
app.get('/api/cars', (req, res) => {
    res.json({
        success: true,
        data: cars,
        message: 'Cars fetched successfully',
        timestamp: new Date().toISOString(),
        count: cars.length
    });
});

app.get('/api/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = cars.find(c => c.id === carId);
    
    if (!car) {
        return res.status(404).json({
            success: false,
            message: 'Car not found'
        });
    }
    
    res.json({
        success: true,
        data: car,
        message: 'Car details fetched successfully'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        service: 'AutoVision 3D API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Helper function to get CSS
function getCSS() {
    // CSS content is already included in the app.css file
    return '';
}

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    🚗  AutoVision 3D Server Started Successfully!
    🚀  Version: 1.0.0
    📍  Server: http://localhost:${PORT}
    🩺  Health: http://localhost:${PORT}/api/health
    🎮  Cars API: http://localhost:${PORT}/api/cars
    ⚡  Environment: ${process.env.NODE_ENV || 'development'}
    🕒  Started at: ${new Date().toISOString()}
    `);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down gracefully...');
    server.close(() => {
        console.log('✅ HTTP server closed.');
        process.exit(0);
    });
});