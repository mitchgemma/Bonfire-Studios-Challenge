//========DOM ELEMENTS======================================================================================

const showAll = document.querySelector('.show-all')
const showOdd = document.querySelector('.show-even')
const showEven = document.querySelector('.show-odd')

const clickButton = (e) => {
  console.log('the element', e.target)
  // if the target does not have an id, find the element with 'checked' id and remove it
  if (!e.target.id) {
    document.getElementById('checked').removeAttribute('id')
    // give the new element the id 'checked
    e.target.id = 'checked'
  }
}

//========EVENT LISTENERS===================================================================================
showAll.addEventListener('click', clickButton)
showOdd.addEventListener('click', clickButton)
showEven.addEventListener('click', clickButton)
