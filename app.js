const masuk = document.getElementById("masuk");
const user = document.getElementById("user");
const password = document.getElementById("password");

masuk.onclick = () => {
    if (user.value == "bip" && password.value == "Production_123") {
        localStorage.setItem("user", "bip");
        const host = window.location.origin
        window.location.href = host.includes('127') ? "/laporan.html" : "https://bipproduction.github.io/production/laporan.html";
    } else {
        alert("dalam hitunagan ke tiga akan meledak")
    }
}