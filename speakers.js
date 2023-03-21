const content = [
    {
        id: 1,
        name: 'Elaine O. Nsoesie',
        Image: {
            img: "images/speakers/elaine1.jpg",
            alt: "speaker1",
        },
        job: 'Assistant Professor of Global Health at Boston University',
        about: 'data scientist and computational epidemiologist',
    },
    {
        id: 2,
        name: 'Sofia Crespo',
        Image: {
            img: "images/speakers/sophia 2.jpeg",
            alt: "speaker 2",
        },
        job: 'contemporary artist based in Berlin',
        about: ' works in a variety of mediums including digital art, sculpture, and installations.',
    },
    {
        id: 3,
        name: 'Masashi Sugiyama',
        Image: {
            img: "images/speakers/Masashi1.jpg",
            alt: 'speaker 3',
        },
        job: 'prominent Japanese computer scientist and artificial intelligence (AI) researcher',
        about: 'a professor at the University of Tokyo and the director of the RIKEN Center for Advanced Intelligence Project'
    },
    {
        id: 4,
        name: 'Girmaw Abebe Tadesse',
        Image: {
            img: "images/speakers/abebe1.jpeg",
            alt: "speaker 4",
        },
        job: 'computer scientist and educator',
        about: 'currently a lecturer and researcher at Addis Ababa University in Ethiopia, where he teaches courses on topics such as computer networking, computer security, and mobile computing.',
    },
    {
        id: 5,
        name: 'Jascha Sohl-Dickstein',
        Image: {
            img: "images/speakers/Jascha1.png",
            alt: 'speaker 5',
        },
        job: 'research scientist and engineer',
        about: 'currently a research scientist at Google Brain, where he works on developing new algorithms and techniques for deep learning.',
    },
    {
        id: 6,
        name: 'Dilek Hakkani-Tur',
        Image: {
            img: "images/speakers/dilek1.jpeg",
            alt: "speaker 6",
        },
        job: ' prominent researcher and scientist in the field of artificial intelligence and natural language processing',
        about: 'currently a Principal Research Scientist at Amazon Web Services (AWS), where she leads the Conversational AI team.',
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

const teamlist = document.querySelectorAll('#presenters .other-speakers li');
const MoreButt = document.querySelector('#presenters button');
const SpanButt = document.querySelector('#presenters button span');
const IconButt = document.querySelector('#presenters button i');

let stat = false;

function displayMore() {
  if (!stat) {
    teamlist.forEach((team) => {
      team.style.display = 'flex';
    });
    SpanButt.textContent = 'LESS';
    IconButt.classList.remove('fa-angle-down');
    IconButt.classList.add('fa-angle-up');
    stat = true;
  } else {
    teamlist.forEach((team, index) => {
      if (index > 1) {
        team.style.display = 'none';
      }
    });
    SpanButt.textContent = 'MORE';
    IconButt.classList.remove('fa-angle-up');
    IconButt.classList.add('fa-angle-down');
    stat = false;
  }
}

MoreButt.addEventListener('click', displayMore);

