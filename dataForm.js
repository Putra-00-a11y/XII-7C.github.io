console.log(`Hello Putra!`);
let username = document.getElementById("userData");
let password = document.getElementById("passData");
let submitButton = document.getElementById("buttonSubmit");
let buttonBackSecure = document.getElementById("buttonBackSecure");

    console.log(username.value);
    console.log(password.value);
    localStorage.setItem("DataUser", username.value);
    localStorage.setItem("DataPass", password.value);
    window.location.assign = "hallClass.html";

function buttonSubmit0() {
    if (username.value == username.value && password.value == "002200404Not") {
        console.log(`Input Username : `, username.value);
        console.log(`Input Password : `, password.value);
        console.log(`Login Diterima..`);
        localStorage.setItem("DataPass", password.value);
        alert(`Halo ${username.value}, Selamat Datang!`);
        window.location.href = "hallClass.html";
    }

    else {
        console.log(`Login Ditolak!`);
        alert(`Kata [password] Salah! coba lagi..`);
    }
    
    if (localStorage.getItem("DataPass") == "002200404NOT") {
        console.log(`Logging Berhasil..`);
    }
    else {
        console.log(`Password Salah!`);
    }
}

function buttonSecure() {
    window.location.assign = "formLogin.html";
    alert(`You Back..`);
    window.location.href = "formLogin.html";
};