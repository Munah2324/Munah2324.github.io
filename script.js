async function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    var userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    // Fetch bot response asynchronously
    var botResponse = await getBotResponse(userInput);

    var botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.textContent = "Bot: " + botResponse;
    chatBox.appendChild(botMessage);

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    switch (userInput) {
        case "hi":
        case "hello":
            return "Hi there! How can I assist you today?";
        case "how are you?":
            return "I'm great, thanks for asking!";
        case "what is your name?":
            return "My name is Sam, how can I assist you today?";
        case "what is in the library?":
            return "In the library, you can find a vast collection of books, academic journals, magazines, and other reference materials for your research and studies. There are also study spaces, computer facilities, printers, and photocopiers available for students to use. Additionally, the library may offer services such as research assistance, interlibrary loan services, and access to online databases and e-books. Don't forget to check out any special collections or archives that the library may have as well!";
        case "where is food?":
            return "You can get food  at the cafeteria using your meal ticket. Additionally, there are shops located in various buildings throughout the campus where you can purchase food, snacks and drinks. If you're looking for a quick bite, there are also food kiosk near the hostels.";
        case "no meal ticket":
            return "To get a meal ticket at the cafeteria, you will need to bring your student receipt, a passport photograph and your student ID card. The cafeteria is located beside Queen Esther activity hall. Once you have your meal ticket, you can enjoy a good meal at the cafeteria. Let me know if you need any more information or help!";
        default:
            return "I'm sorry, I didn't understand that.";
    }
}
