async function initContacts() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    activeContactsNavLink();
    showAllContacts();
}

let allNames = [];
let allInitials = [];

let allContacts = [
    {
        'name': 'Kristian Huptas',
        'email': 'kristian.huptas@icloud.com',
        'phone': '+49 4584 978 22 6',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Kevin Wagner',
        'email': 'kevin.wagner@icloud.com',
        'phone': '+49 5646 684 87 3',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Gergana Ivanova',
        'email': 'gergana.ivanova@icloud.com',
        'phone': '+49 3153 776 21 8',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Maurice Rauffmann',
        'email': 'maurice.rauffmann@icloud.com',
        'phone': '+49 6671 557 97 0',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Delong Liang',
        'email': 'delong.liang@icloud.com',
        'phone': '+49 9641 219 34 4',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Fabio Berni',
        'email': 'fabio.berni@icloud.com',
        'phone': '+49 7233 258 47 6',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Fabio Berni',
        'email': 'fabio.berni@icloud.com',
        'phone': '+49 7233 258 47 6',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
    {
        'name': 'Fabio Berni',
        'email': 'fabio.berni@icloud.com',
        'phone': '+49 7233 258 47 6',
        'color': getRandomColor(),
        'company': 'IT Musterfirma AG'
    },
];


function addNewContact() {
    let contactName = document.getElementById('contact-name');
    let contactEmail = document.getElementById('contact-email');
    let contactPhone = document.getElementById('contact-phone');
    let contactCompany = document.getElementById('contact-company');

    contact = {
        'name': contactName.value,
        'email': contactEmail.value,
        'phone': contactPhone.value,
        'company': contactCompany.value,
        'color': getRandomColor()
    }

    allContacts.push(contact);
    showAllContacts();
    console.log('added new contact', allContacts);
}


function openNewContactDialog() {
    let contactDialog = document.getElementById('dialog');
    contactDialog.classList.remove('d-none');
}

function closeNewContactDialog() {
    let contactDialog = document.getElementById('dialog')
    contactDialog.classList.add('d-none');
}


function getInitial() {
    // Alle Namen herausfinden:
    for (let i = 0; i < allContacts.length; i++) {
        let names = allContacts[i]['name'];
        allNames.push(names);
    }

    // Anfangsbuchstaben herausfinden:
    for (let i = 0; i < allNames.length; i++) {
        let letter = allNames[i].charAt(0);
        allInitials.push(letter);
    }

    // Anfangsbuchstaben Alphabetisch sortieren:
    allInitials.sort();

    // Duplikate entfernen:
    allInitials = [...new Set(allInitials)]
}


function showAllContacts() {
    getInitial();

    let contactsNavContainer = document.getElementById('contacts-nav-container');

    for (let i = 0; i < allInitials.length; i++) {
        contactsNavContainer.innerHTML += renderContactBoxes(i);

        filterNames(i);
    }
}


function renderContactBoxes(i) {
    return /*html*/ `
        <div id="contact-box${i}" class="contact-box">
            <div class="initial-section">
                <p>${allInitials[i]}</p>
            </div>
            <hr>
            <div id="contact-section${i}" class="contact-section">
                
            </div>
        </div>
    `;
}


function filterNames(i) {
    for (let j = 0; j < allNames.length; j++) {

        if (allNames[j].charAt(0) === allInitials[i]) {
            document.getElementById(`contact-section${i}`).innerHTML += renderContactToInitials(j);
        }
    }
}


function renderContactToInitials(j) {
    return /*html*/ `
        <div onclick="renderContactDetails(${j})" class="single-contact">
            <div class="contact-circle" style="background-color: ${allContacts[j]['color']}">
                <p>${allContacts[j]['name'].split(" ").map(word => word[0]).join("")}</p>
            </div>
            <div class="contact-information">
                <p>${allContacts[j]['name']}</p>
                <p class="email">${allContacts[j]['email']}</p>
            </div>
        </div>
    `;
}


function renderContactDetails(j) {

    showDeleteContactButton();

    let contactDetailsContainer = document.getElementById('contact-detail');

    contactDetailsContainer.innerHTML = /*html*/ `
        <div class="contact-details-header">
            <div class="contact-circle-container" style="background-color: ${allContacts[j]['color']}">
                <p class="initials">${allContacts[j]['name'].split(" ").map(word => word[0]).join("")}</p>
            </div>
            <div class="contact-name-container">
                <p class="contact-name">${allContacts[j]['name']}</p>
            </div>
        </div>
        <div class="contact-information-container">
            <p>Contact Information:</p>
        </div>
        <div class="contact-email-container">
            <p class="headline">Email</p>
            <p class="mail-address">${allContacts[j]['email']}</p>
        </div>
        <div class="contact-email-container">
            <p class="headline">Phone</p>
            <p class="phone-number">${allContacts[j]['phone']}</p>
        </div>
        <div class="contact-company-container">
            <p class="headline">Company</p>
            <p class="company-name">${allContacts[j]['company']}</p>
        </div>
    `;
}


function showDeleteContactButton() {
    let deleteButton = document.getElementById('delete-button');
    deleteButton.classList.remove('d-none');
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function activeContactsNavLink() {
    document.getElementById('contacts-link').classList.add('active-link')
}