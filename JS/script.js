// PASSAGGI DA ESEGUIRE: 

// 1. creare array di oggetti con tutti i dati inseriti per ogni membro,
// 2. stampare in console le informazioni 
// 3. portare ul su js
// 4. stampare su dom stesse info



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
    img: 'ngela-lopez-social-media-manager.jpg',
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

// 3
const ulEl = document.querySelector('ul');

// 4
for (let membro of listaMembri) {
  ulEl.innerHTML +=  `<li>${membro.nome} ${membro.ruolo} ${membro.img}</li>`
  console.log(membro)
}

