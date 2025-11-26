// TERMINAL TYPING INTRO
const terminalLines = [
    "ACCESSING POLICE DATABASE...",
    "Initializing CCTV feed...",
    "Loading suspect fingerprints...",
    "Decrypting criminal files...",
    "Analyzing radar...",
    "System Online ✔",
    "",
    "Launching Main Interface..."
];

let terminalIndex = 0;
const terminalText = document.getElementById("terminal-text");

function typeTerminalLine() {
    if (terminalIndex < terminalLines.length) {
        terminalText.innerHTML += terminalLines[terminalIndex] + "\n";
        terminalIndex++;
        setTimeout(typeTerminalLine, 400);
    } else {
        setTimeout(() => {
            document.getElementById("terminal-screen").classList.add("hidden");
            document.getElementById("app").classList.remove("hidden");
        }, 800);
    }
}

typeTerminalLine();

// SIREN SOUND
const siren = document.getElementById("siren-sound");
let sirenPlaying = false;

// RED ALERT BUTTON
const alertBtn = document.getElementById("trigger-alert");
const alertOverlay = document.getElementById("alert-overlay");

alertBtn.addEventListener("click", () => {
    alertOverlay.classList.toggle("hidden");
    if (!sirenPlaying) {
        siren.loop = true;
        siren.play();
        sirenPlaying = true;
    } else {
        siren.pause();
        siren.currentTime = 0;
        sirenPlaying = false;
    }
});

// AUTO-TYPING SUSPECT REPORT
const reportText = document.getElementById("report-text");
const reportLines = [
    "SUSPECT DATABASE REPORT:",
    "---------------------------------",
    "1. FAIZAN - Laughing in class by police officer - Reward ₹1,00,000 - Contact +91 1234567890",
    "2. AMAN - Laughing in class by police officer - Reward ₹1,00,000 - Contact +91 1234567890",
    "---------------------------------",
    "All suspects are armed with laughter. Approach with caution!"
];

let reportIndex = 0;
function typeReport() {
    if (reportIndex < reportLines.length) {
        reportText.innerHTML += reportLines[reportIndex] + "\n";
        reportIndex++;
        setTimeout(typeReport, 500);
    }
}

// Start typing report after 3 seconds
setTimeout(typeReport, 3000);

// Optional: Zoom face animation handled in CSS

// Optional: Radar animation handled in CSS

// Optional: CCTV scan handled in CSS

// Fingerprint scan animation handled in CSS

// Loading bars handled in CSS
