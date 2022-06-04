//========DOM ELEMENTS======================================================================================
const oddBoxes = document.querySelectorAll('.odd')
const evenBoxes = document.querySelectorAll('.even')
const showAll = document.querySelector('.show-all')
const showOdd = document.querySelector('.show-even')
const showEven = document.querySelector('.show-odd')

const clickButton = (e) => {
  // if the target does not have an id, find the element with 'checked' id and remove it
  if (!e.target.id) {
    document.getElementById('checked').removeAttribute('id')
    // give the new element the id 'checked
    e.target.id = 'checked'
  }
  // if user clicks on show even button, displays will be changed accordingly
  if (e.target.className == 'show-even') {
    for (let i = 0; i < oddBoxes.length; i++) {
      oddBoxes[i].style.display = 'none'
      evenBoxes[i].style.display = 'flex'
    }
    // for show-odd button, even boxes will be hidden
  } else if (e.target.className == 'show-odd') {
    for (let i = 0; i < evenBoxes.length; i++) {
      evenBoxes[i].style.display = 'none'
      oddBoxes[i].style.display = 'flex'
    }
    // when show all is clicked, all displays will be changed back to normal
  } else if (e.target.className == 'show-all') {
    for (let i = 0; i < evenBoxes.length; i++) {
      evenBoxes[i].style.display = 'flex'
      oddBoxes[i].style.display = 'flex'
    }
  }
}

//========EVENT LISTENERS===================================================================================
showAll.addEventListener('click', clickButton)
showOdd.addEventListener('click', clickButton)
showEven.addEventListener('click', clickButton)
