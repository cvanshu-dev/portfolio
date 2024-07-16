
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    
  
   

    Email.send({
        SecureToken: "3a198c51-4702-473a-9810-c65168c06555",
        To : 'shivanshu4755@gmail.com',
        From : "shivanshu4755@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );

}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("Keyup", () => {
            checkEmail();

        });



        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");

            }

        });
    }
function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorTxtEmail = document.querySelector(".error-txt email");
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
  }  
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        
        sendEmail();

        form.reset();
        return false;
    }

   
})























function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

let strings = ["Shivanshu Mishra", "Web Developer", "Video Editor", "Graphic Designer"];

if (isMobile()) {
    strings[0] = "Shivanshu";
}

var typed = new Typed(".text", {
    strings: strings,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}






let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};













