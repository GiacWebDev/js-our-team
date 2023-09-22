// PASSAGGI DA ESEGUIRE: 

// 1. creare array di oggetti con tutti i dati inseriti per ogni membro,
// 2. stampare in console le informazioni 
// 3. portare ul su js
// 4. stampare su dom stesse info

// BONUS
// 5. Trasformare la stringa foto in una immagine effettiva
// 6. Organizzare i singoli membri in card/schede


const listaMembri = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    img: 'Angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    img: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg',
  },
]
console.log(listaMembri);

// // 3
// const ulEl = document.querySelector('ul');

// 4
// + bonus inserimento immagine 
// for (let membro of listaMembri) {
//   ulEl.innerHTML +=  `<li>${membro.nome} ${membro.ruolo} <img src="img/${membro.img}"></li>`
//   console.log(membro)
// }



const cardsContainer = document.querySelector('.cards');


for (let membro of listaMembri) {
  const template = `
  <div class="col">
  <div class="card">
      <div class="img">
      <img src="img/${membro.img}" alt="${membro.nome}">
      </div>
      
      <div class="bottom">
      <h3 class="title">${membro.nome}</h3>
      <div class="subtitle">${membro.ruolo}</div>
      </div>
      </div>
      </div>
      `;
      // for (let membro of listaMembri) {
        //   const nome = membro.nome;
        //   const ruolo = membro.ruolo;
//   const img = membro.img;

cardsContainer.innerHTML += template;

}


