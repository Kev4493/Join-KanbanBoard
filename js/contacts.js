async function initContacts() {
    includeHTML();
    setURL('https://kanbanboard.kev-wagner.com/smallest_backend_ever');
    await loadAllTasks();
    activeContactsNavLink();
    showAllContacts();
    getInitial();
}

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


function activeContactsNavLink() {
    document.getElementById('contacts-link').classList.add('active-link')
}



let allNames = [];
let allInitials = [];

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

    console.log(allInitials);

}


function showAllContacts() {
    let contactsNavContainer = document.getElementById('contacts-nav-container');

    for (let i = 0; i < allContacts.length; i++) {
        contactsNavContainer.innerHTML = '';
        contactsNavContainer.innerHTML += renderAllContacts(i);
    }
}


function renderAllContacts(i) {
    return /*html*/ `
        <div class="contact-box">
            <div class="initial-section">
                <p>A</p>
            </div>
            <hr>
            <div class="contact-section">
                <p>Anton Mayer</p>
                <p>antonm@gmail.com</p>
            </div>
        </div>
    `;
}