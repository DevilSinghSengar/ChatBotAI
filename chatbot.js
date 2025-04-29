// Chatbot training data
const chatbotTrainingData = {
    greetings: [
        {
            patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
            responses: [
                "Hello! How can I help you today?",
                "Hi there! I'm here to assist you with cleanup events.",
                "Welcome to CleanupCrew! What would you like to know?"
            ]
        }
    ],
    events: [
        {
            patterns: ["find events", "upcoming events", "show events", "events near me", "local events"],
            responses: [
                "I can help you find cleanup events in your area. Which location are you interested in?",
                "Here are some upcoming cleanup events in your area. Would you like to see events in a specific location?",
                "I can show you all the upcoming cleanup events. Which area would you like to explore?"
            ]
        }
    ],
    registration: [
        {
            patterns: ["how to register", "sign up", "join", "become a volunteer", "register"],
            responses: [
                "To register as a volunteer, you'll need to create an account and fill out our registration form. Would you like me to guide you through the process?",
                "I can help you with the registration process. First, you'll need to create an account. Would you like to proceed?",
                "Registration is easy! Let me walk you through the steps to become a volunteer."
            ]
        }
    ],
    support: [
        {
            patterns: ["contact support", "help", "support", "problem", "issue"],
            responses: [
                "I'm here to help! What kind of support do you need?",
                "I can assist you with any questions or issues. What's on your mind?",
                "How can I help you today? I'm here to provide support and guidance."
            ]
        }
    ]
};

// Question-Answer database
const questionAnswerDatabase = {
    // General questions about CleanupCrew
    general: [
        {
            question: "What is CleanupCrew?",
            answer: "CleanupCrew is a community-driven platform that connects volunteers with environmental cleanup events. We organize and facilitate cleanup activities to help protect and preserve our environment."
        },
        {
            question: "Who can join CleanupCrew?",
            answer: "Anyone who is passionate about environmental conservation can join CleanupCrew. We welcome volunteers of all ages, backgrounds, and experience levels. Whether you're a student, professional, or retiree, there's a place for you in our community."
        },
        {
            question: "Is CleanupCrew free to join?",
            answer: "Yes, joining CleanupCrew as a volunteer is completely free. We believe in making environmental action accessible to everyone. Some events may have associated costs for materials or transportation, but these are clearly communicated beforehand."
        },
        {
            question: "How does CleanupCrew work?",
            answer: "CleanupCrew works by connecting volunteers with local cleanup events. You can browse upcoming events, register to participate, and track your contributions. We also provide resources, training, and community support to help you make a difference."
        }
    ],
    
    // Questions about events
    events: [
        {
            question: "What types of cleanup events are there?",
            answer: "We organize various types of cleanup events including beach cleanups, park cleanups, river cleanups, urban cleanups, and specialized events for hazardous waste. Each event is tailored to address specific environmental challenges in different locations."
        },
        {
            question: "How often are cleanup events held?",
            answer: "Cleanup events are held regularly throughout the year. We have weekly local events, monthly regional events, and quarterly large-scale events. During environmental awareness months, we often have additional special events."
        },
        {
            question: "How long do cleanup events typically last?",
            answer: "Most cleanup events last between 2-4 hours. Some larger events may run for a full day. The duration is always clearly stated in the event details when you register."
        },
        {
            question: "What should I bring to a cleanup event?",
            answer: "For most events, we provide all necessary equipment including gloves, bags, and tools. You should bring water, sunscreen, comfortable clothing, and closed-toe shoes. For specific events, additional items may be required and will be listed in the event details."
        },
        {
            question: "Can I organize my own cleanup event?",
            answer: "Yes! We encourage community members to organize their own cleanup events. We provide resources, guidance, and support to help you plan and execute successful events. You can submit an event proposal through our website."
        }
    ],
    
    // Questions about registration and participation
    registration: [
        {
            question: "How do I register for an event?",
            answer: "To register for an event, simply browse our events page, select an event you're interested in, and click the 'Register' button. You'll need to create an account if you don't already have one. After registration, you'll receive confirmation and event details via email."
        },
        {
            question: "Can I bring friends or family to events?",
            answer: "Yes, you can bring friends and family to most events. When registering, you'll have the option to indicate how many additional people you're bringing. For some events with limited capacity, this may be restricted, so check the event details."
        },
        {
            question: "What happens if I need to cancel my registration?",
            answer: "If you need to cancel your registration, you can do so through your account dashboard or by contacting our support team. We appreciate at least 24 hours' notice so we can adjust our planning accordingly."
        },
        {
            question: "Do I need experience to participate?",
            answer: "No experience is required to participate in most cleanup events. We provide all necessary training and guidance on-site. For specialized events that require specific skills, this will be clearly indicated in the event description."
        }
    ],
    
    // Questions about environmental impact
    impact: [
        {
            question: "What impact do cleanup events have?",
            answer: "Cleanup events have both immediate and long-term environmental impacts. They remove harmful waste from natural areas, protect wildlife, improve water quality, and raise awareness about environmental issues. Our events have collectively removed over 50,000 pounds of waste from natural areas."
        },
        {
            question: "How does CleanupCrew measure its impact?",
            answer: "We measure our impact through data collection at each event, including the amount and types of waste collected, the number of participants, and the area cleaned. This data helps us track progress, identify problem areas, and develop targeted solutions."
        },
        {
            question: "What happens to the waste collected during cleanups?",
            answer: "All collected waste is properly sorted and disposed of according to local regulations. Recyclable materials are sent to recycling facilities, hazardous waste is handled by specialized disposal services, and general waste goes to appropriate landfills."
        },
        {
            question: "How can I maximize my environmental impact?",
            answer: "To maximize your environmental impact, participate regularly in cleanup events, encourage others to join, share your experiences on social media, and apply what you learn to reduce waste in your daily life. Small actions, when multiplied across many people, create significant change."
        }
    ],
    
    // Questions about environmental topics
    environmental: [
        {
            question: "What are the most common types of litter found during cleanups?",
            answer: "The most common types of litter found during cleanups are single-use plastics (bottles, bags, straws), cigarette butts, food packaging, and beverage containers. These items are lightweight, easily carried by wind and water, and often improperly disposed of."
        },
        {
            question: "How does plastic pollution affect marine life?",
            answer: "Plastic pollution affects marine life in numerous ways. Animals can become entangled in plastic debris, ingest it mistaking it for food, or be harmed by the chemicals it releases. It's estimated that over 700 marine species are affected by plastic pollution, with millions of animals dying each year due to plastic ingestion or entanglement."
        },
        {
            question: "What is microplastic and why is it concerning?",
            answer: "Microplastics are tiny plastic particles (less than 5mm in size) that result from the breakdown of larger plastic items or are manufactured as small particles. They're concerning because they're nearly impossible to remove from the environment, can be ingested by marine life and humans, and may carry harmful chemicals. They've been found in drinking water, seafood, and even human tissue."
        },
        {
            question: "How does litter affect water quality?",
            answer: "Litter affects water quality by releasing harmful chemicals as it breaks down, blocking drainage systems which can lead to flooding, and providing surfaces for harmful bacteria to grow. It can also contaminate drinking water sources and harm aquatic ecosystems."
        }
    ],
    
    // Questions about volunteering and community
    volunteering: [
        {
            question: "What are the benefits of volunteering with CleanupCrew?",
            answer: "Volunteering with CleanupCrew offers numerous benefits including making a positive environmental impact, connecting with like-minded individuals, learning about environmental issues, gaining new skills, and contributing to your community. Many volunteers also find it personally rewarding and a great way to spend time outdoors."
        },
        {
            question: "Can I earn community service hours through CleanupCrew?",
            answer: "Yes, many educational institutions and organizations recognize CleanupCrew events for community service hours. We provide documentation of your participation upon request. Check with your institution about their specific requirements."
        },
        {
            question: "Are there opportunities for long-term volunteering?",
            answer: "Yes, we offer various long-term volunteering opportunities including event coordination, community outreach, education programs, and administrative support. These roles allow for deeper engagement and skill development."
        },
        {
            question: "How can I get more involved beyond participating in events?",
            answer: "Beyond participating in events, you can become an event organizer, join our advisory committee, help with social media and outreach, contribute to our blog, or become a community ambassador. We welcome all forms of engagement that help further our mission."
        }
    ],
    
    // Questions about donations and support
    donations: [
        {
            question: "How can I donate to CleanupCrew?",
            answer: "You can donate to CleanupCrew through our website using various payment methods. We also accept in-kind donations of equipment and supplies. All donations are tax-deductible, and you'll receive a receipt for your records."
        },
        {
            question: "How are donations used?",
            answer: "Donations are used to purchase cleanup equipment, organize events, develop educational materials, maintain our platform, and support our staff. We are committed to transparency and provide annual reports detailing how funds are allocated."
        },
        {
            question: "Can I sponsor a specific event?",
            answer: "Yes, we offer sponsorship opportunities for individual events. Sponsors receive recognition at the event, on our website, and in promotional materials. Sponsorship helps cover event costs and allows us to provide more resources to participants."
        },
        {
            question: "Is CleanupCrew a nonprofit organization?",
            answer: "Yes, CleanupCrew is a registered 501(c)(3) nonprofit organization. This means all donations are tax-deductible, and we operate with transparency and accountability to our donors and the communities we serve."
        }
    ]
};

// Function to calculate similarity between two strings
function calculateSimilarity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    if (str1 === str2) return 1.0;
    if (str1.includes(str2) || str2.includes(str1)) return 0.8;
    
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
}

// Function to find the best response based on user input
function findResponse(userInput) {
    userInput = userInput.toLowerCase();
    let bestMatch = {
        intent: null,
        score: 0
    };

    // Search through all categories and patterns
    for (const category in chatbotTrainingData) {
        chatbotTrainingData[category].forEach(item => {
            item.patterns.forEach(pattern => {
                const score = calculateSimilarity(userInput, pattern);
                if (score > bestMatch.score) {
                    bestMatch = {
                        intent: item,
                        score: score
                    };
                }
            });
        });
    }

    // Return random response from best matching intent
    if (bestMatch.score > 0.6 && bestMatch.intent) {
        const responses = bestMatch.intent.responses;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Default response if no good match is found
    return "I'm not sure I understand. Could you please rephrase that or choose from these topics:\n- Find Events\n- How to Register\n- Contact Support";
}

// Function to find answer from question-answer database
function findAnswerFromDatabase(userInput) {
    userInput = userInput.toLowerCase();
    let bestMatch = {
        category: null,
        question: null,
        answer: null,
        score: 0
    };

    // Search through all categories in the database
    for (const category in questionAnswerDatabase) {
        questionAnswerDatabase[category].forEach(item => {
            const score = calculateSimilarity(userInput, item.question);
            if (score > bestMatch.score) {
                bestMatch = {
                    category: category,
                    question: item.question,
                    answer: item.answer,
                    score: score
                };
            }
        });
    }

    // Return the answer if we have a good match
    if (bestMatch.score > 0.5) {
        return {
            question: bestMatch.question,
            answer: bestMatch.answer,
            category: bestMatch.category
        };
    }

    return null;
}

// Function to get AI response
async function getAIResponse(query) {
    try {
        // In a real application, this would call an actual AI API like OpenAI's ChatGPT
        // For demonstration purposes, we'll use a mock response
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock AI responses based on query type
        if (query.includes('environment') || query.includes('climate') || query.includes('pollution')) {
            return {
                text: `
                    <div class="space-y-3">
                        <p class="text-gray-700">Based on my analysis of environmental data, here's what I can tell you:</p>
                        <p class="text-gray-700">Environmental issues are complex and interconnected. Climate change, pollution, and habitat destruction are major concerns that require global cooperation to address effectively.</p>
                        <p class="text-gray-700">Local initiatives like community cleanup events play a crucial role in raising awareness and taking action. By participating in these events, you're contributing to both local environmental health and global environmental consciousness.</p>
                        <p class="text-gray-700">Would you like more specific information about any particular environmental issue?</p>
                    </div>
                `,
                quickReplies: ['Tell me about climate change', 'How does pollution affect health?', 'What can I do to help?']
            };
        } else if (query.includes('volunteer') || query.includes('help') || query.includes('participate')) {
            return {
                text: `
                    <div class="space-y-3">
                        <p class="text-gray-700">Volunteering for environmental causes is incredibly rewarding! Here's what you should know:</p>
                        <p class="text-gray-700">Our cleanup events are designed to be accessible to everyone, regardless of experience level. We provide all necessary equipment and training on-site.</p>
                        <p class="text-gray-700">The impact of even a few hours of volunteering can be significant. A single cleanup event can remove hundreds of pounds of waste from natural areas, protecting wildlife and improving water quality.</p>
                        <p class="text-gray-700">Many of our volunteers find that participating in these events leads to lasting changes in their daily habits, making them more environmentally conscious.</p>
                        <p class="text-gray-700">Would you like to know about upcoming events or how to get more involved?</p>
                    </div>
                `,
                quickReplies: ['Show upcoming events', 'How do I register?', 'What should I bring?']
            };
        } else if (query.includes('recycling') || query.includes('waste') || query.includes('plastic')) {
            return {
                text: `
                    <div class="space-y-3">
                        <p class="text-gray-700">Recycling is a key component of environmental sustainability. Here's what you should know:</p>
                        <p class="text-gray-700">Proper recycling can divert up to 75% of waste from landfills. However, contamination is a major issue - when non-recyclable items are placed in recycling bins, it can cause entire batches to be sent to landfills.</p>
                        <p class="text-gray-700">Common recyclable materials include paper, cardboard, glass, metal, and certain plastics (usually those with recycling codes 1 and 2). Plastic bags, food waste, and certain types of packaging should not be placed in standard recycling bins.</p>
                        <p class="text-gray-700">Would you like more specific information about recycling practices or how to reduce your waste footprint?</p>
                    </div>
                `,
                quickReplies: ['What can I recycle?', 'How to reduce waste', 'Find recycling centers']
            };
        } else {
            // Generic AI response for other queries
            return {
                text: `
                    <div class="space-y-3">
                        <p class="text-gray-700">I've analyzed your question about "${query}" and here's what I can tell you:</p>
                        <p class="text-gray-700">Environmental conservation is a multifaceted issue that requires both individual and collective action. Every small step counts toward creating a more sustainable future.</p>
                        <p class="text-gray-700">Would you like more specific information about this topic or would you prefer to explore other environmental topics?</p>
                    </div>
                `,
                quickReplies: ['Tell me more', 'Show me resources', 'Ask another question']
            };
        }
    } catch (error) {
        console.error('Error getting AI response:', error);
        return {
            text: "I'm having trouble processing your request right now. Please try again later or ask a different question.",
            quickReplies: ['Try again', 'Ask something else', 'Contact support']
        };
    }
}

// API Configuration
const apiConfig = {
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
    apiKey: 'AIzaSyAGA_QL6bRo6HBlw4EIIRHXMDkMpTNwEKM', // Gemini API key
    model: 'gemini-1.5-flash',
    maxTokens: 1000
};

// Function to call Gemini API
async function callChatAPI(query) {
    try {
        const response = await fetch(`${apiConfig.endpoint}?key=${apiConfig.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are an AI assistant for CleanupCrew, an environmental organization. 
                        Provide helpful, accurate, and concise responses about environmental topics, 
                        cleanup events, and sustainability. Keep responses under 200 words.
                        
                        User query: ${query}`
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        
        // Extract the response text from Gemini's response format
        const responseText = data.candidates[0].content.parts[0].text;
        
        // Generate quick replies based on the response
        const quickReplies = generateQuickReplies(responseText);
        
        return {
            text: responseText,
            quickReplies: quickReplies
        };
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        // Fallback to local response if API fails
        return {
            text: getAIResponse(query),
            quickReplies: ['Tell me more', 'How can I help?', 'What events are coming up?']
        };
    }
}

// Function to generate quick replies based on response content
function generateQuickReplies(responseText) {
    // Default quick replies
    let quickReplies = ['Tell me more', 'Ask another question', 'Find Events'];
    
    // Check for keywords in the response to suggest relevant follow-up questions
    if (responseText.toLowerCase().includes('climate') || responseText.toLowerCase().includes('weather')) {
        quickReplies = ['Tell me about climate change', 'How does climate change affect the environment?', 'What can I do about climate change?'];
    } else if (responseText.toLowerCase().includes('pollution') || responseText.toLowerCase().includes('waste')) {
        quickReplies = ['How does pollution affect health?', 'What are the main types of pollution?', 'How can I reduce my waste?'];
    } else if (responseText.toLowerCase().includes('recycling') || responseText.toLowerCase().includes('recycle')) {
        quickReplies = ['What can I recycle?', 'How to recycle properly', 'Find recycling centers'];
    } else if (responseText.toLowerCase().includes('event') || responseText.toLowerCase().includes('cleanup')) {
        quickReplies = ['Show upcoming events', 'How to register for an event', 'What should I bring to an event?'];
    } else if (responseText.toLowerCase().includes('volunteer') || responseText.toLowerCase().includes('help')) {
        quickReplies = ['How can I volunteer?', 'What are the benefits of volunteering?', 'Find volunteer opportunities'];
    }
    
    return quickReplies;
}

// Function to fetch data from external APIs
async function fetchExternalData(query) {
    try {
        // For demonstration purposes, we'll use some mock APIs
        // In a real application, you would use actual API endpoints
        
        // Weather API (mock)
        if (query.includes('weather') || query.includes('temperature')) {
            const city = query.match(/in\s+([a-zA-Z\s]+)/i) ? 
                query.match(/in\s+([a-zA-Z\s]+)/i)[1].trim() : 'Jalandhar';
            
            // Mock weather data
            const weatherData = {
                temperature: Math.floor(Math.random() * 15) + 20, // Random temp between 20-35°C
                condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
                humidity: Math.floor(Math.random() * 40) + 40, // Random humidity between 40-80%
                windSpeed: Math.floor(Math.random() * 10) + 5 // Random wind speed between 5-15 km/h
            };
            
            return {
                type: 'weather',
                data: weatherData
            };
        }
        
        // Environmental news API (mock)
        if (query.includes('news') || query.includes('latest') || query.includes('environmental')) {
            // Mock news data
            const newsData = [
                {
                    title: "New Study Shows Impact of Plastic Pollution on Marine Life",
                    source: "Environmental Science Journal",
                    date: "2024-04-05",
                    summary: "A recent study has revealed alarming statistics about plastic pollution in oceans, affecting over 700 marine species."
                },
                {
                    title: "Government Announces New Recycling Initiative",
                    source: "Environmental Policy News",
                    date: "2024-04-03",
                    summary: "The government has launched a new initiative to improve recycling rates across the country, with a focus on single-use plastics."
                },
                {
                    title: "Community Cleanup Event Breaks Record",
                    source: "Local Environmental News",
                    date: "2024-04-01",
                    summary: "A recent community cleanup event in Jalandhar collected over 2 tons of waste, setting a new record for the region."
                }
            ];
            
            return {
                type: 'news',
                data: newsData
            };
        }
        
        // Environmental tips API (mock)
        if (query.includes('tips') || query.includes('advice') || query.includes('how to')) {
            // Mock tips data
            const tipsData = [
                {
                    category: "Reducing Waste",
                    tips: [
                        "Use reusable bags for shopping",
                        "Avoid single-use plastics",
                        "Compost food waste",
                        "Buy in bulk to reduce packaging"
                    ]
                },
                {
                    category: "Energy Conservation",
                    tips: [
                        "Turn off lights when leaving a room",
                        "Use energy-efficient appliances",
                        "Consider renewable energy sources",
                        "Maintain optimal temperature settings"
                    ]
                },
                {
                    category: "Water Conservation",
                    tips: [
                        "Fix leaky faucets promptly",
                        "Take shorter showers",
                        "Collect rainwater for plants",
                        "Run full loads of laundry"
                    ]
                }
            ];
            
            return {
                type: 'tips',
                data: tipsData
            };
        }
        
        // Web search (mock)
        if (query.includes('search') || query.includes('find information about') || query.includes('look up') || query.includes('web') || query.includes('internet')) {
            const searchTerm = query.replace(/search|find information about|look up|web|internet/i, '').trim();
            
            // Mock search results
            const searchResults = [
                {
                    title: `Information about ${searchTerm}`,
                    url: `https://example.com/search?q=${encodeURIComponent(searchTerm)}`,
                    snippet: `This is a mock search result for ${searchTerm}. In a real application, this would be fetched from a search API.`
                },
                {
                    title: `${searchTerm} - Environmental Impact`,
                    url: `https://example.com/environment/${encodeURIComponent(searchTerm)}`,
                    snippet: `Learn about the environmental impact of ${searchTerm} and how it affects our ecosystem.`
                }
            ];
            
            return {
                type: 'search',
                data: searchResults
            };
        }
        
        // Environmental data API (mock)
        if (query.includes('data') || query.includes('statistics') || query.includes('facts')) {
            // Mock environmental data
            const environmentalData = {
                plasticWaste: {
                    global: "8 million tons of plastic enter oceans annually",
                    recycling: "Only 9% of plastic waste is recycled globally",
                    decomposition: "Plastic takes 400+ years to decompose"
                },
                deforestation: {
                    rate: "10 million hectares of forest are lost annually",
                    impact: "Forests absorb 2.6 billion tons of CO2 each year",
                    solution: "Reforestation could remove 25% of CO2 from atmosphere"
                },
                airQuality: {
                    cities: "91% of people live in areas exceeding WHO air quality guidelines",
                    impact: "Air pollution causes 7 million premature deaths annually",
                    improvement: "Clean air policies could save 1 million lives by 2030"
                }
            };
            
            return {
                type: 'environmentalData',
                data: environmentalData
            };
        }
        
        // Webpage preview (mock)
        if (query.includes('show me') || query.includes('display') || query.includes('open') || query.includes('visit')) {
            const webpage = query.match(/(?:show me|display|open|visit)\s+(.+)/i) ? 
                query.match(/(?:show me|display|open|visit)\s+(.+)/i)[1].trim() : 'environmental protection';
            
            // Mock webpage URL
            const webpageUrl = `https://example.com/${encodeURIComponent(webpage.replace(/\s+/g, '-'))}`;
            
            return {
                type: 'webpage',
                data: {
                    url: webpageUrl,
                    title: `${webpage.charAt(0).toUpperCase() + webpage.slice(1)} - Environmental Information`,
                    description: `This is a mock webpage about ${webpage}. In a real application, this would display actual web content.`
                }
            };
        }
        
        // Default response for unrecognized queries
        return {
            type: 'unknown',
            data: null
        };
    } catch (error) {
        console.error('Error fetching external data:', error);
        return {
            type: 'error',
            data: error.message
        };
    }
}

// Chatbot UI functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const quickActions = document.querySelectorAll('.quick-action');
    const responseRating = document.getElementById('response-rating');
    const apiToggle = document.getElementById('api-toggle');

    // Welcome message
    const welcomeMessage = {
        text: `
            <div class="space-y-3">
                <p class="text-gray-700">👋 Welcome to CleanupCrew AI Assistant! I'm here to help you with:</p>
                <ul class="mt-2 space-y-1 text-gray-700">
                    <li>🌍 Environmental Information</li>
                    <li>📅 Event Details</li>
                    <li>🤝 Volunteering Opportunities</li>
                    <li>💡 Sustainability Tips</li>
                    <li>📊 Environmental Statistics</li>
                </ul>
                <p class="mt-2 text-gray-700">You can ask me specific questions like:</p>
                <ul class="mt-2 space-y-1 text-gray-700">
                    <li>• "What is CleanupCrew's mission?"</li>
                    <li>• "Tell me about upcoming cleanup events"</li>
                    <li>• "How can I volunteer?"</li>
                    <li>• "What are some recycling tips?"</li>
                    <li>• "How does climate change affect our community?"</li>
                </ul>
                <p class="mt-2 text-gray-700">I'm powered by Google's Gemini AI to provide you with accurate and helpful responses!</p>
                <p class="mt-2 text-gray-700">You can toggle between local responses and API-powered responses using the switch below.</p>
            </div>
        `,
        quickReplies: [
            "Tell me about CleanupCrew",
            "Upcoming events",
            "How to volunteer",
            "Environmental tips"
        ]
    };

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            showMessage(welcomeMessage, 'bot');
        }
    });

    // Close chat window
    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // Handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            showMessage({ text: message }, 'user');
            handleUserMessage(message);
            chatInput.value = '';
        }
    });

    // Quick action buttons
    quickActions.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.textContent.trim();
            showMessage({ text: message }, 'user');
            handleUserMessage(message);
        });
    });

    // Show message in chat
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'items-start space-x-3'} message-appear`;
        
        let content = '';
        if (type === 'bot') {
            content = `
                <div class="flex items-start space-x-2 max-w-[80%]">
                    <div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop" alt="Bot" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <div class="bg-white rounded-lg rounded-tl-none p-3 text-gray-700 shadow-sm">
                            ${message.text}
                        </div>
                        ${message.quickReplies ? `
                            <div class="mt-2 flex flex-wrap gap-2">
                                ${message.quickReplies.map(reply => `
                                    <button class="quick-reply px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm hover:bg-sky-100 transition-colors font-medium">
                                        ${reply}
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}
                        ${message.webpage ? `
                            <div class="webpage-preview mt-2">
                                <iframe src="${message.webpage}" title="Webpage Preview" class="w-full h-48 rounded-lg border border-gray-200"></iframe>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="max-w-[80%]">
                    <div class="bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm">
                        ${message.text}
                    </div>
                </div>
            `;
        }
        
        messageDiv.innerHTML = content;
        chatMessages.appendChild(messageDiv);
        
        // Trigger animation
        setTimeout(() => {
            messageDiv.classList.remove('opacity-0', 'translate-y-2');
        }, 50);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add click handlers for quick replies
        if (type === 'bot' && message.quickReplies) {
            messageDiv.querySelectorAll('.quick-reply').forEach(button => {
                button.addEventListener('click', () => {
                    const reply = button.textContent.trim();
                    showMessage({ text: reply }, 'user');
                    handleUserMessage(reply);
                });
            });
        }

        // Show response rating for bot messages
        if (type === 'bot') {
            responseRating.classList.remove('hidden');
        }
    }

    // Format message text (convert newlines to <br> and handle lists)
    function formatMessage(text) {
        return text
            .replace(/\n/g, '<br>')
            .replace(/•/g, '&bull;')
            .replace(/- /g, '&bull; ');
    }

    // Handle user messages
    async function handleUserMessage(message) {
        // Show typing indicator
        const loadingDiv = showLoading();

        try {
            // First, check if the message is a question that matches our database
            const qaMatch = findAnswerFromDatabase(message);
            if (qaMatch) {
                removeLoading(loadingDiv);
                
                // Generate quick replies based on the category
                let quickReplies = [];
                if (qaMatch.category === 'general') {
                    quickReplies = ['What types of cleanup events are there?', 'How do I register for an event?', 'What impact do cleanup events have?'];
                } else if (qaMatch.category === 'events') {
                    quickReplies = ['How often are cleanup events held?', 'What should I bring to a cleanup event?', 'Can I organize my own cleanup event?'];
                } else if (qaMatch.category === 'registration') {
                    quickReplies = ['Can I bring friends or family to events?', 'Do I need experience to participate?', 'What happens if I need to cancel my registration?'];
                } else if (qaMatch.category === 'impact') {
                    quickReplies = ['How does CleanupCrew measure its impact?', 'What happens to the waste collected during cleanups?', 'How can I maximize my environmental impact?'];
                } else if (qaMatch.category === 'environmental') {
                    quickReplies = ['How does plastic pollution affect marine life?', 'What is microplastic and why is it concerning?', 'How does litter affect water quality?'];
                } else if (qaMatch.category === 'volunteering') {
                    quickReplies = ['Can I earn community service hours through CleanupCrew?', 'Are there opportunities for long-term volunteering?', 'How can I get more involved beyond participating in events?'];
                } else if (qaMatch.category === 'donations') {
                    quickReplies = ['How are donations used?', 'Can I sponsor a specific event?', 'Is CleanupCrew a nonprofit organization?'];
                } else {
                    quickReplies = ['Tell me more', 'Ask another question', 'Find Events'];
                }
                
                showMessage({
                    text: `
                        <div class="space-y-3">
                            <p class="text-gray-700"><strong>Q: ${qaMatch.question}</strong></p>
                            <p class="text-gray-700">${qaMatch.answer}</p>
                        </div>
                    `,
                    quickReplies: quickReplies
                }, 'bot');
                return;
            }
            
            // Check if it's an AI query
            if (message.toLowerCase().includes('ask ai') || 
                message.toLowerCase().includes('tell me about') || 
                message.toLowerCase().includes('how can i') || 
                message.toLowerCase().includes('what are') || 
                message.toLowerCase().includes('explain')) {
                
                // Check if API toggle is enabled
                const useAPI = apiToggle && apiToggle.checked;
                
                // Get AI response from API or local function
                let aiResponse;
                if (useAPI) {
                    aiResponse = await callChatAPI(message);
                } else {
                    aiResponse = await getAIResponse(message);
                }
                
                removeLoading(loadingDiv);
                showMessage(aiResponse, 'bot');
                return;
            }
            
            // Check if it's a data query
            if (message.toLowerCase().includes('weather') || 
                message.toLowerCase().includes('news') || 
                message.toLowerCase().includes('tips') || 
                message.toLowerCase().includes('search') || 
                message.toLowerCase().includes('data') || 
                message.toLowerCase().includes('show me') || 
                message.toLowerCase().includes('display') || 
                message.toLowerCase().includes('open') || 
                message.toLowerCase().includes('visit')) {
                
                // Get external data
                const externalData = await fetchExternalData(message);
                removeLoading(loadingDiv);
                
                // Process and display the data
                if (externalData.type === 'weather') {
                    const weather = externalData.data;
                    showMessage({
                        text: `
                            <div class="space-y-3">
                                <h3 class="font-bold text-lg">Weather in ${message.match(/in\s+([a-zA-Z\s]+)/i) ? 
                                    message.match(/in\s+([a-zA-Z\s]+)/i)[1].trim() : 'Jalandhar'}</h3>
                                <div class="flex items-center space-x-4">
                                    <div class="text-4xl font-bold text-sky-600">${weather.temperature}°C</div>
                                    <div class="text-gray-600">${weather.condition}</div>
                                </div>
                                <div class="grid grid-cols-2 gap-2 text-sm">
                                    <div class="flex items-center space-x-2">
                                        <i class="fas fa-tint text-sky-500"></i>
                                        <span>Humidity: ${weather.humidity}%</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <i class="fas fa-wind text-sky-500"></i>
                                        <span>Wind: ${weather.windSpeed} km/h</span>
                                    </div>
                                </div>
                            </div>
                        `,
                        quickReplies: ['Weather tomorrow', 'Weather forecast', 'Weather alerts']
                    }, 'bot');
                } else if (externalData.type === 'news') {
                    const news = externalData.data;
                    let newsHtml = '<div class="space-y-3"><h3 class="font-bold text-lg">Latest Environmental News</h3>';
                    
                    news.forEach(item => {
                        newsHtml += `
                            <div class="border-l-4 border-sky-500 pl-3 py-1">
                                <h4 class="font-semibold">${item.title}</h4>
                                <p class="text-sm text-gray-600">${item.summary}</p>
                                <div class="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>${item.source}</span>
                                    <span>${item.date}</span>
                                </div>
                            </div>
                        `;
                    });
                    
                    newsHtml += '</div>';
                    
                    showMessage({
                        text: newsHtml,
                        quickReplies: ['More news', 'News about recycling', 'News about climate change']
                    }, 'bot');
                } else if (externalData.type === 'tips') {
                    const tips = externalData.data;
                    let tipsHtml = '<div class="space-y-3"><h3 class="font-bold text-lg">Environmental Tips</h3>';
                    
                    tips.forEach(category => {
                        tipsHtml += `
                            <div class="mb-3">
                                <h4 class="font-semibold text-sky-600">${category.category}</h4>
                                <ul class="list-disc pl-5 space-y-1">
                                    ${category.tips.map(tip => `<li>${tip}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    });
                    
                    tipsHtml += '</div>';
                    
                    showMessage({
                        text: tipsHtml,
                        quickReplies: ['More tips', 'Tips for recycling', 'Tips for saving water']
                    }, 'bot');
                } else if (externalData.type === 'search') {
                    const results = externalData.data;
                    let searchHtml = '<div class="space-y-3"><h3 class="font-bold text-lg">Search Results</h3>';
                    
                    results.forEach(result => {
                        searchHtml += `
                            <div class="mb-3">
                                <h4 class="font-semibold text-sky-600">${result.title}</h4>
                                <p class="text-sm">${result.snippet}</p>
                                <a href="${result.url}" target="_blank" class="text-xs text-sky-500 hover:underline">Read more</a>
                            </div>
                        `;
                    });
                    
                    searchHtml += '</div>';
                    
                    showMessage({
                        text: searchHtml,
                        quickReplies: ['Search for more', 'Search for recycling', 'Search for climate change']
                    }, 'bot');
                } else if (externalData.type === 'environmentalData') {
                    const data = externalData.data;
                    let dataHtml = '<div class="space-y-3"><h3 class="font-bold text-lg">Environmental Statistics</h3>';
                    
                    for (const category in data) {
                        dataHtml += `
                            <div class="mb-3">
                                <h4 class="font-semibold text-sky-600">${category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h4>
                                <ul class="list-disc pl-5 space-y-1">
                                    ${Object.entries(data[category]).map(([key, value]) => `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    }
                    
                    dataHtml += '</div>';
                    
                    showMessage({
                        text: dataHtml,
                        quickReplies: ['More statistics', 'Statistics about recycling', 'Statistics about climate change']
                    }, 'bot');
                } else if (externalData.type === 'webpage') {
                    const webpage = externalData.data;
                    
                    showMessage({
                        text: `
                            <div class="space-y-3">
                                <h3 class="font-bold text-lg">${webpage.title}</h3>
                                <p class="text-sm">${webpage.description}</p>
                            </div>
                        `,
                        webpage: webpage.url,
                        quickReplies: ['Show another page', 'Back to search', 'More information']
                    }, 'bot');
                } else {
                    // Default response for unrecognized data types
                    removeLoading(loadingDiv);
                    const response = findResponse(message);
                    showMessage({
                        text: response,
                        quickReplies: ['Find Events', 'How to Register', 'Contact Support']
                    }, 'bot');
                }
            } else {
                // Default chatbot response
                removeLoading(loadingDiv);
                const response = findResponse(message);
                
                // Determine quick replies based on the context
                let quickReplies = [];
                if (response.includes("upcoming cleanup events")) {
                    quickReplies = ["View all events", "Search by location", "Filter by date"];
                } else if (response.includes("registration")) {
                    quickReplies = ["Start registration", "View requirements", "Contact support"];
                } else if (response.includes("support")) {
                    quickReplies = ["Email support", "Call support", "FAQ"];
                } else {
                    quickReplies = ["Find Events", "How to Register", "Contact Support"];
                }

                showMessage({
                    text: response,
                    quickReplies: quickReplies
                }, 'bot');
            }
        } catch (error) {
            console.error('Error handling message:', error);
            removeLoading(loadingDiv);
            showMessage({
                text: "I'm having trouble processing your request right now. Please try again later or ask a different question.",
                quickReplies: ['Try again', 'Ask something else', 'Contact support']
            }, 'bot');
        }
    }

    // Show loading indicator
    function showLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'flex items-start space-x-3 message-appear typing-indicator';
        loadingDiv.innerHTML = `
            <div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop" alt="Bot" class="w-full h-full object-cover">
            </div>
            <div class="bg-white rounded-lg rounded-tl-none p-3 text-gray-700 shadow-sm">
                <div class="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `;
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return loadingDiv;
    }

    // Remove loading indicator
    function removeLoading(loadingDiv) {
        if (loadingDiv && loadingDiv.parentNode) {
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
    }
}); 