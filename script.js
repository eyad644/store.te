function navigateToPage(platform) {
    window.location.href = platform + ".html";
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    
    if (messageText === '') {
        alert('يرجى كتابة رسالة.');
        return;
    }

    const chatBox = document.getElementById('chat-box');
    
    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;
    messageElement.className = 'chat-message';
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // التمرير إلى الأسفل

    messageInput.value = ''; // مسح خانة النص
}
