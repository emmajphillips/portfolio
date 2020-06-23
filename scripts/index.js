function init() {
  const moveableText = document.querySelector('#moveable-text')
  const moveableTextContainer = document.querySelector('.hero')

  
  function followMouse(event) {
    event.preventDefault()
    const letters = moveableText.textContent.replace(/\s/g, '').split('').join('')
    moveableText.textContent = letters
    document.body.appendChild(moveableText)
    moveableText.style.position = 'absolute'
    moveableText.style.left = event.clientX + 'px'
    moveableText.style.top = event.clientY + 'px'
  }

  function stopFollowingMouse() {
    console.log('mouse left')
  }

  moveableTextContainer.addEventListener('mousemove', followMouse)
  moveableTextContainer.addEventListener('mouseleave', stopFollowingMouse)

}

window.addEventListener('DOMContentLoaded', init)