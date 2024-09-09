const firebaseConfig = {
  apiKey: "AIzaSyBFRhqrpdXPNhl_92s3QUU9Stl550Si-tU",

  authDomain: "contactform-4172c.firebaseapp.com",

  databaseURL: "https://contactform-4172c-default-rtdb.firebaseio.com",

  projectId: "contactform-4172c",

  storageBucket: "contactform-4172c.appspot.com",

  messagingSenderId: "243923566787",

  appId: "1:243923566787:web:24d8abb5649dcca4db6276",

  measurementId: "G-H4FKPCFGTT",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference of database

const ContactForm = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElement("name");
  var email = getElement("email");
  var subject = getElement("subject");
  var message = getElement("message");

  saveMessage(name, email, subject, message);

  document.querySelector(".sent-message").style.display = "block";

  setTimeout(() => {
    document.querySelector(".sent-message").style.display = "none";
  }, 3000);

  document.querySelector("#contactForm").reset();
}

const saveMessage = (name, email, subject, message) => {
  var NewContactForm = ContactForm.push();
  NewContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
};
const getElement = (id) => {
  return document.getElementById(id).value;
};
