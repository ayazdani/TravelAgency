// Destination Data
export const destinations = {
    domestic: {
        'great-barrier-reef': { 
            cost: 800,
            activities: ['Snorkeling', 'Diving', 'Glass Bottom Boat'],
            description: 'World Heritage marine park',
            image: '../images/great-barrier-reef.jpg',
            website: 'https://www.gbrmpa.gov.au',
            tags: ['Natural Wonder', 'Marine Life', 'Diving']
        },
        'uluru': { 
            cost: 700,
            activities: ['Cultural Tours', 'Sunrise Viewing', 'Desert Walks'],
            description: 'Sacred Aboriginal site',
            image: '../images/uluru.jpg',
            website: 'https://parksaustralia.gov.au/uluru/',
            tags: ['Cultural Site', 'Desert', 'Sunrise Tours']
        },
        'blue-mountains': { 
            cost: 400,
            activities: ['Hiking', 'Rock Climbing', 'Scenic Railway'],
            description: 'Stunning mountain wilderness',
            image: '../images/blue-mountains.jpg',
            website: 'https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park',
            tags: ['Hiking', 'Nature', 'Adventure']
        }
    },
    international: {
        'paris': { 
            cost: 1500,
            activities: ['Eiffel Tower', 'Louvre Museum', 'River Seine Cruise'],
            description: 'City of Lights',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&h=900&q=80',
            tags: ['Culture', 'History', 'Cuisine']
        },
        'bali': { 
            cost: 1200,
            activities: ['Beach Activities', 'Temple Tours', 'Spa Treatments'],
            description: 'Tropical paradise',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&h=900&q=80',
            tags: ['Beach', 'Culture', 'Wellness']
        },
        'newyork': { 
            cost: 1800,
            activities: ['Broadway Shows', 'City Tours', 'Museum Visits'],
            description: 'The Big Apple',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&h=900&q=80',
            tags: ['Urban', 'Entertainment', 'Shopping']
        }
    }
};

// Accommodation Rates
export const accommodationRates = {
    'budget': { 
        cost: 50,
        rating: '3⭐'
    },
    'standard': { 
        cost: 120,
        rating: '4⭐'
    },
    'luxury': { 
        cost: 250,
        rating: '5⭐'
    }
};

// Additional Services
export const additionalServices = {
    guide: { 
        cost: 200,
        description: 'Professional local guide'
    },
    insurance: { 
        cost: 50,
        description: 'Travel insurance coverage'
    },
    activities: { 
        cost: 150,
        description: 'Access to all listed activities'
    }
};

// Email Configuration
export const emailConfig = {
    serviceId: 'service_p0a0231',
    templateId: 'template_tq13eto',
    defaultEmail: 'arezoo.yazdani@gmail.com'
}; 