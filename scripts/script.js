import { destinations, accommodationRates, additionalServices, emailConfig } from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
   // console.log("DOMContentLoaded");
    setupFormHandlers();
    initializeDestinationCards();
    setupMobileMenu();
    initializeViewMoreButtons();
});

function initializeDestinationCards() {

    Object.entries(destinations.domestic).forEach(([key, data]) => {
        const card = document.getElementById(`dest-${key}`);
        if (card) {
            const image = card.querySelector('.destination-image');
            image.style.backgroundImage = `url('${data.image}')`;
            
            card.href = data.website;
            card.querySelector('h3').textContent = key.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            card.querySelector('p').textContent = data.description;
            
            const tagsContainer = card.querySelector('.destination-details');
            tagsContainer.innerHTML = data.tags
                .map(tag => `<span class="tag">${tag}</span>`)
                .join('');
        }
    });

    Object.entries(destinations.international).forEach(([key, data]) => {
        const card = document.getElementById(`int-${key}`);
        if (card) {
            const image = card.querySelector('.destination-image');
            image.style.backgroundImage = `url('${data.image}')`;
            
            card.querySelector('h3').textContent = key.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            card.querySelector('p').textContent = data.description;
            
            const tagsContainer = card.querySelector('.destination-details');
            tagsContainer.innerHTML = data.tags
                .map(tag => `<span class="tag">${tag}</span>`)
                .join('');
        }
    });
}

function setupFormHandlers() {

    const tripTypeSelect = document.getElementById('tripType');
    
    tripTypeSelect.addEventListener('change', (event) => {
        updateDestinationOptions(event.target.value);
    });

    document.getElementById('calculatorForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateEstimate();
    });


    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
}

function updateDestinationOptions(type) {
    const destinationSelect = document.getElementById('destination');
    destinationSelect.innerHTML = '<option value="">Select Destination</option>';

    if (!type) return;

    const options = destinations[type];
    if (!options) return;

    Object.entries(options).forEach(([key, data]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        destinationSelect.appendChild(option);
    });
}

function updateEstimate() {
    const tripType = document.getElementById('tripType').value;
    const destination = document.getElementById('destination').value;
    const duration = parseInt(document.getElementById('duration').value) || 0;
    const travelers = parseInt(document.getElementById('travelers').value) || 0;
    const accommodation = document.getElementById('accommodation').value;

    if (!tripType || !destination || !duration || !travelers || !accommodation) {
        return;
    }


    const basePrice = destinations[tripType][destination].cost;
    const accommodationCost = accommodationRates[accommodation].cost * duration * travelers;
    
    let additionalCost = 0;
    Object.keys(additionalServices).forEach(service => {
        if (document.getElementById(service).checked) {
            additionalCost += additionalServices[service].cost * travelers;
        }
    });

    const totalCost = (basePrice * travelers) + accommodationCost + additionalCost;
    
    updatePriceDisplay(totalCost);
    updateCostBreakdown(basePrice, accommodationCost, additionalCost, travelers);
}

function updatePriceDisplay(total) {
    const formatter = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    });
    document.getElementById('totalCost').textContent = formatter.format(total);
}

function updateCostBreakdown(basePrice, accommodationCost, additionalCost, travelers) {
    const formatter = new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    });

    const breakdown = document.getElementById('costBreakdown');
    breakdown.innerHTML = `
        <div class="breakdown-item">
            <span>Base Cost (per person):</span>
            <span>${formatter.format(basePrice)}</span>
        </div>
        <div class="breakdown-item">
            <span>Accommodation:</span>
            <span>${formatter.format(accommodationCost)}</span>
        </div>
        <div class="breakdown-item">
            <span>Additional Services:</span>
            <span>${formatter.format(additionalCost)}</span>
        </div>
    `;
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const inquiryType = document.getElementById('inquiryType').value;
    const message = document.getElementById('message').value.trim();

    if (!validateForm(name, email, inquiryType, message)) {
        return false;
    }

    const submitBtn = event.target.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';


    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone || "12500",
        inquiry_type: inquiryType,
        message: message,
        to_email: emailConfig.defaultEmail,
        subject: `New Travel Inquiry - ${inquiryType}`
    };

    emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams)
    .then(() => {

        showNotification('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Email Error:', error);
        showNotification('error', 'Sorry, there was a problem sending your message. Please try again.');
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
    });

    return false;
}

function validateForm(name, email, inquiryType, message) {
    let isValid = true;
    clearNotifications();

    if (!name) {
        showFieldError('name', 'Please enter your name');
        isValid = false;
    }

    if (!email) {
        showFieldError('email', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!inquiryType) {
        showFieldError('inquiryType', 'Please select an inquiry type');
        isValid = false;
    }

    if (!message) {
        showFieldError('message', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    
    field.classList.add('error-input');
    field.parentNode.appendChild(errorDiv);
}

function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
        </div>
    `;
    
    document.querySelector('.contact-container').insertBefore(notification, document.getElementById('contactForm'));
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function clearNotifications() {
    document.querySelectorAll('.field-error').forEach(error => error.remove());
    document.querySelectorAll('.error-input').forEach(input => input.classList.remove('error-input'));
    document.querySelectorAll('.notification').forEach(notif => notif.remove());
}

function setupMobileMenu() {
    console.log("Setting up mobile menu");
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        });
    });
}

function initializeViewMoreButtons() {
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    
    viewMoreBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const section = e.target.closest('section');
            await loadMoreDestinations(section);
        });
    });
}

async function loadMoreDestinations(section) {
    const btn = section.querySelector('.view-more-btn');
    const spinner = btn.querySelector('.loading-spinner');
    const btnText = btn.querySelector('.btn-text');
    
    try {

        spinner.hidden = false;
        btnText.textContent = 'Loading...';
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const grid = section.querySelector('.destination-grid');
        const message = document.createElement('div');
        message.className = 'info-message';
        message.innerHTML = `
            <p>More destinations coming soon!</p>
            <p>We're currently expanding our collection of amazing destinations.</p>
            <p>Please check back later for updates.</p>
        `;
        grid.appendChild(message);
        
        btn.style.display = 'none';
        
    } catch (error) {
        console.error('Error loading more destinations:', error);
        btnText.textContent = 'Error loading destinations';
    } finally {
        spinner.hidden = true;
    }
}
