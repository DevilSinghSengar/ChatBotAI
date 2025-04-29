// API Configuration
const apiConfig = {
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
    apiKey: 'AIzaSyAGA_QL6bRo6HBlw4EIIRHXMDkMpTNwEKM',
    model: 'gemini-1.5-flash',
    maxTokens: 1000
};

// Test API connection
async function testAPI() {
    try {
        console.log('Testing API connection...');
        const testQuery = "Hello, can you confirm you're working?";
        const response = await fetch(`${apiConfig.endpoint}?key=${apiConfig.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: testQuery
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.candidates && data.candidates[0]) {
            console.log('API Key is working correctly!');
            return true;
        } else {
            console.error('API Response format unexpected:', data);
            return false;
        }
    } catch (error) {
        console.error('API Test Error:', error);
        return false;
    }
}

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
                        text: `You are an AI assistant for CleanupCrew, an environmental organization focused on community cleanups and environmental education. 
                        Your personality traits:
                        - Friendly and approachable
                        - Passionate about environmental conservation
                        - Knowledgeable about local environmental issues
                        - Encouraging and supportive
                        - Practical and solution-oriented
                        
                        Your expertise includes:
                        - Community cleanup events
                        - Recycling and waste management
                        - Environmental education
                        - Volunteer coordination
                        - Local environmental initiatives
                        
                        Response guidelines:
                        - Keep responses concise (under 200 words)
                        - Use bullet points for lists
                        - Include specific examples when possible
                        - Suggest relevant CleanupCrew programs
                        - End with a call to action or next steps
                        
                        Current context:
                        - CleanupCrew organizes weekly community cleanups
                        - Focus areas: parks, beaches, and urban areas
                        - Educational programs for schools and businesses
                        - Volunteer rewards program
                        - Partnerships with local recycling centers
                        
                        User query: ${query}`
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return "I'm having trouble connecting to the AI service right now. Please try again later.";
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    // Test API connection on page load
    const apiWorking = await testAPI();
    if (!apiWorking) {
        console.error('API connection test failed. Please check your API key and network connection.');
        // You might want to show a user-friendly error message here
    }

    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatToggle = document.getElementById('chat-toggle');
    const quickActions = document.querySelectorAll('.quick-action');

    // Welcome message
    const welcomeMessage = {
        text: "👋 Hello! I'm your environmental assistant. I can help you with:\n\n• Finding cleanup events\n• Recycling information\n• Environmental tips\n• Volunteering opportunities\n\nWhat would you like to know?",
        quickReplies: [
            "Show upcoming events",
            "Recycling guidelines",
            "Environmental tips"
        ]
    };

    // Show welcome message on load
    showMessage(welcomeMessage, 'bot');

    // Handle form submission
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            showMessage({ text: message }, 'user');
            await handleUserMessage(message);
            chatInput.value = '';
        }
    });

    // Handle quick action buttons
    quickActions.forEach(button => {
        button.addEventListener('click', async () => {
            const action = button.querySelector('h3').textContent;
            showMessage({ text: action }, 'user');
            await handleUserMessage(action);
        });
    });

    // Show message in chat
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'} message-enter`;
        
        let content = '';
        if (type === 'bot') {
            content = `
                <div class="flex items-start space-x-3 max-w-[80%]">
                    <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-leaf text-indigo-600"></i>
                    </div>
                    <div class="flex-1">
                        <div class="message-card rounded-2xl p-4 text-indigo-900 shadow-sm">
                            ${formatMessage(message.text)}
                        </div>
                        ${message.quickReplies ? `
                            <div class="mt-3 flex flex-wrap gap-2">
                                ${message.quickReplies.map(reply => `
                                    <button class="quick-reply px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm hover:bg-indigo-100 transition-colors font-medium">
                                        ${reply}
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="max-w-[80%]">
                    <div class="card-gradient text-white rounded-2xl p-4 shadow-sm">
                        ${formatMessage(message.text)}
                    </div>
                </div>
            `;
        }
        
        messageDiv.innerHTML = content;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add click handlers for quick replies
        if (type === 'bot' && message.quickReplies) {
            messageDiv.querySelectorAll('.quick-reply').forEach(button => {
                button.addEventListener('click', async () => {
                    const reply = button.textContent.trim();
                    showMessage({ text: reply }, 'user');
                    await handleUserMessage(reply);
                });
            });
        }
    }

    // Format message text
    function formatMessage(text) {
        return text
            .replace(/\n/g, '<br>')
            .replace(/•/g, '&bull;')
            .replace(/- /g, '&bull; ');
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'flex justify-start typing-indicator';
        typingDiv.innerHTML = `
            <div class="flex items-center space-x-3 max-w-[80%]">
                <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-leaf text-indigo-600"></i>
                </div>
                <div class="message-card rounded-2xl p-4">
                    <div class="flex space-x-1">
                        <span class="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        <span class="w-2 h-2 bg-indigo-400 rounded-full" style="animation-delay: 0.2s"></span>
                        <span class="w-2 h-2 bg-indigo-400 rounded-full" style="animation-delay: 0.4s"></span>
                    </div>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = chatMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Handle user messages
    async function handleUserMessage(message) {
        // Show typing indicator
        showTypingIndicator();

        try {
            // Check if user is asking about creators
            if (message.toLowerCase().includes('who created you') || 
                message.toLowerCase().includes('who made you') || 
                message.toLowerCase().includes('who developed you')) {
                removeTypingIndicator();
                showMessage({
                    text: "I was created by a talented team of developers from CleanupCrew:\n\n" +
                          "• Piyush Singh \n" +
                          "• Arman Mev \n" +
                          "• Ankita \n\n" +
                          "They worked together to build this AI assistant to help promote environmental awareness and community cleanup initiatives.",
                    quickReplies: [
                        "Tell me more about CleanupCrew",
                        "What can you help me with?",
                        "Show upcoming events"
                    ]
                }, 'bot');
                return;
            }

            // Call the Gemini API
            const response = await callChatAPI(message);
            
            // Remove typing indicator
            removeTypingIndicator();
            
            // Show the response
            showMessage({
                text: response,
                quickReplies: [
                    "Tell me more",
                    "How can I help?",
                    "What events are coming up?"
                ]
            }, 'bot');
        } catch (error) {
            console.error('Error handling user message:', error);
            removeTypingIndicator();
            showMessage({
                text: "I'm having trouble processing your request. Please try again later.",
                quickReplies: ['Try again', 'Contact Support']
            }, 'bot');
        }
    }
}); 