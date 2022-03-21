// Call The Feather Icon Method
window.onload = feather.replace();

// Add Class On Header When Scroll To Down
window.onscroll = () => {
    const header = document.getElementById('header-wrapper')
    const scroll = document.documentElement.scrollTop
    
    if (scroll > 0) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky")
    }
}

// Validation Track Form
let trForm = document.getElementById('track-form');
let trInput = document.getElementById('tarck-input');
let trSubmit = document.getElementById('tarck-submit');

trForm.onsubmit = function (e) {
    let trackValid = false;

    if (trInput.value !== "" && trInput.value.length <= 10) {
        trackValid = true
    }

    if (trackValid == false) {
        e.preventDefault();
        let wrapper = document.querySelector(".track-wrapper");
        let alertMass = alert("alert-error", "ri-error-warning-line", "يرجي إدخال رقم الشحنة الخاص بك");
        alertMass.classList.add("mt-2", "mb-2")
        wrapper.insertBefore(alertMass, wrapper.children[0]);
        
    }
}

function validate(input, max_length) {
    let validated = false;
    
    if (input.value !== "" && input.value.length <= max_length) {
        validated = true;
    }

    validated == false ? e.preventDefault() : true
    
}

function alert(className, classIcon, context) {
    let alertElemnet = document.createElement("div");
    let alertIcon = document.createElement("i");
    let alertText = document.createTextNode(context);
    
    alertElemnet.classList.add('alert')
    alertElemnet.classList.add(className);
    alertIcon.classList.add("alert-icon");
    alertIcon.classList.add(classIcon);

    alertElemnet.appendChild(alertIcon);
    alertElemnet.appendChild(alertText);

    return alertElemnet;

}

// Sidenav Menu Toggle
document.querySelector('.b-slide-out').onclick = function () {
    document.querySelector('#slide-out').classList.add('open');
    document.querySelector('.overlay-layout').classList.add('active');
}

document.querySelector('.overlay-layout').onclick = function () {
    this.classList.remove('active');
    document.querySelector('#slide-out').classList.remove('open');
}

// Sidenav Menu Childe List Toggle
let childeItem = document.querySelectorAll('.mobile-sidenav .has-childe');
childeItem.forEach(element => {
    element.addEventListener('click', (e) => {
        element.querySelector('.mobile-childe-list').classList.toggle('open');
        element.classList.toggle('active');
    })
});


let accItem = document.querySelectorAll('.accordion-item');
let accBtn = document.querySelectorAll('.accordion-button');

accBtn.forEach(element => {
    element.addEventListener('click', function (e) {
        let itemClass = this.parentNode.className;
        
        accItem.forEach(element => {
            element.className = 'accordion-item';
            console.log(element)
        });

        if (itemClass == 'accordion-item') {
            this.parentNode.className = 'accordion-item open';
        }

    });
});

function accordion() {
    let acsClass = this.parentNode.className;
    accItem.forEach(element => {
        element.className = 'accordion-item';
    });

    if (acsClass == 'accordion-item') {
        this.parentNode.className = 'accordionItem open';
    }
}

// let wrapper = document.querySelector(".track-wrapper");
//     wrapper.insertBefore(alertElemnet, wrapper.children[0]);
    
//     let alertClasses = ["alert", "alert-error", "alert-validate-error", "mt-2", "mb-2"];
//     alertElemnet.classList.add(...alertClasses);