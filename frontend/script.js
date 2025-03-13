const API_URL = "http://localhost:5000";

function showForm(type) {
    document.getElementById("login-form").style.display = type === "login" ? "block" : "none";
    document.getElementById("signup-form").style.display = type === "signup" ? "block" : "none";
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="showForm('${type}')"]`).classList.add("active");
}

async function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    let response = await fetch(API_URL + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    let result = await response.json();
    document.getElementById("message").innerText = result.message || result.error;
}

async function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    let result = await response.json();
    document.getElementById("message").innerText = result.message || result.error;
}
