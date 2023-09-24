const firebaseConfig = {
    apiKey: "AIzaSyAoE5LzFSPbZq6DPOubY9epsrb1rn_61lI",
    authDomain: "portfolio-contact-form-59f53.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-59f53-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-form-59f53",
    storageBucket: "portfolio-contact-form-59f53.appspot.com",
    messagingSenderId: "197190086533",
    appId: "1:197190086533:web:87af9164ba224a85b35eec"
};


// Initialising Firebase

firebase.initializeApp(firebaseConfig);


// Referencing the Database

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var message = getElementVal('message');

    saveMessage(name, email, phone, message);

    // Enable Alert
    document.querySelector(".alert").style.display = "block";

    // Remove Alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 1500);

    // Reset the Form
    document.getElementById("contactForm").reset();
}

const saveMessage = (name, email, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        Name : name,
        EmailID : email,
        Phone : phone,
        Message : message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};