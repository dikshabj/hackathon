// Text-to-Speech function
// Function to convert text to speech
function speakText(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "hi-IN"; // Hindi language
    speech.pitch = 1;
    speech.rate = 1;
    speechSynthesis.speak(speech);
}

// Attach event listener to all buttons
document.querySelectorAll(".speak-btn").forEach(button => {
    button.addEventListener("click", function() {
        let text = this.getAttribute("data-text"); // Get text from data-text attribute
        speakText(text);
    });
});

//form1





