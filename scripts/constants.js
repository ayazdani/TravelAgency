
export const destinations = {
    domestic: {
        'Diamond Head campground': { 
            cost: 49.2,
            activities: ['Mermaid lookout track', 'Diving', 'Ocean view'],
            description: 'The beachside campground at Diamond Head',
            image: '../images/diamond-head.jpg',
            website: 'https://www.nationalparks.nsw.gov.au/camping-and-accommodation/campgrounds/diamond-head-campground',
            tags: ['National Parks', 'Kangaroo', 'Picnic']
        },
        'Jervisbay Holiday Park': { 
            cost: 86,
            activities: ['Kayak', 'Sunrise Viewing', 'Swimming pool'],
            description: 'well-maintained, unspoilt, privately owned park on a crystal clear waterway accessing Jervis Bay',
            image: '../images/jervisbay.jpg',
            website: 'https://jervisbayholidaypark.com.au/',
            tags: ['Pet Friendly', 'Private Boat', 'BBQ']
        },
        'West Head lookout': { 
            cost: 12,
            activities: ['Hiking', 'Rock Climbing', 'Lookout'],
            description: 'Stunning mountain wilderness',
            image: '../images/west-head.jpg',
            website: 'https://www.nationalparks.nsw.gov.au/things-to-do/lookouts/west-head-lookout',
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

export const emailConfig = {
    serviceId: 'service_p0a0231',
    templateId: 'template_tq13eto',
    defaultEmail: 'arezoo.yazdani@gmail.com'
}; 