const masuk = document.getElementById("masuk");
const user = document.getElementById("user");
const password = document.getElementById("password");

masuk.onclick = () => {
    if (user.value == "bip" && password.value == "Production_123") {
        document.location.href = "laporan.html";
    } else {
        alert("dalam hitunagan ke tiga akan meledak")
    }
}