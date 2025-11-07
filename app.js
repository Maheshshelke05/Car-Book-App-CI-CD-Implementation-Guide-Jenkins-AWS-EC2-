const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve CSS file
app.get('/app.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.send(`
        /* App.css - AutoVision 3D Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #ff6b35;
            --secondary: #1a1a1a;
            --accent: #00d4ff;
            --light: #ffffff;
            --dark: #000000;
            --gray: #2d2d2d;
            --light-gray: #e0e0e0;
            --carbon: #333333;
            --metal: #b8b8b8;
        }

        body {
            background: linear-gradient(135deg, var(--secondary) 0%, #0a0a0a 100%);
            color: var(--light);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .app {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Navigation */
        .navbar {
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 107, 53, 0.3);
        }

        .nav-brand {
            display: flex;
            flex-direction: column;
            cursor: pointer;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            font-size: 0.8rem;
            color: var(--light-gray);
            margin-top: 0.2rem;
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .nav-link {
            color: var(--light-gray);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* Main Content */
        .main-content {
            flex: 1;
            padding-top: 80px;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding: 0 2rem;
        }

        .hero-content {
            flex: 1;
            padding: 2rem;
            z-index: 2;
            max-width: 600px;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            color: var(--light-gray);
            line-height: 1.6;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .primary-btn, .secondary-btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem;
        }

        .primary-btn {
            background: linear-gradient(135deg, var(--primary), #ff8c42);
            color: white;
        }

        .primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }

        .secondary-btn {
            background: transparent;
            color: var(--light);
            border: 2px solid var(--primary);
        }

        .secondary-btn:hover {
            background: var(--primary);
            transform: translateY(-2px);
        }

        .stats {
            display: flex;
            gap: 3rem;
        }

        .stat {
            text-align: center;
        }

        .stat h3 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        .stat p {
            color: var(--light-gray);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* 3D Car Container */
        .car-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            min-height: 600px;
        }

        .car-model {
            width: 100%;
            max-width: 800px;
            height: 400px;
            background: linear-gradient(135deg, var(--carbon), #444444);
            border-radius: 20px;
            position: relative;
            transform-style: preserve-3d;
            transform: perspective(1000px) rotateY(15deg);
            box-shadow: 
                0 20px 40px rgba(0,0,0,0.5),
                inset 0 0 100px rgba(255, 107, 53, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .car-body {
            width: 80%;
            height: 200px;
            background: linear-gradient(135deg, #ff6b35, #ff8c42);
            border-radius: 10px 10px 5px 5px;
            position: relative;
            transform-style: preserve-3d;
            animation: carFloat 6s ease-in-out infinite;
        }

        @keyframes carFloat {
            0%, 100% { transform: translateY(0px) rotateX(5deg); }
            50% { transform: translateY(-10px) rotateX(5deg); }
        }

        .car-roof {
            width: 50%;
            height: 100px;
            background: linear-gradient(135deg, #ff8c42, #ff6b35);
            border-radius: 5px 5px 0 0;
            position: absolute;
            top: -80px;
            left: 25%;
        }

        .car-window {
            width: 90%;
            height: 60px;
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 212, 255, 0.1));
            border-radius: 3px;
            position: absolute;
            top: 20px;
            left: 5%;
        }

        .wheel {
            width: 80px;
            height: 80px;
            background: var(--dark);
            border-radius: 50%;
            position: absolute;
            bottom: -40px;
            border: 8px solid var(--metal);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .wheel::before {
            content: '';
            width: 40px;
            height: 40px;
            background: var(--gray);
            border-radius: 50%;
        }

        .wheel-front-left { left: 15%; }
        .wheel-front-right { right: 15%; }
        .wheel-rear-left { left: 65%; }
        .wheel-rear-right { right: 65%; }

        .headlight {
            width: 20px;
            height: 10px;
            background: var(--accent);
            border-radius: 5px;
            position: absolute;
            bottom: 20px;
            box-shadow: 0 0 20px var(--accent);
        }

        .headlight-left { left: 5%; }
        .headlight-right { right: 5%; }

        /* Features Section */
        .features-section {
            padding: 6rem 2rem;
            background: rgba(0, 0, 0, 0.5);
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--light);
            font-weight: bold;
        }

        .section-header p {
            color: var(--light-gray);
            font-size: 1.1rem;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background: rgba(45, 45, 45, 0.8);
            padding: 3rem 2rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--light);
            font-size: 1.5rem;
            font-weight: 600;
        }

        .feature-card p {
            color: var(--light-gray);
            line-height: 1.6;
            font-size: 1rem;
        }

        /* Car Models Section */
        .car-models-section {
            padding: 6rem 2rem;
        }

        .car-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .car-card {
            background: var(--gray);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .car-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
        }

        .car-image {
            height: 200px;
            background: linear-gradient(135deg, var(--carbon), #444444);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .mini-car {
            width: 120px;
            height: 60px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mini-body {
            width: 100px;
            height: 40px;
            border-radius: 8px 8px 4px 4px;
            position: relative;
            background: linear-gradient(135deg, #ff6b35, #ff8c42);
        }

        .mini-wheels {
            position: absolute;
            bottom: -8px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
        }

        .mini-wheel {
            width: 15px;
            height: 15px;
            background: #333;
            border-radius: 50%;
            border: 2px solid #b8b8b8;
        }

        .car-specs {
            padding: 1.5rem;
        }

        .car-specs h3 {
            margin-bottom: 0.5rem;
            color: var(--light);
            font-size: 1.5rem;
            font-weight: 600;
        }

        .car-specs > p {
            color: var(--primary);
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .specs-list {
            list-style: none;
            margin-bottom: 1.5rem;
        }

        .specs-list li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            color: var(--light-gray);
            padding: 0.3rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .price {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary);
            text-align: center;
            margin-bottom: 1rem;
        }

        .view-details-btn {
            width: 100%;
            background: linear-gradient(135deg, var(--primary), #ff8c42);
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1rem;
        }

        .view-details-btn:hover {
            background: linear-gradient(135deg, #ff8c42, var(--primary));
            transform: translateY(-2px);
        }

        /* Customization Section */
        .customization-section {
            padding: 6rem 2rem;
            background: rgba(0, 0, 0, 0.5);
        }

        .color-options {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
        }

        .color-option {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid transparent;
            transition: transform 0.3s, border-color 0.3s;
        }

        .color-option:hover {
            transform: scale(1.1);
        }

        .color-option.active {
            border-color: var(--light);
            transform: scale(1.1);
        }

        /* Footer */
        .footer {
            background: var(--dark);
            padding: 4rem 2rem 1rem;
            margin-top: auto;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .footer-section h3 {
            margin-bottom: 1.5rem;
            color: var(--primary);
            font-size: 1.5rem;
            font-weight: 600;
        }

        .footer-section p, .footer-section a {
            color: var(--light-gray);
            margin-bottom: 0.8rem;
            display: block;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: var(--primary);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .social-links a {
            font-size: 1.3rem;
            color: var(--light-gray);
            transition: all 0.3s;
        }

        .social-links a:hover {
            color: var(--primary);
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #444;
            color: var(--light-gray);
            font-size: 0.9rem;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .navbar {
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            }
            
            .hero {
                flex-direction: column;
                text-align: center;
                padding: 1rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .cta-buttons {
                justify-content: center;
                flex-direction: column;
            }
            
            .stats {
                justify-content: center;
            }
            
            .car-model {
                transform: perspective(800px) rotateY(10deg);
                height: 300px;
                margin-top: 2rem;
            }
            
            .features-grid,
            .car-grid {
                grid-template-columns: 1fr;
            }
            
            .feature-card {
                padding: 2rem 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .car-model {
                height: 250px;
            }
            
            .section-header h2 {
                font-size: 2rem;
            }
            
            .stats {
                gap: 1.5rem;
            }
            
            .stat h3 {
                font-size: 2rem;
            }
        }
    `);
});

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
        <link rel="stylesheet" href="/app.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
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