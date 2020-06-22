function init() {
  const moveableText = document.querySelector('h1')
  const moveableTextContainer = document.querySelector('.hero')
  console.log(moveableText)
  console.log(moveableTextContainer)

  function followMouse() {
    console.log('mouse entered')
  }

  function stopFollowingMouse() {
    console.log('mouse left')
  }

  moveableTextContainer.addEventListener('mouseenter', followMouse)
  moveableTextContainer.addEventListener('mouseleave', stopFollowingMouse)

}

window.addEventListener('DOMContentLoaded', init)