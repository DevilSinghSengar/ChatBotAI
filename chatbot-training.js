// Chatbot Training Data
const chatbotTrainingData = {
    // General Queries
    generalQueries: [
        {
            intent: "greeting",
            patterns: [
                "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
                "hi there", "hello there", "greetings", "howdy"
            ],
            responses: [
                "Hello! Welcome to CleanupCrew! How can I assist you today?",
                "Hi there! I'm here to help you with cleanup events and volunteering.",
                "Welcome! How can I help you make our community cleaner?"
            ]
        },
        {
            intent: "goodbye",
            patterns: [
                "bye", "goodbye", "see you later", "see you", "have a good day",
                "catch you later", "take care", "good night"
            ],
            responses: [
                "Goodbye! Thank you for your interest in keeping our community clean!",
                "Have a great day! Don't forget to check our upcoming events!",
                "Take care! Together we can make a difference!"
            ]
        },
        {
            intent: "thanks",
            patterns: [
                "thank you", "thanks", "appreciate it", "thanks a lot", "thank you so much",
                "thanks for the help", "that's helpful"
            ],
            responses: [
                "You're welcome! Let me know if you need anything else.",
                "Happy to help! Together we make our community better.",
                "Glad I could help! Don't hesitate to ask more questions."
            ]
        }
    ],

    // Event Related Queries
    eventQueries: [
        {
            intent: "findEvents",
            patterns: [
                "what events are coming up", "show me upcoming events", "when is the next cleanup",
                "are there any events near me", "upcoming cleanup events", "where can I volunteer",
                "cleanup schedule", "next event", "event calendar", "weekend cleanups"
            ],
            responses: [
                "Here are our upcoming cleanup events:\n1. Model Town Park Cleanup - March 15\n2. Burlton Park Cleanup - March 20\n3. Nikku Park Restoration - March 25",
                "We have several events planned! Would you like to:\n1. View all events\n2. Search by location\n3. Filter by date",
                "I can help you find the perfect event! Would you like to see:\n- Events this week\n- Events this month\n- Events in your area"
            ]
        },
        {
            intent: "eventDetails",
            patterns: [
                "tell me more about", "what should I bring", "event requirements",
                "what time does it start", "how long is the event", "event location",
                "parking details", "what's provided", "event coordinator"
            ],
            responses: [
                "For our cleanup events, we provide:\n- Safety equipment\n- Cleaning supplies\n- Water and snacks\nPlease bring:\n- Comfortable clothes\n- Sturdy shoes\n- Sunscreen",
                "Event details:\n- Duration: 2-3 hours\n- Meeting point: Main entrance\n- Coordinator will be present\n- Training provided\n- All equipment supplied",
                "Important event information:\n- Sign-in starts 30 minutes before\n- Parking available\n- Bring water bottle\n- Wear weather-appropriate clothing"
            ]
        }
    ],

    // Registration and Volunteering
    registrationQueries: [
        {
            intent: "howToRegister",
            patterns: [
                "how do I sign up", "how to register", "become a volunteer",
                "join cleanup crew", "volunteer registration", "sign up process",
                "registration steps", "how to join", "volunteer application"
            ],
            responses: [
                "To register as a volunteer:\n1. Click 'Sign Up' button\n2. Fill in your details\n3. Choose your interests\n4. Verify your email\n5. Start volunteering!",
                "Registration is easy! Would you like to:\n1. Start registration now\n2. Learn about requirements\n3. View volunteer benefits",
                "Join us in 3 simple steps:\n1. Create an account\n2. Complete your profile\n3. Sign up for events"
            ]
        },
        {
            intent: "volunteerRequirements",
            patterns: [
                "what are the requirements", "can anyone volunteer", "age requirement",
                "do I need experience", "volunteer qualifications", "what do I need to volunteer",
                "volunteer eligibility", "who can participate"
            ],
            responses: [
                "Volunteer requirements:\n- Minimum age: 16 years\n- Parental consent (under 18)\n- No experience needed\n- Must attend safety briefing",
                "Anyone can volunteer! We just need:\n- Valid ID\n- Signed waiver\n- Attendance at orientation\n- Commitment to safety",
                "To volunteer, you should:\n- Be 16 or older\n- Have reliable transportation\n- Commit to safety guidelines\n- Attend one training session"
            ]
        }
    ],

    // Environmental Education
    educationalQueries: [
        {
            intent: "environmentalImpact",
            patterns: [
                "why is cleanup important", "environmental impact", "benefits of cleaning",
                "how does this help", "why should I volunteer", "community impact",
                "environmental benefits", "importance of cleanups"
            ],
            responses: [
                "Cleanup efforts help:\n- Protect wildlife\n- Prevent water pollution\n- Beautify communities\n- Promote recycling\n- Create safer spaces",
                "Your participation matters because:\n- Reduces pollution\n- Protects ecosystems\n- Inspires others\n- Builds community\n- Creates lasting change",
                "Environmental benefits include:\n- Cleaner water systems\n- Healthier wildlife\n- Reduced pollution\n- Better air quality\n- Sustainable communities"
            ]
        },
        {
            intent: "recyclingTips",
            patterns: [
                "recycling tips", "how to recycle", "waste sorting", "recycling guide",
                "what can be recycled", "recycling rules", "proper disposal",
                "waste management tips"
            ],
            responses: [
                "Recycling tips:\n1. Clean items before recycling\n2. Sort properly\n3. Check local guidelines\n4. Avoid contamination\n5. Reduce and reuse first",
                "Quick recycling guide:\n- Rinse containers\n- Remove labels when required\n- Flatten boxes\n- Keep materials separate\n- Check plastic numbers",
                "Remember these recycling rules:\n1. No food contamination\n2. Sort by material type\n3. Break down boxes\n4. Clean containers\n5. When in doubt, check!"
            ]
        }
    ],

    // Support and Contact
    supportQueries: [
        {
            intent: "contactSupport",
            patterns: [
                "how can I contact you", "need help", "support contact",
                "who do I talk to", "contact information", "reach out",
                "contact details", "help desk", "support team"
            ],
            responses: [
                "Contact us through:\n- Email: contact@cleanupcrew.com\n- Phone: 9933221144\n- Office: Lovely Professional University",
                "Need assistance? Reach us via:\n1. Contact form on website\n2. Email: contact@cleanupcrew.com\n3. Phone: 9933221144",
                "Get in touch:\n- Send us an email\n- Call our helpline\n- Visit our office\n- Use the contact form"
            ]
        },
        {
            intent: "reportIssue",
            patterns: [
                "report a problem", "something's wrong", "issue report",
                "technical problem", "bug report", "website issue",
                "app not working", "error message"
            ],
            responses: [
                "To report an issue:\n1. Describe the problem\n2. Include any error messages\n3. Provide your contact info\n4. We'll respond within 24 hours",
                "Sorry you're having trouble! Please:\n- Take a screenshot\n- Describe the issue\n- Include your device info\n- Send to our support team",
                "Report issues through:\n1. Support ticket system\n2. Email: support@cleanupcrew.com\n3. In-app feedback form"
            ]
        }
    ],

    // Safety and Guidelines
    safetyQueries: [
        {
            intent: "safetyGuidelines",
            patterns: [
                "safety rules", "cleanup safety", "safety guidelines",
                "how to stay safe", "safety precautions", "safety measures",
                "safety protocol", "safety requirements"
            ],
            responses: [
                "Safety guidelines:\n1. Wear protective gear\n2. Use proper tools\n3. Stay hydrated\n4. Work in pairs\n5. Follow coordinator instructions",
                "For your safety:\n- Wear gloves and masks\n- Use grabbers for trash\n- Avoid hazardous materials\n- Stay visible\n- Report dangers",
                "Safety first!\n1. Wear safety gear\n2. Follow guidelines\n3. Stay in designated areas\n4. Report hazards\n5. Keep emergency contacts"
            ]
        },
        {
            intent: "covidSafety",
            patterns: [
                "covid precautions", "covid safety", "covid guidelines",
                "pandemic safety", "covid protocols", "health measures",
                "covid requirements", "safety during covid"
            ],
            responses: [
                "COVID-19 Safety Measures:\n- Mask required\n- Social distancing\n- Hand sanitizer provided\n- Limited group sizes\n- Health screening",
                "COVID-19 Guidelines:\n1. Wear masks\n2. Keep distance\n3. Use sanitizer\n4. Stay home if sick\n5. Follow local health guidelines",
                "During COVID-19:\n- Groups limited to 10\n- Masks mandatory\n- Equipment sanitized\n- Health checks required\n- Contact tracing in place"
            ]
        }
    ]
};

// Function to initialize chatbot with training data
function initializeChatbot() {
    // Add training data to chatbot
    for (const category in chatbotTrainingData) {
        chatbotTrainingData[category].forEach(item => {
            // Train the chatbot with patterns and responses
            item.patterns.forEach(pattern => {
                // Here you would add your chatbot training logic
                // This could involve:
                // 1. Natural Language Processing (NLP)
                // 2. Pattern matching
                // 3. Intent classification
                // 4. Response selection
                console.log(`Training pattern: ${pattern}`);
            });
        });
    }
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
    return "I'm not sure I understand. Could you please rephrase that or choose from these topics:\n- Find Events\n- How to Register\n- Safety Guidelines\n- Contact Support";
}

// Simple similarity calculation (you might want to use a more sophisticated approach)
function calculateSimilarity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Convert strings to sets of words
    const words1 = new Set(str1.split(' '));
    const words2 = new Set(str2.split(' '));
    
    // Find intersection
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    
    // Calculate Jaccard similarity
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
}

// Export the functions and data
export {
    chatbotTrainingData,
    initializeChatbot,
    findResponse
}; 