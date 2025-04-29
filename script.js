// Sample events data for different regions
const events = [
    // LPU Area Events
    {
        id: 1,
        name: "LPU Campus Cleanup Drive",
        date: "2024-03-25",
        time: "09:00 AM",
        location: "Lovely Professional University, Phagwara",
        description: "Join us for a major campus cleanup initiative at LPU. Help maintain our beautiful campus!",
        image: "https://happenings.lpu.in/wp-content/uploads/2019/06/LPu1.png",
        category: "lpu",
        volunteers: {
            current: 45,
            max: 100
        }
    },
    {
        id: 2,
        name: "Mittal Mall Area Restoration",
        date: "2024-03-28",
        time: "08:00 AM",
        location: "Mittal Mall, Phagwara",
        description: "Community cleanup event near Mittal Mall to improve the surrounding area.",
        image: "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/472580400_1886412845223317_3066515776427841499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ZTOw-SwwcbQQ7kNvwFl4u5T&_nc_oc=AdmFioKu0d-STcIPQa0NO_IEK7zBRKXvru8q7uo-pBZ9G1PUmr12zwHUFF8iff9qblM&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=2y94d5RWMKu5qAILMVrF9A&oh=00_AfHArIo0GIU3Xnv6USjWpc_q7MKUPVUanADzSRpcxmZFuA&oe=67F92B8B",
        category: "lpu",
        volunteers: {
            current: 25,
            max: 50
        }
    },

    // Jalandhar Events
    {
        id: 3,
        name: "Model Town Park Cleanup",
        date: "2024-04-02",
        time: "07:30 AM",
        location: "Model Town Park, Jalandhar",
        description: "Help us maintain one of Jalandhar's most popular parks.",
        image: "https://images.tribuneindia.com/cms/gall_content/2015/3/2015_3$largeimg03_Mar_2015_014527863.jpg",
        category: "jalandhar",
        volunteers: {
            current: 32,
            max: 50
        }
    },
    {
        id: 4,
        name: "Burlton Park Restoration",
        date: "2024-04-05",
        time: "08:30 AM",
        location: "Burlton Park, Jalandhar",
        description: "Join our initiative to clean and restore Burlton Park.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/burlton-park-jalandhar-punjab-attr-hero?qlt=82&ts=1726661358908",
        category: "jalandhar",
        volunteers: {
            current: 28,
            max: 40
        }
    },

    // Phagwara Events
    {
        id: 5,
        name: "Phagwara Central Park Cleanup",
        date: "2024-04-08",
        time: "09:00 AM",
        location: "Central Park, Phagwara",
        description: "Community initiative to clean and beautify Phagwara's Central Park.",
        image: "https://content.jdmagicbox.com/comp/phagwara/x3/9999p1824.1824.220521203809.n4x3/catalogue/dr-b-r-ambedkar-park-phagwara-ho-phagwara-parks-lDYVcOTIfu.jpg",
        category: "phagwara",
        volunteers: {
            current: 20,
            max: 35
        }
    },

    // Ludhiana Events
    {
        id: 6,
        name: "Rose Garden Cleanup",
        date: "2024-04-12",
        time: "07:00 AM",
        location: "Rose Garden, Ludhiana",
        description: "Help us maintain Ludhiana's beautiful Rose Garden.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/25/ca/50/photo2jpg.jpg?w=1200&h=-1&s=1",
        category: "ludhiana",
        volunteers: {
            current: 40,
            max: 60
        }
    },
    {
        id: 7,
        name: "Rakh Bagh Park Restoration",
        date: "2024-04-15",
        time: "08:00 AM",
        location: "Rakh Bagh, Ludhiana",
        description: "Join us in restoring the historic Rakh Bagh park.",
        image: "https://indiano.travel/wp-content/uploads/2022/10/Untitled-design-77-1.jpg",
        category: "ludhiana",
        volunteers: {
            current: 35,
            max: 50
        }
    },

    // Outside Punjab Events
    {
        id: 8,
        name: "Delhi Ridge Cleanup",
        date: "2024-04-20",
        time: "07:30 AM",
        location: "Northern Ridge, Delhi",
        description: "Help preserve Delhi's green lung with this cleanup initiative.",
        image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/02/13171920/130217_NorthernRidge.jpg?w=1200&h=628&fill=blur&fit=fill",
        category: "outside",
        volunteers: {
            current: 50,
            max: 100
        }
    },
    {
        id: 9,
        name: "Shimla Mall Road Cleanup",
        date: "2024-04-25",
        time: "08:00 AM",
        location: "Mall Road, Shimla",
        description: "Join us in keeping Shimla's iconic Mall Road clean and beautiful.",
        image: "https://media1.thrillophilia.com/filestore/l5stwgse3qt889ohvpojpa13ftp0_Mall_Road_Shimla_1.jpg",
        category: "outside",
        volunteers: {
            current: 30,
            max: 45
        }
    }
];

// Event locations data with coordinates
const eventLocations = [
    {
        title: 'LPU Campus Cleanup Drive',
        position: { lat: 31.2460, lng: 75.7015 },
        date: '2024-03-25',
        volunteers: '45/100',
        address: 'Lovely Professional University, Phagwara'
    },
    {
        title: 'Mittal Mall Area Restoration',
        position: { lat: 31.2240, lng: 75.7033 },
        date: '2024-03-28',
        volunteers: '25/50',
        address: 'Mittal Mall, Phagwara'
    },
    {
        title: 'Model Town Park Cleanup',
        position: { lat: 31.3260, lng: 75.5762 },
        date: '2024-04-02',
        volunteers: '32/50',
        address: 'Model Town Park, Jalandhar'
    },
    {
        title: 'Burlton Park Restoration',
        position: { lat: 31.3280, lng: 75.5792 },
        date: '2024-04-05',
        volunteers: '28/40',
        address: 'Burlton Park, Jalandhar'
    },
    {
        title: 'Phagwara Central Park Cleanup',
        position: { lat: 31.2240, lng: 75.7030 },
        date: '2024-04-08',
        volunteers: '20/35',
        address: 'Central Park, Phagwara'
    },
    {
        title: 'Rose Garden Cleanup',
        position: { lat: 30.9010, lng: 75.8573 },
        date: '2024-04-12',
        volunteers: '40/60',
        address: 'Rose Garden, Ludhiana'
    },
    {
        title: 'Rakh Bagh Park Restoration',
        position: { lat: 30.9020, lng: 75.8550 },
        date: '2024-04-15',
        volunteers: '35/50',
        address: 'Rakh Bagh, Ludhiana'
    },
    {
        title: 'Delhi Ridge Cleanup',
        position: { lat: 28.6129, lng: 77.2295 },
        date: '2024-04-20',
        volunteers: '50/100',
        address: 'Northern Ridge, Delhi'
    },
    {
        title: 'Shimla Mall Road Cleanup',
        position: { lat: 31.1048, lng: 77.1734 },
        date: '2024-04-25',
        volunteers: '30/45',
        address: 'Mall Road, Shimla'
    }
];

// DOM Elements
const eventsContainer = document.getElementById('events-container');
const eventForm = document.getElementById('event-form');
const volunteerForm = document.getElementById('volunteer-form');
const contactForm = document.getElementById('contact-form');
const eventSelect = document.querySelector('#volunteer-form select');

// Format date
function formatDate(dateStr) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

// Calculate progress percentage
function calculateProgress(current, max) {
    return (current / max) * 100;
}

// Display events
function displayEvents(filteredEvents = events) {
    eventsContainer.innerHTML = '';
    filteredEvents.forEach((event, index) => {
        const progress = calculateProgress(event.volunteers.current, event.volunteers.max);
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.2}s`;
        
        card.innerHTML = `
            <div class="relative">
                <img src="${event.image}" alt="${event.name}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-sky-600 px-4 py-2 rounded-full text-sm font-bold">
                    <i class="far fa-calendar-alt mr-2"></i>${event.time}
                </div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${event.name}</h3>
                    <p class="text-gray-600 text-sm mb-2 flex items-center">
                        <i class="fas fa-map-marker-alt mr-2 text-sky-600"></i>
                        ${event.location}
                    </p>
                    <p class="text-gray-600 text-sm mb-4 flex items-center">
                        <i class="far fa-calendar mr-2 text-sky-600"></i>
                        ${formatDate(event.date)}
                    </p>
                </div>
                <p class="text-gray-600 text-sm mb-6">${event.description}</p>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between text-sm mb-1">
                            <span class="text-gray-600 font-medium">Volunteers</span>
                            <span class="text-sky-600 font-bold">${event.volunteers.current}/${event.volunteers.max}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-sky-600 rounded-full h-2 transition-all duration-300" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    <div class="pt-4 flex items-center justify-between">
                        <a href="./auth.html" 
                           class="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full hover:from-emerald-500 hover:to-sky-500 transition-all duration-300 font-medium">
                        Join Event
                        </a>
                        <button class="text-gray-500 hover:text-sky-600 transition-colors">
                            <i class="far fa-heart text-xl"></i>
                    </button>
                    </div>
                </div>
            </div>
        `;
        eventsContainer.appendChild(card);
    });

    // Show message if no events found
    if (filteredEvents.length === 0) {
        const noEvents = document.createElement('div');
        noEvents.className = 'col-span-full text-center py-12';
        noEvents.innerHTML = `
            <div class="text-gray-500">
                <i class="fas fa-calendar-times text-4xl mb-4"></i>
                <p class="text-xl font-medium">No events found in this area</p>
                <p class="mt-2">Please check back later or try a different location</p>
            </div>
        `;
        eventsContainer.appendChild(noEvents);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Populate event select in volunteer form
function populateEventSelect() {
    eventSelect.innerHTML = '<option value="">Choose an event</option>';
    events.forEach(event => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.name} - ${new Date(event.date).toLocaleDateString()}`;
        eventSelect.appendChild(option);
    });
}

// Handle event form submission
eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(eventForm);
    const newEvent = {
        id: events.length + 1,
        name: formData.get('event-name'),
        date: formData.get('date-time'),
        location: formData.get('location'),
        description: formData.get('description'),
        volunteers: {
            current: 0,
            max: 0
        },
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    };
    
    events.push(newEvent);
    displayEvents();
    populateEventSelect();
    eventForm.reset();
    
    // Show success message with animation
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-bounce';
    successMessage.textContent = 'Event created successfully!';
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// Handle volunteer form submission
volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(volunteerForm);
    const selectedEventId = parseInt(formData.get('event') || localStorage.getItem('selectedEventId'));
    
    if (!selectedEventId) {
        alert('Please select an event to register for.');
        return;
    }

    // Find the event and update volunteer count
    const event = events.find(e => e.id === selectedEventId);
    if (event && event.volunteers.current < event.volunteers.max) {
        // Update volunteer count
        event.volunteers.current++;
        
        // Update the corresponding eventLocation
        const eventLocation = eventLocations.find(loc => loc.title === event.name);
        if (eventLocation) {
            eventLocation.volunteers = `${event.volunteers.current}/${event.volunteers.max}`;
        }

        // Show success message with animation
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300';
        successMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle"></i>
                <span>Successfully registered for ${event.name}!</span>
            </div>
        `;
        document.body.appendChild(successMessage);
        
        // Clear the form and localStorage
        volunteerForm.reset();
        localStorage.removeItem('selectedEventId');
        
        // Refresh the events display
        displayEvents(events);
        
        setTimeout(() => {
            successMessage.classList.add('opacity-0');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 3000);
    } else if (event && event.volunteers.current >= event.volunteers.max) {
        // Show error message if event is full
        const errorMessage = document.createElement('div');
        errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300';
        errorMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-exclamation-circle"></i>
                <span>Sorry, this event is already full!</span>
            </div>
        `;
        document.body.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.classList.add('opacity-0');
            setTimeout(() => {
                errorMessage.remove();
            }, 300);
        }, 3000);
    }
});

// Handle contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    
    // Show success message with animation
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-bounce';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// Register for event function
function registerForEvent(eventId) {
    // Find the event in the events array
    const event = events.find(e => e.id === eventId);
    
    if (event && event.volunteers.current < event.volunteers.max) {
        // Update volunteer count
        event.volunteers.current++;
        
        // Update the corresponding eventLocation
        const eventLocation = eventLocations.find(loc => loc.title === event.name);
        if (eventLocation) {
            eventLocation.volunteers = `${event.volunteers.current}/${event.volunteers.max}`;
        }

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300';
        successMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-check-circle"></i>
                <span>Successfully registered for ${event.name}!</span>
            </div>
        `;
        document.body.appendChild(successMessage);

        // Refresh the events display
        displayEvents(events);

        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.add('opacity-0');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 3000);

        // Save updated events data to localStorage
        localStorage.setItem('eventsData', JSON.stringify(events));
    } else if (event && event.volunteers.current >= event.volunteers.max) {
        // Show error message if event is full
        const errorMessage = document.createElement('div');
        errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300';
        errorMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-exclamation-circle"></i>
                <span>Sorry, this event is already full!</span>
            </div>
        `;
        document.body.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.classList.add('opacity-0');
            setTimeout(() => {
                errorMessage.remove();
            }, 300);
        }, 3000);
    }

    // Redirect to auth page
    window.location.href = './auth.html';
}

// Mobile menu toggle
document.querySelector('.md\\:hidden').addEventListener('click', () => {
    const navLinks = document.querySelector('.hidden.md\\:flex');
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-16');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('right-0');
    navLinks.classList.toggle('bg-green-600');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('space-y-4');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load saved events data from localStorage
    const savedEvents = localStorage.getItem('eventsData');
    if (savedEvents) {
        const parsedEvents = JSON.parse(savedEvents);
        // Update only the volunteer counts from saved data
        events.forEach(event => {
            const savedEvent = parsedEvents.find(e => e.id === event.id);
            if (savedEvent) {
                event.volunteers.current = savedEvent.volunteers.current;
            }
        });
    }

    displayEvents();
    populateEventSelect();

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize the map
function initMap() {
    // Center the map on Jalandhar
    const jalandhar = { lat: 31.3260, lng: 75.5762 };
    
    // Create the map
    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 13,
        center: jalandhar,
        styles: [
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#e5e5e5' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9c9c9' }]
            }
        ]
    });

    // Create an info window to share between markers
    const infoWindow = new google.maps.InfoWindow();

    // Add markers for each event
    eventLocations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#10b981',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
            },
            animation: google.maps.Animation.DROP
        });

        // Create the content for the info window
        const content = `
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${location.title}</h3>
                <p class="text-gray-600 mb-2">
                    <i class="far fa-calendar mr-2"></i>${location.date}
                </p>
                <p class="text-gray-600 mb-2">
                    <i class="fas fa-map-marker-alt mr-2"></i>${location.address}
                </p>
                <p class="text-green-600 font-medium mb-3">
                    <i class="fas fa-users mr-2"></i>${location.volunteers} volunteers
                </p>
                <a href="#" class="text-sky-500 hover:text-sky-600 font-medium">
                    View Details →
                </a>
            </div>
        `;

        // Add click event to show info window
        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
        });

        // Add hover effect
        marker.addListener('mouseover', () => {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });

        marker.addListener('mouseout', () => {
            marker.setAnimation(null);
        });
    });

    // Add custom controls
    const locationButton = document.createElement('button');
    locationButton.classList.add(
        'bg-white',
        'shadow-md',
        'rounded-lg',
        'px-4',
        'py-2',
        'mt-4',
        'mr-4',
        'text-gray-700',
        'hover:bg-gray-50',
        'transition-colors'
    );
    locationButton.innerHTML = '<i class="fas fa-location-arrow mr-2"></i>Current Location';
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);

    // Add click event for location button
    locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos);
                    map.setZoom(14);
                },
                (error) => {
                    handleLocationError(true, infoWindow, map, map.getCenter());
                }
            );            
        } else {
            alert('Error: Your browser doesn\'t support geolocation.');
        }
    });
}

// Handle errors
function handleLocationError(browserHasGeolocation, infoWindow, map, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? 'Error: The Geolocation service failed or was blocked.'
            : 'Error: Your browser doesn\'t support geolocation.'
    );
    infoWindow.open(map);
}

// Update the filterEvents function in events.html script section
function filterEvents(category) {
    const filteredEvents = category === 'all' 
        ? events 
        : events.filter(event => event.category === category);
    
    displayEvents(filteredEvents);

    // Update active button styles
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category)) {
            btn.classList.remove('bg-white', 'text-gray-700');
            btn.classList.add('bg-sky-500', 'text-white');
        } else {
            btn.classList.remove('bg-sky-500', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700');
        }
    });

    // Update map view based on category
    if (category !== 'all') {
        const categoryLocations = eventLocations.filter(loc => {
            const matchingEvent = events.find(e => e.title === loc.title);
            return matchingEvent && matchingEvent.category === category;
        });

        if (categoryLocations.length > 0) {
            const bounds = L.latLngBounds(categoryLocations.map(loc => [loc.position.lat, loc.position.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    } else {
        map.setView([31.2460, 75.7015], 8); // Reset to default view centered on LPU
    }
}

// Export for use in events.html
window.eventLocations = eventLocations;
window.displayEvents = displayEvents;
