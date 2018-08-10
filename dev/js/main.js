const doc = document.documentElement
const body = document.body
const spinner = document.getElementById('spinner')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const title = document.getElementById('title')
const nav = document.getElementById('nav')
const closeMenu = document.getElementById('closeMenu')
const paths = [
  'index',
  'people',
  'planets',
  'films',
  'species',
  'vehicles',
  'starships'
]
const images = {
  people: [
    'dist/img/people/luke.jpg',
    'dist/img/people/c3po.jpg',
    'dist/img/people/r2d2.ico',
    'dist/img/people/darth.jpeg',
    'dist/img/people/leia.jpg',
    'dist/img/people/owen.jpg',
    'dist/img/people/beru.jpg',
    'dist/img/people/r5d5.jpg',
    'dist/img/people/biggs.jpg',
    'dist/img/people/obi.jpg'
  ],
  films: [
    'dist/img/films/4.jpg',
    'dist/img/films/2.jpg',
    'dist/img/films/1.jpg',
    'dist/img/films/3.jpg',
    'dist/img/films/6.jpg',
    'dist/img/films/5.jpg',
    'dist/img/films/7.jpg'
  ],
  planets: [
    'dist/img/planets/alderaan.jpg',
    'dist/img/planets/yavin.jpg',
    'dist/img/planets/hoth.jpg',
    'dist/img/planets/dagobah.jpg',
    'dist/img/planets/bespin.jpg',
    'dist/img/planets/endor.jpg',
    'dist/img/planets/naboo.jpg',
    'dist/img/planets/coruscant.jpg',
    'dist/img/planets/kamino.jpg',
    'dist/img/planets/geonosis.jpg'
  ],
  species: [
    'dist/img/species/hutt.jpg',
    'dist/img/species/yoda.jpg',
    'dist/img/species/trandoshan.jpg',
    'dist/img/species/mon.jpg',
    'dist/img/species/ewok.jpg',
    'dist/img/species/sullustan.jpg',
    'dist/img/species/neimodian.jpg',
    'dist/img/species/gungan.jpg',
    'dist/img/species/toydarian.jpg',
    'dist/img/species/dug.jpg'
  ],
  starships: [
    'dist/img/starships/executor.jpg',
    'dist/img/starships/sentinel.jpg',
    'dist/img/starships/death.jpg',
    'dist/img/starships/millennium.jpg',
    'dist/img/starships/y-wing.jpg',
    'dist/img/starships/x-wing.jpg',
    'dist/img/starships/tie-advance.jpg',
    'dist/img/starships/slave.ico',
    'dist/img/starships/imperial.jpg',
    'dist/img/starships/ef76.jpg'
  ],
  vehicles: [
    'dist/img/vehicles/sand.jpg',
    'dist/img/vehicles/t-16.jpg',
    'dist/img/vehicles/x-34.jpg',
    'dist/img/vehicles/tie-ln.jpg',
    'dist/img/vehicles/snowspeeder.jpg',
    'dist/img/vehicles/tie-bomber.png',
    'dist/img/vehicles/at-at.jpg',
    'dist/img/vehicles/at-st.jpg',
    'dist/img/vehicles/storm.jpg',
    'dist/img/vehicles/sail.jpg'
  ]
}
const buttons = []
const containers = []
const selects = []

let a
let b

paths.forEach(path => {
  buttons.push(document.getElementById(path))
  containers.push(document.getElementById(`container-${path}`))
  selects.push(document.getElementById(`select-${path}`))
})

const showPage = (page) => {
  if (page === 'index') page = '/'
  nav.classList.remove('nav-expand')
  menu.classList.remove('arrow')
  spinner.classList.remove('spinner--hidden')
  header.style.top = '0'
  window.history.pushState('data', page, page)
  setTimeout(() => {
    containers.forEach((container, index) => {
      container.classList.add('invisible')
      buttons[index].classList.remove('nav__item--black')
    })
  }, 300)
  if (page === '/') {
    setTimeout(() => {
      buttons[0].classList.add('nav__item--black')
      containers[0].classList.remove('invisible')
      spinner.classList.add('spinner--hidden')
    }, 600)
  } else {
    request(page.replace('/', ''))
  }
}

const toggleMenu = () => {
  menu.classList.toggle('arrow')
  nav.classList.toggle('nav-expand')
}

const drawResponse = (response, container) => {
  const div = document.createElement('div')
  div.classList.add('cards-container')

  containers.forEach((container) => {
    container.classList.add('invisible')
  })

  response.forEach((res, index) => {
    switch (window.location.pathname) {
      case '/people':
        document.getElementById('container-people').classList.remove('invisible')
        document.getElementById('people').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
          <div class="card" id="${res.name.split(' ')[0].toLowerCase()}">
            <h4 class="card__title">${res.name.toLowerCase()}</h4>
            <img src="${images[container][index]}" alt="" class="card__image">
            <p class="card__text">Genero: <span class="card__text--black">${res.gender.toLowerCase()}</span></p>
            <p class="card__text">Nacimiento: <span class="card__text--black">${res.birth_year.toLowerCase()}</span></p>
            <p class="card__text">Estatura: <span class="card__text--black">${res.height.toLowerCase()}</span></p>
            <p class="card__text">Peso: <span class="card__text--black">${res.mass.toLowerCase()}</span></p>
          </div>
        `)
        break
      case '/planets':
        document.getElementById('container-planets').classList.remove('invisible')
        document.getElementById('planets').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
        <div class="card" id="${res.name.split(' ')[0].toLowerCase()}">
          <h4 class="card__title">${res.name.toLowerCase()}</h4>
          <img src="${images[container][index]}" alt="" class="card__image">
          <p class="card__text">Diametro: <span class="card__text--black">${res.diameter.toLowerCase()}</span></p>
          <p class="card__text">Clima: <span class="card__text--black">${res.climate.toLowerCase()}</span></p>
          <p class="card__text">Gravedad: <span class="card__text--black">${res.gravity.toLowerCase()}</span></p>
          <p class="card__text">Población: <span class="card__text--black">${res.population.toLowerCase()}</span></p>
        </div>
        `)
        break
      case '/films':
        document.getElementById('container-films').classList.remove('invisible')
        document.getElementById('films').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
          <div class="card" id="episodio_${res.episode_id}">
            <h4 class="card__title">${res.title.toLowerCase()}</h4>
            <img src="${images[container][index]}" alt="" class="card__image">
            <p class="card__text">Episodio: <span class="card__text--black">${res.episode_id}</span></p>
            <p class="card__text">Director: <span class="card__text--black">${res.director.toLowerCase()}</span></p>
            <p class="card__text">Productor: <span class="card__text--black">${res.producer.toLowerCase()}</span></p>
            <p class="card__text">Lanzamiento: <span class="card__text--black">${res.release_date.toLowerCase()}</span></p>
          </div>
        `)
        break
      case '/species':
        document.getElementById('container-species').classList.remove('invisible')
        document.getElementById('species').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
          <div class="card" id="${res.name.split(' ')[0].toLowerCase()}">
            <h4 class="card__title">${res.name.toLowerCase()}</h4>
            <img src="${images[container][index]}" alt="" class="card__image">
            <p class="card__text">Clasificación: <span class="card__text--black">${res.classification.toLowerCase()}</span></p>
            <p class="card__text">Designación: <span class="card__text--black">${res.designation.toLowerCase()}</span></p>
            <p class="card__text">Lenguaje: <span class="card__text--black">${res.language.toLowerCase()}</span></p>
            <p class="card__text">Planeta: <span class="card__text--black">${res.homeworld.toLowerCase()}</span></p>
          </div>
        `)
        break
      case '/vehicles':
        document.getElementById('container-vehicles').classList.remove('invisible')
        document.getElementById('vehicles').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
          <div class="card" id="${res.name.split(' ')[0].toLowerCase()}">
            <h4 class="card__title">${res.name.toLowerCase()}</h4>
            <img src="${images[container][index]}" alt="" class="card__image">
            <p class="card__text">Modelo: <span class="card__text--black">${res.model.toLowerCase()}</span></p>
            <p class="card__text">Fabricante: <span class="card__text--black">${res.manufacturer.toLowerCase()}</span></p>
            <p class="card__text">Capacidad: <span class="card__text--black">${res.cargo_capacity.toLowerCase()}</span></p>
            <p class="card__text">Pasajeros: <span class="card__text--black">${res.passengers.toLowerCase()}</span></p>
          </div>
        `)
        break
      case '/starships':
        document.getElementById('container-starships').classList.remove('invisible')
        document.getElementById('starships').classList.add('nav__item--black')
        div.insertAdjacentHTML('beforeend', `
          <div class="card" id="${res.name.split(' ')[0].toLowerCase()}">
            <h4 class="card__title">${res.name.toLowerCase()}</h4>
            <img src="${images[container][index]}" alt="" class="card__image">
            <p class="card__text">Modelo: <span class="card__text--black">${res.model.toLowerCase()}</span></p>
            <p class="card__text">Tipo: <span class="card__text--black">${res.starship_class.toLowerCase()}</span></p>
            <p class="card__text">Fabricante: <span class="card__text--black">${res.manufacturer.toLowerCase()}</span></p>
            <p class="card__text">Pasajeros: <span class="card__text--black">${res.passengers.toLowerCase()}</span></p>
          </div>
        `)
        break
    }
  })
  document.getElementById(`container-cards-${container}`).appendChild(div)

  const spinner = document.getElementById('spinner')
  setTimeout(() => {
    spinner.classList.add('spinner--hidden')
  }, 500)
}

const request = (endPoint) => {
  setTimeout(() => {
    containers[0].classList.add('invisible')
  }, 1000)
  fetch(`https://swapi.co/api/${endPoint}`)
    .then(res => {
      switch (res.status) {
        case 200:
          return res.json()
        default:
          console.log('error')
          break
      }
    })
    .then(json => {
      setTimeout(() => {
        drawResponse(json.results, endPoint)
      }, 500)
    })
    .catch(error => console.error(error))
}

const selectCharacter = (e) => {
  let cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.classList.remove('invisible')
    if (e.target.value === 'all') card.classList.remove('invisible')
    else if (e.target.value !== card.id) card.classList.add('invisible')
  })
}

title.addEventListener('click', () => showPage('/'))
menu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!window.location.pathname.includes(button.id) &&
       !(window.location.pathname === '/' && button.id === 'index')) {
      showPage(paths[index])
    }
  })
})
selects.forEach(select => {
  if (select) select.addEventListener('change', (e) => selectCharacter(e))
})
window.addEventListener('DOMContentLoaded', () => showPage(window.location.pathname))
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 767px)').matches) {
    menu.classList.remove('arrow')
    nav.classList.remove('nav-expand')
  }
})
window.addEventListener('touchmove', (e) => {
  if (Array.from(nav.classList).includes('nav-expand')) body.style.overflow = 'hidden'
  if (!Array.from(nav.classList).includes('nav-expand')) body.style.overflow = 'scroll'
  if (!Array.from(spinner.classList).includes('spinner--hidden')) body.style.overflow = 'hidden'
  if (Array.from(spinner.classList).includes('spinner--hidden')) body.style.overflow = 'scroll'
  a = doc.scrollTop
})
window.addEventListener('mousewheel', (e) => {
  Array.from(nav.classList).includes('nav-expand') && e.preventDefault()
  !Array.from(spinner.classList).includes('spinner--hidden') && e.preventDefault()
  a = doc.scrollTop
})
window.addEventListener('scroll', (e) => {
  b = doc.scrollTop
  if (a < b && b > 71) header.style.top = '-71px'
  if (b < 71) header.style.top = '0'
  if (a > b) header.style.top = '0'
})
