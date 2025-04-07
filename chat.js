import { chatbotTrainingData, initializeChatbot, findResponse } from './chatbot-training.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot
    initializeChatbot();

    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const quickActions = document.querySelectorAll('.quick-action');

    // Welcome message
    const welcomeMessage = {
        text: "👋 Hi! Welcome to CleanupCrew! How can I assist you today?",
        quickReplies: [
            "Find Events Near Me",
            "How to Register",
            "Contact Support"
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
        messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'} transform transition-all duration-300 ease-out opacity-0 translate-y-2`;
        
        let content = '';
        if (type === 'bot') {
            content = `
                <div class="flex items-start space-x-2 max-w-[80%]">
                    <div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop" alt="Bot" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <div class="bg-white rounded-lg rounded-tl-none p-3 text-gray-700 shadow-sm">
                            ${formatMessage(message.text)}
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
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="max-w-[80%]">
                    <div class="bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm">
                        ${formatMessage(message.text)}
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
            const responseRating = document.getElementById('response-rating');
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
    function handleUserMessage(message) {
        // Show typing indicator
        showTypingIndicator();

        // Get response from chatbot
        setTimeout(() => {
            removeTypingIndicator();
            const response = findResponse(message);
            
            // Determine quick replies based on the context
            let quickReplies = [];
            if (response.includes("upcoming cleanup events")) {
                quickReplies = ["View all events", "Search by location", "Filter by date"];
            } else if (response.includes("registration")) {
                quickReplies = ["Start registration", "View requirements", "Contact support"];
            }

            showMessage({
                text: response,
                quickReplies: quickReplies
            }, 'bot');
        }, 1000 + Math.random() * 500); // Random delay between 1-1.5 seconds
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'flex justify-start transform transition-all duration-300 ease-out typing-indicator';
        typingDiv.innerHTML = `
            <div class="flex items-center space-x-2 max-w-[80%]">
                <div class="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop" alt="Bot" class="w-full h-full object-cover">
                </div>
                <div class="bg-white rounded-lg rounded-tl-none p-3 text-gray-700 shadow-sm">
                    <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
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
}); 