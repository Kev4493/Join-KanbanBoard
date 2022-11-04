async function initContacts() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    activeContactsNavLink();
    showAllContacts();
}

let allInitials = [];

let allContacts = [
    {
        'name': 'Kristian Huptas',
        'email': 'kristian.huptas@icloud.com',
        'phone': '+49 4584 978 22 6'
    },
    {
        'name': 'Kevin Wagner',
        'email': 'kevin.wagner@icloud.com',
        'phone': '+49 5646 684 87 3'
    },
    {
        'name': 'Gergana Ivanova',
        'email': 'gergana.ivanova@icloud.com',
        'phone': '+49 3153 776 21 8'
    }
]


function getInitial() {
    let allNames = [];

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
    console.log(allInitials);
}


function showAllContacts() {
    getInitial();

    let contactsNavContainer = document.getElementById('contacts-nav-container');

    for (let i = 0; i < allInitials.length; i++) {
        // contactsNavContainer.innerHTML = '';
        contactsNavContainer.innerHTML += renderContactBoxes(i);
    }
}


function renderContactBoxes(i) {
    return /*html*/ `
        <div id="contact-box${i}" class="contact-box">
            <div class="initial-section">
                <p>${allInitials[i]}</p>
            </div>
            <hr>
            <div id="contact-box" class="contact-section">
                <p>Name</p>
                <p>Email</p>
            </div>
        </div>
    `;
}


function activeContactsNavLink() {
    document.getElementById('contacts-link').classList.add('active-link')
}