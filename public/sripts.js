const chatInput = document.getElementById('chatInput');
const sendMessageButton = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

sendMessageButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
