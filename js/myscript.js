/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: ///////// DONE
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: ///////// DONE
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
    Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
    Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
    Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
    Angela Lopez   Social Media      Manager  angela-lopez-social-media-manager.jpg
    Scott Estrada  Developer         scott-estrada-developer.jpg
    Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg
*/

const teamMembers = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon ',
        position: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez ',
        position: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]


let infoContainer = document.getElementById('info-container');

for (i=0; i<teamMembers.length; i++){
    let infos = document.createElement('div');
    let nameMember = document.createElement('div');
    let memberPosition = document.createElement('div');
    let profileImage = document.createElement('img');
    profileImage.setAttribute('src', './img/'+teamMembers[i].img);
    infos.classList.add('d-flex', 'flex-column', 'infos', 'p-2')
    infos.append(profileImage, nameMember, memberPosition);
    nameMember.append(teamMembers[i].name);
    memberPosition.append(teamMembers[i].position);
    
    infoContainer.append(infos);

}




























