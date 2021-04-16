
const project = [
  {
    id: 1,
    link: 'https://boardgamegeek.com/boardgame/30549/pandemic',
    image: './images/projects/pademic.jpg',
    alt: 'project1',
    category: 'landing-page',
    name: 'Pandemic',
    desc: 'Google search page',
  },
  {
    id: 2,
    link: 'https://boardgamegeek.com/boardgame/68448/7-wonders',
    image: './images/projects/7 Wonders.jpg',
    alt: 'project2',
    category: 'landing-page',
    name: '7 Wonders',
    desc: 'Javascript documentation landing page',
  },
  {
    id: 3,
    link: 'https://boardgamegeek.com/boardgame/150376/dead-winter-crossroads-game',
    image: './images/projects/Dead of Winter.jpg',
    alt: 'project3',
    category: 'landing-page',
    name: 'Dead of Winter',
    desc: 'Just a simple calculator inspired from MS Calculator',
  },
  {
    id: 4,
    link: 'https://boardgamegeek.com/boardgame/10547/betrayal-house-hill',
    image: './images/projects/Betrayal.png',
    alt: 'project4',
    category: 'landing-page',
    name: 'Betrayal',
    desc: "The first form page that I've made",
  },
  {
    id: 5,
    link: 'https://boardgamegeek.com/boardgame/157969/sheriff-nottingham',
    image: './images/projects/Sheriff of Nottingham.jpg',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'Sheriff of Nottingham',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 6,
    link: 'https://boardgamegeek.com/boardgame/148228/splendor',
    image: './images/projects/Splendor .jpg',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'Splendor',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 7,
    link: 'https://boardgamegeek.com/boardgame/3955/bang',
    image: './images/projects/Bang.jpg',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'Bang',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 8,
    link: 'https://boardgamegeek.com/boardgame/25821/werewolves-millers-hollow',
    image: './images/projects/The Werewolves Of Millers Hollow.jpg',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'The Werewolves Of Millers Hollow',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 9,
    link: 'https://boardgamegeek.com/boardgame/2223/uno',
    image: './images/projects/Uno.jpg',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'Uno',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 10,
    link: 'https://boardgamegeek.com/boardgame/172225/exploding-kittens',
    image: './images/projects/Exploding Kittens.png',
    alt: 'We-Keeper',
    category: 'landing-page',
    name: 'Exploding Kittens',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
  {
    id: 11,
    link: 'https://boardgamegeek.com/boardgame/244536/tiny-epic-zombies',
    image: './images/projects/Tiny Epic Zombies.jpg',
    alt: 'We-Keeper',
    category: 'javascript',
    name: 'Tiny Epic Zombies',
    desc: 'This is like a Google keep clone using Reactjs to built',
  },
];

function renderProject(arr) {
  let html = '';
  for (var i = 0; i < project.length; i++) {
    html +=
      '<a href="' +
      project[i].link +
      '" class="project-item-inner shadow-dark" data-category="' +
      project[i].category +
      '" target="_blank">';
    html += '<div class="project-img">';
    html += '<img src="' + project[i].image + '" alt="' + project[i].alt + '">';
    html += '</div>';
    html += '<div class="project-info">';
    html += '<h4>' + project[i].name + '</h4>';

    html += '</div>';
    html += '</a>';
  }
  document.getElementById('project-item').innerHTML = html;
}
renderProject(project);
