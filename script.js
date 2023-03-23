// NAME     SURNAME    ROLE                      IMAGE
// Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
// Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
// Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
// Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
// Scott    Estrada	Developer	              scott-estrada-developer.jpg
// Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg

const employees = [
    {
        name : 'Giovanni Jacopo',
        surname : 'Speranza',
        role: 'Founder & Ceo',
        image: './img/Ceo.jpeg'
    },
    {
        name : 'Emanuele',
        surname : 'Reppucci',
        role: 'Co-Founder & CFO',
        image: './img/CFO.jpeg'
    },
    {
        name : 'Antonio',
        surname : 'Speranza',
        role: 'Co-Founder & Product Manager',
        image: './img/ProductManager.jpeg'
    },
    {
        name : 'Elon',
        surname : 'Musk',
        role: 'Head of Engineering',
        image: './img/HeadofEngineering.jpg'
    },
    {
        name : 'Sam',
        surname : 'Altman',
        role: 'Senior Developer',
        image: './img/seniordeveloper.jpg'
    },
    {
        name : 'Sam',
        surname : 'Bankman',
        role: 'Head of Scamming',
        image: './img/headofscam.jpg'
    },

]

const cardContainer = document.getElementById('card-container');

function printCard(){
    let cards = [];
    employees.forEach((card, index )=> {
        let newDiv = document.createElement('div');
        newDiv.className = 'card gs-card mb-5'
        newDiv.innerHTML = `
        <img class="h-75" src="${card.image}" alt="">
        <h3 class="text-center ">${card.name} ${card.surname}</h3>
        <small class="text-center">${card.role}</small>
        `;
        cards.push(newDiv);
    });

    if(cards){
        cards.forEach(card=>{
            cardContainer.appendChild(card);
        })
    }
    
    
}

printCard()