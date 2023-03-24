const content = [
    {
        id: 1,
        name: 'Elaine O. Nsoesie',
        Image: {
            img: "../images/elaine1.jpg",
            alt: "speaker1",
        },
        job: 'Assistant Professor of Global Health at Boston University',
        about: 'data scientist and computational epidemiologist',
    },
    {
        id: 2,
        name: 'Sofia Crespo',
        Image: {
            img: "../images/sophia 2.jpeg",
            alt: "speaker 2",
        },
        job: 'contemporary artist based in Berlin',
        about: ' works in a variety of mediums including digital art, sculpture, and installations.',
    },
    {
        id: 3,
        name: 'Masashi Sugiyama',
        Image: {
            img: "../images/sugiyama2.jpeg",
            alt: 'speaker 3',
        },
        job: 'prominent Japanese computer scientist and artificial intelligence (AI) researcher',
        about: 'a professor at the University of Tokyo and the director of the RIKEN Center for AI .'
    },
    {
        id: 4,
        name: 'Girmaw Abebe Tadesse',
        Image: {
            img: "../images/girmaw_abebe22.jpg",
            alt: "speaker 4",
        },
        job: 'computer scientist and educator',
        about: 'researcher at Addis Ababa University in Ethiopia with successfull collaboration',
    },
    {
        id: 5,
        name: 'Jascha Sohl-Dickstein',
        Image: {
            img: "../images/jasack22.jpg",
            alt: 'speaker 5',
        },
        job: 'research scientist and engineer',
        about: 'a scientist at Google Brain,works on developing new algorithms for deep learning.',
    },
    {
        id: 6,
        name: 'Dilek Hakkani-Tur',
        Image: {
            img: "../images/Dilek_Portrait-22.jpg",
            alt: "speaker 6",
        },
        job: ' prominent researcher and scientist in the field of artificial intelligence and natural language processing',
        about: 'Research Scientist at Amazon Web Services, she leads the Conversational AI team.',
    }

];
const container = document.querySelector('.other-speakers');

function createCard(contentInfo) {
  const li = document.createElement('li');
  li.className = 'cards';
  li.innerHTML = ` <div class="cards-image">
      <img src="${contentInfo.Image.img}" alt="${contentInfo.Image.alt}">
    </div>
    <div class="cards-text">
      <h3>${contentInfo.name}</h3>
      <h4>${contentInfo.job}</h4>
      <p>${contentInfo.about}</p>
    </div>`;
  return li;
}

content.forEach((info) => {
  const card = createCard(info);
  container.appendChild(card);
});


const teamlist = document.querySelectorAll('.cards');
const MoreButt = document.querySelector('#presenters button');
const SpanButt = document.querySelector('#presenters button span');
const IconButt = document.querySelector('#presenters button i');

let stat = false;

function displayMore() {
  if (!stat) {
    teamlist.forEach((team, index) => {
      if (index >= 2) {
        team.style.display = 'flex';
      
      }
    });
    SpanButt.textContent = 'LESS';
    IconButt.classList.remove('fa-angle-down');
    IconButt.classList.add('fa-angle-up');
    stat = true;
  } else {
    teamlist.forEach((team, index) => {
      if (index >= 2) {
        team.style.display = 'none';
      }
    });
    SpanButt.textContent = 'MORE';
    IconButt.classList.remove('fa-angle-up');
    IconButt.classList.add('fa-angle-down');
    stat = false;
  }
}

// Hide all speakers except the first two by default
teamlist.forEach((team, index) => {
  if (index >= 2) {
    team.style.display = 'none';
  }
});


MoreButt.addEventListener('click', displayMore);

