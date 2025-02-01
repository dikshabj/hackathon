// Text-to-Speech function


function speakText() {
    const text = document.getElementById("constantText").textContent;

    if (!text) {
        alert("No text found!");
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "hi-IN"; // Change to "hi-IN" for Hindi
    window.speechSynthesis.speak(speech);
}






