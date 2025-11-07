const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Enhanced movie data with more details
const movies = [
    {
        id: 1,
        title: "Kalki 2898 AD",
        genre: "Sci-Fi/Action",
        duration: "2h 48m",
        rating: 8.7,
        language: "Hindi",
        director: "Nag Ashwin",
        cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
        description: "A mythological sci-fi film set in a post-apocalyptic world.",
        releaseDate: "2024",
        posterColor: "#ff6b6b"
    },
    {
        id: 2,
        title: "Singham Again",
        genre: "Action/Drama",
        duration: "2h 35m",
        rating: 8.2,
        language: "Hindi",
        director: "Rohit Shetty",
        cast: ["Ajay Devgn", "Kareena Kapoor", "Ranveer Singh"],
        description: "The third installment in the Singham franchise.",
        releaseDate: "2024",
        posterColor: "#4ecdc4"
    },
    {
        id: 3,
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        duration: "2h 55m",
        rating: 8.9,
        language: "Hindi",
        director: "Sukumar",
        cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
        description: "The rise of Pushpa Raj as a red sandalwood smuggler.",
        releaseDate: "2024",
        posterColor: "#45b7d1"
    },
    {
        id: 4,
        title: "Stree 2",
        genre: "Horror/Comedy",
        duration: "2h 20m",
        rating: 8.4,
        language: "Hindi",
        director: "Amar Kaushik",
        cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi"],
        description: "Sequel to the horror-comedy about a ghost who abducts men.",
        releaseDate: "2024",
        posterColor: "#96ceb4"
    },
    {
        id: 5,
        title: "Devara: Part 1",
        genre: "Action/Drama",
        duration: "2h 45m",
        rating: 8.5,
        language: "Hindi",
        director: "Koratala Siva",
        cast: ["Jr NTR", "Janhvi Kapoor", "Saif Ali Khan"],
        description: "A story set in the coastal regions of India.",
        releaseDate: "2024",
        posterColor: "#feca57"
    },
    {
        id: 6,
        title: "Welcome To The Jungle",
        genre: "Comedy/Action",
        duration: "2h 30m",
        rating: 7.9,
        language: "Hindi",
        director: "Ahmed Khan",
        cast: ["Akshay Kumar", "Sanjay Dutt", "Suniel Shetty"],
        description: "Third installment of the Welcome comedy franchise.",
        releaseDate: "2024",
        posterColor: "#ff9ff3"
    }
];

// Enhanced Routes with beautiful UI
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ManoranjanPe - Har movie, ek click door</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            
            :root {
                --primary: #e50914;
                --primary-dark: #b2070f;
                --secondary: #0f0f0f;
                --accent: #f5c518;
                --accent-dark: #d4ac0d;
                --light: #ffffff;
                --dark: #000000;
                --gray: #1a1a1a;
                --gray-light: #2d2d2d;
                --text-light: #e0e0e0;
                --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --gradient-primary: linear-gradient(135deg, #e50914 0%, #ff4757 100%);
                --gradient-gold: linear-gradient(135deg, #f5c518 0%, #d4ac0d 100%);
            }
            
            body {
                background: var(--secondary);
                color: var(--light);
                line-height: 1.6;
                overflow-x: hidden;
            }
            
            /* Custom Scrollbar */
            ::-webkit-scrollbar {
                width: 8px;
            }
            
            ::-webkit-scrollbar-track {
                background: var(--gray);
            }
            
            ::-webkit-scrollbar-thumb {
                background: var(--primary);
                border-radius: 10px;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }
            
            /* Header Styles */
            header {
                background: rgba(15, 15, 15, 0.95);
                backdrop-filter: blur(10px);
                padding: 1rem 2rem;
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 1000;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
            }
            
            header.scrolled {
                background: rgba(0, 0, 0, 0.98);
                padding: 0.7rem 2rem;
            }
            
            .nav-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .nav-brand {
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }
            
            .logo {
                font-size: 2rem;
                font-weight: 700;
                background: var(--gradient-primary);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .tagline {
                font-size: 0.8rem;
                color: var(--accent);
                margin-top: 0.2rem;
                font-weight: 300;
            }
            
            .nav-links {
                display: flex;
                gap: 2rem;
                align-items: center;
            }
            
            .nav-link {
                color: var(--text-light);
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
                position: relative;
            }
            
            .nav-link:hover {
                color: var(--accent);
            }
            
            .nav-link::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--accent);
                transition: width 0.3s ease;
            }
            
            .nav-link:hover::after {
                width: 100%;
            }
            
            .login-btn {
                background: var(--gradient-primary);
                color: white;
                border: none;
                padding: 0.7rem 1.5rem;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
            }
            
            .login-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(229, 9, 20, 0.4);
            }
            
            /* Hero Section */
            .hero {
                background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), 
                            url('https://images.unsplash.com/photo-1489599809505-7c8e1c8bfc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                min-height: 100vh;
                display: flex;
                align-items: center;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .hero::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%);
            }
            
            .hero-content {
                position: relative;
                z-index: 2;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .hero h1 {
                font-size: 4rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                background: linear-gradient(135deg, var(--accent), #ff6b6b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes glow {
                from {
                    text-shadow: 0 0 20px rgba(245, 197, 24, 0.5);
                }
                to {
                    text-shadow: 0 0 30px rgba(245, 197, 24, 0.8), 0 0 40px rgba(245, 197, 24, 0.6);
                }
            }
            
            .hero p {
                font-size: 1.3rem;
                margin-bottom: 2.5rem;
                color: var(--text-light);
                font-weight: 300;
            }
            
            .search-bar {
                display: flex;
                max-width: 500px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50px;
                padding: 0.5rem;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .search-bar input {
                flex: 1;
                background: transparent;
                border: none;
                padding: 1rem 1.5rem;
                color: white;
                font-size: 1rem;
                outline: none;
            }
            
            .search-bar input::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
            
            .search-bar button {
                background: var(--gradient-primary);
                color: white;
                border: none;
                padding: 1rem 1.5rem;
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .search-bar button:hover {
                transform: scale(1.05);
            }
            
            /* Movies Section */
            .movies-section {
                padding: 5rem 0;
                background: var(--secondary);
            }
            
            .section-header {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            .section-header h2 {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
                background: var(--gradient-gold);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
                display: inline-block;
            }
            
            .section-header h2::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 4px;
                background: var(--gradient-gold);
                border-radius: 2px;
            }
            
            .section-header p {
                color: var(--text-light);
                font-size: 1.1rem;
            }
            
            .movies-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-bottom: 4rem;
            }
            
            .movie-card {
                background: var(--gray);
                border-radius: 15px;
                overflow: hidden;
                cursor: pointer;
                transition: all 0.4s ease;
                position: relative;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .movie-card:hover {
                transform: translateY(-15px) scale(1.02);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                border-color: var(--accent);
            }
            
            .movie-poster {
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 1.5rem;
                position: relative;
                overflow: hidden;
            }
            
            .movie-poster::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
            }
            
            .poster-text {
                position: relative;
                z-index: 2;
                text-align: center;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            }
            
            .rating {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.8);
                color: var(--accent);
                padding: 0.5rem 0.8rem;
                border-radius: 20px;
                font-weight: 600;
                font-size: 0.9rem;
                z-index: 3;
                border: 1px solid var(--accent);
            }
            
            .movie-info {
                padding: 1.5rem;
                position: relative;
            }
            
            .movie-info h3 {
                margin-bottom: 0.5rem;
                font-size: 1.3rem;
                font-weight: 600;
            }
            
            .movie-info .genre {
                color: var(--accent);
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
                font-weight: 500;
            }
            
            .movie-details {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;
                font-size: 0.9rem;
                color: var(--text-light);
            }
            
            .movie-description {
                color: var(--text-light);
                font-size: 0.9rem;
                margin-bottom: 1rem;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            
            .book-now-btn {
                width: 100%;
                background: var(--gradient-primary);
                color: white;
                border: none;
                padding: 0.8rem;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .book-now-btn:hover {
                background: var(--primary-dark);
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
            }
            
            /* Offers Section */
            .offers-section {
                padding: 5rem 0;
                background: linear-gradient(135deg, var(--gray) 0%, var(--secondary) 100%);
            }
            
            .offers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
            }
            
            .offer-card {
                background: linear-gradient(135deg, var(--gray-light), var(--gray));
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                color: white;
                transition: all 0.3s ease;
                border: 1px solid rgba(255, 255, 255, 0.1);
                position: relative;
                overflow: hidden;
            }
            
            .offer-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                transition: left 0.5s ease;
            }
            
            .offer-card:hover::before {
                left: 100%;
            }
            
            .offer-card:hover {
                transform: translateY(-10px);
                border-color: var(--accent);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            }
            
            .offer-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                background: var(--gradient-gold);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .offer-card h3 {
                margin-bottom: 1rem;
                font-size: 1.4rem;
                font-weight: 600;
            }
            
            .offer-card p {
                margin-bottom: 1.5rem;
                color: var(--text-light);
                line-height: 1.6;
            }
            
            .code {
                background: rgba(245, 197, 24, 0.1);
                color: var(--accent);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: 600;
                border: 1px solid var(--accent);
                display: inline-block;
            }
            
            /* Footer */
            footer {
                background: var(--dark);
                padding: 3rem 0 1rem;
                margin-top: 4rem;
            }
            
            .footer-content {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 3rem;
                margin-bottom: 2rem;
            }
            
            .footer-section h3 {
                color: var(--accent);
                margin-bottom: 1rem;
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            .footer-section p {
                color: var(--text-light);
                margin-bottom: 0.5rem;
            }
            
            .social-links {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .social-links a {
                color: var(--text-light);
                font-size: 1.3rem;
                transition: all 0.3s ease;
            }
            
            .social-links a:hover {
                color: var(--accent);
                transform: translateY(-3px);
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 2rem;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                color: var(--text-light);
                font-size: 0.9rem;
            }
            
            /* Animations */
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .fade-in-up {
                animation: fadeInUp 0.6s ease-out;
            }
            
            /* Responsive Design */
            @media (max-width: 768px) {
                .hero h1 {
                    font-size: 2.5rem;
                }
                
                .nav-links {
                    gap: 1rem;
                }
                
                .movies-grid {
                    grid-template-columns: 1fr;
                }
                
                .search-bar {
                    flex-direction: column;
                    border-radius: 15px;
                }
                
                .search-bar input {
                    border-radius: 15px 15px 0 0;
                }
                
                .search-bar button {
                    border-radius: 0 0 15px 15px;
                }
            }
            
            @media (max-width: 480px) {
                .hero h1 {
                    font-size: 2rem;
                }
                
                .section-header h2 {
                    font-size: 2rem;
                }
                
                .nav-container {
                    flex-direction: column;
                    gap: 1rem;
                }
            }
        </style>
    </head>
    <body>
        <header id="navbar">
            <div class="container">
                <div class="nav-container">
                    <div class="nav-brand" onclick="scrollToTop()">
                        <span class="logo">ManoranjanPe</span>
                        <span class="tagline">Har movie, ek click door</span>
                    </div>
                    
                    <div class="nav-links">
                        <a href="#movies" class="nav-link">Movies</a>
                        <a href="#offers" class="nav-link">Offers</a>
                        <a href="#theaters" class="nav-link">Theaters</a>
                        <button class="login-btn">
                            <i class="fas fa-user"></i> Login
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <section class="hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <h1>Experience Cinema Like Never Before</h1>
                    <p>Book tickets for the latest blockbusters with exclusive offers and seamless experience</p>
                    <div class="search-bar">
                        <input type="text" placeholder="Search for movies, actors, or genres...">
                        <button><i class="fas fa-search"></i> Search</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="movies-section" id="movies">
            <div class="container">
                <div class="section-header fade-in-up">
                    <h2>Now Showing</h2>
                    <p>Discover the latest blockbusters and book your tickets instantly</p>
                </div>
                <div class="movies-grid">
                    ${movies.map(movie => `
                        <div class="movie-card fade-in-up" style="animation-delay: ${movie.id * 0.1}s">
                            <div class="movie-poster" style="background: ${movie.posterColor}">
                                <div class="poster-text">${movie.title}</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i> ${movie.rating}
                                </div>
                            </div>
                            <div class="movie-info">
                                <h3>${movie.title}</h3>
                                <p class="genre">${movie.genre}</p>
                                <div class="movie-details">
                                    <span>${movie.duration}</span>
                                    <span>${movie.language}</span>
                                </div>
                                <p class="movie-description">${movie.description}</p>
                                <button class="book-now-btn">
                                    <i class="fas fa-ticket-alt"></i> Book Tickets
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="offers-section" id="offers">
            <div class="container">
                <div class="section-header fade-in-up">
                    <h2>Special Offers</h2>
                    <p>Exclusive deals to make your movie experience even better</p>
                </div>
                <div class="offers-grid">
                    <div class="offer-card fade-in-up">
                        <div class="offer-icon">
                            <i class="fas fa-ticket-alt"></i>
                        </div>
                        <h3>Flat ₹100 Off</h3>
                        <p>On your first booking with ManoranjanPe. Start your cinematic journey with savings!</p>
                        <span class="code">WELCOME100</span>
                    </div>
                    <div class="offer-card fade-in-up" style="animation-delay: 0.2s">
                        <div class="offer-icon">
                            <i class="fas fa-popcorn"></i>
                        </div>
                        <h3>Free Popcorn Combo</h3>
                        <p>Get free popcorn and cold drink on movie tickets above ₹300. Perfect movie snacks!</p>
                        <span class="code">POPCORNFREE</span>
                    </div>
                    <div class="offer-card fade-in-up" style="animation-delay: 0.4s">
                        <div class="offer-icon">
                            <i class="fas fa-gift"></i>
                        </div>
                        <h3>Weekend Special</h3>
                        <p>Enjoy 20% off on all weekend shows. Perfect for family outings and date nights!</p>
                        <span class="code">WEEKEND20</span>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>ManoranjanPe</h3>
                        <p>Har movie, ek click door</p>
                        <p>Your ultimate destination for movie ticket booking with the best prices and exclusive offers.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <p><a href="#movies" style="color: var(--text-light); text-decoration: none;">Movies</a></p>
                        <p><a href="#theaters" style="color: var(--text-light); text-decoration: none;">Theaters</a></p>
                        <p><a href="#offers" style="color: var(--text-light); text-decoration: none;">Offers</a></p>
                        <p><a href="#help" style="color: var(--text-light); text-decoration: none;">Help & Support</a></p>
                    </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <p><i class="fas fa-envelope"></i> support@manoranjanpe.com</p>
                        <p><i class="fas fa-phone"></i> +91 9876543210</p>
                        <p><i class="fas fa-map-marker-alt"></i> Mumbai, Maharashtra, India</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 ManoranjanPe. All rights reserved. | Made with <i class="fas fa-heart" style="color: var(--primary);"></i> for movie lovers</p>
                </div>
            </div>
        </footer>

        <script>
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Smooth scrolling
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Add click listeners for smooth scrolling
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

            // Movie card hover effects
            document.querySelectorAll('.movie-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Search functionality
            document.querySelector('.search-bar input').addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                console.log('Searching for:', searchTerm);
                // Add actual search logic here
            });

            console.log('🎬 ManoranjanPe - Enhanced movie booking experience loaded!');
        </script>
    </body>
    </html>
    `);
});

// Enhanced API Routes
app.get('/api/movies', (req, res) => {
    res.json({
        success: true,
        data: movies,
        message: 'Movies fetched successfully',
        timestamp: new Date().toISOString(),
        count: movies.length
    });
});

app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
        return res.status(404).json({
            success: false,
            message: 'Movie not found'
        });
    }
    
    res.json({
        success: true,
        data: movie,
        message: 'Movie details fetched successfully'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        service: 'ManoranjanPe API',
        version: '2.0.0',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('🚨 Error:', err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'production' ? {} : err.message,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path,
        method: req.method,
        timestamp: new Date().toISOString()
    });
});

// Start server with enhanced logging
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    🎬  ManoranjanPe Server Started Successfully!
    🚀  Version: 2.0.0 (Enhanced)
    📍  Server: http://localhost:${PORT}
    🩺  Health: http://localhost:${PORT}/api/health
    🎭  Movies API: http://localhost:${PORT}/api/movies
    ⚡  Environment: ${process.env.NODE_ENV || 'development'}
    🕒  Started at: ${new Date().toISOString()}
    `);
});

// Enhanced graceful shutdown
const gracefulShutdown = (signal) => {
    console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
        console.log('✅ HTTP server closed.');
        console.log('👋 ManoranjanPe server stopped gracefully.');
        process.exit(0);
    });

    // Force close after 10 seconds
    setTimeout(() => {
        console.error('❌ Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('💥 Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});