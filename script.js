// Function to send text input to backend and get the mood
async function detectMood(userInput) {
    const response = await fetch("http://localhost:3000/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput }),
    });

    const data = await response.json();
    
    // Display mood in HTML
    document.getElementById("result").innerText = `Detected Mood: ${data.mood}`;
}

// Event listener for the "Get Start" button
document.querySelector(".join-btn").addEventListener("click", () => {
    const userInput = prompt("How are you feeling today?");
    if (userInput) detectMood(userInput);
});