# ILoveAu Travel Agency Website

A modern, responsive travel agency website showcasing Australian and international destinations, featuring an interactive trip cost calculator and contact form.

## 🌟 Features

- Responsive design for mobile, tablet, and desktop
- Interactive destination cards with dynamic content
- Trip cost calculator with real-time updates
- Contact form with EmailJS integration
- Australian and international destination showcases
- Modern UI with smooth animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- EmailJS for contact form
- Font Awesome for icons

## 📋 Prerequisites

- A modern web browser
- A local web server (due to ES6 module usage)
- EmailJS account for contact form functionality

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd TravelAgency
   ```

2. Set up a local server:
   - Use VS Code's Live Server extension
   - Or Python's built-in server: `python -m http.server 8000`
   - Or any other local server solution

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email template
   - Update the EmailJS configuration in `index.html`:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     ```
   - Update service and template IDs in `scripts/constants.js`

## 📁 Project Structure

```
TravelAgency/
├── images/                 # Project images
│   ├── diamond-head.jpg   # Diamond Head Campground destination
│   ├── hero.jpg          # Hero section background
│   ├── jervisbay.jpg     # Jervis Bay Holiday Park destination
│   ├── logo.png          # Website logo
│   └── west-head.jpg     # West Head Lookout destination
├── scripts/
│   ├── script.js          # Main JavaScript file
│   └── constants.js       # Configuration and data
├── styles/
│   └── style.css         # Main stylesheet
├── index.html            # Main HTML file
└── README.md            # Project documentation
```

## 💡 Development Guidelines

- Use semantic HTML elements
- Follow BEM naming convention for CSS classes
- Maintain mobile-first responsive design
- Keep JavaScript modular using ES6 modules
- Update constants.js for any data changes


## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px


## 👥 Author

- Arezoo Yazdani

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Font Awesome
- EmailJS for form functionality 


The website features a carefully curated selection of six destination cards, equally divided between Australian and international locations. This number was chosen deliberately to:

1. Demonstrate technical competency in component development
2. Showcase diverse travel experiences
3. Maintain optimal performance and load times
4. Ensure responsive design across all devices
5. Facilitate easy maintenance and updates 