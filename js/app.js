//========DOM ELEMENTS======================================================================================
const oddBoxes = document.querySelectorAll('.odd')
const evenBoxes = document.querySelectorAll('.even')
const showAll = document.querySelector('.show-all')
const showOdd = document.querySelector('.show-even')
const showEven = document.querySelector('.show-odd')
const home = document.getElementById('home')
const away = document.getElementById('away')

// Click function to be added to the boxes buttons to decide which action to take
const clickButton = (e) => {
  // if the target does not have an id, find the element with 'checked' id and remove it
  if (!e.target.id) {
    document.getElementById('checked').removeAttribute('id')
    // give the new element the id 'checked
    e.target.id = 'checked'
  }
  // if user clicks on show even button, displays will be changed accordingly
  for (let i = 0; i < oddBoxes.length; i++) {
    if (e.target.className == 'show-even') {
      oddBoxes[i].style.display = 'none'
      evenBoxes[i].style.display = 'flex'
    }
    // for show-odd button, even boxes will be hidden
    else if (e.target.className == 'show-odd') {
      evenBoxes[i].style.display = 'none'
      oddBoxes[i].style.display = 'flex'
      // when show all is clicked, all displays will be changed back to normal
    } else if (e.target.className == 'show-all') {
      evenBoxes[i].style.display = 'flex'
      oddBoxes[i].style.display = 'flex'
    }
  }
}
// Simple function to flip the colors of the nav bar links
const nav = (e) => {
  // if home is clicked make home beige and away white
  if (e.target.id == 'home') {
    home.style.color = 'rgb(253, 236, 202)'
    away.style.color = 'white'
    // if away is clicked make home white and away beige
  } else if ((e.target.id = 'away')) {
    home.style.color = 'white'
    away.style.color = 'rgb(253, 236, 202)'
  }
}

//========EVENT LISTENERS===================================================================================
showAll.addEventListener('click', clickButton)
showOdd.addEventListener('click', clickButton)
showEven.addEventListener('click', clickButton)
home.addEventListener('click', nav)
away.addEventListener('click', nav)
