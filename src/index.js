const diamond = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<g fill="#000000"><path d="M12 2L5 12l7 10 7-10z"></path></g>
</svg>`;

const heart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<g fill="#000000">
  <path
    d="M18,4c-4-1-6,3-6,3s-2-4-6-3s-4,6-2,8l8,8l8-8C22,10,22,5,18,4z"
  ></path>
</g>
</svg>`

const buttons = document.querySelectorAll('#button')
const reset = document.getElementById('reset')
let count = 0


let valuesArr = [false,false,false,false,false,false,false,false,false]

function win(value) {
  let bod = document.querySelector('.body')

  if(value == 'diamond') {
    bod.classList.add('green')
  } else {
    bod.classList.add('red')
  }

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", "disabled")
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (valuesArr[i] == false) {
      count++

      if (count % 2 == 1) {
        buttons[i].insertAdjacentHTML('afterbegin', diamond)
        valuesArr[i] = 'diamond'
        for (let i = 0; i < valuesArr.length; i++) {
          if (valuesArr[0] === 'diamond' && valuesArr[1] === 'diamond' && valuesArr[2] === 'diamond' ||
              valuesArr[3] === 'diamond' && valuesArr[4] === 'diamond' && valuesArr[5] === 'diamond' ||
              valuesArr[6] === 'diamond' && valuesArr[7] === 'diamond' && valuesArr[8] === 'diamond' ||
              valuesArr[i] === 'diamond' && valuesArr[i+3] === 'diamond' && valuesArr[i+6] === 'diamond' ||
              valuesArr[i] === 'diamond' && valuesArr[i+4] === 'diamond' && valuesArr[i+8] === 'diamond' ||
              valuesArr[i] === 'diamond' && valuesArr[i+2] === 'diamond' && valuesArr[i+4] === 'diamond') {
              win('diamond')
          }
        }
      } else {
        buttons[i].insertAdjacentHTML('afterbegin', heart)
        valuesArr[i] = 'heart'
        for (let i = 0; i < valuesArr.length; i++) {
          if (valuesArr[0] === 'heart' && valuesArr[1] === 'heart' && valuesArr[2] === 'heart' ||
              valuesArr[3] === 'heart' && valuesArr[4] === 'heart' && valuesArr[5] === 'heart' ||
              valuesArr[6] === 'heart' && valuesArr[7] === 'heart' && valuesArr[8] === 'heart' ||
              valuesArr[i] === 'heart' && valuesArr[i+3] === 'heart' && valuesArr[i+6] === 'heart' ||
              valuesArr[i] === 'heart' && valuesArr[i+4] === 'heart' && valuesArr[i+8] === 'heart' ||
              valuesArr[i] === 'heart' && valuesArr[i+2] === 'heart' && valuesArr[i+4] === 'heart') {
            win('heart')
          }
        }
      }
    }
  })
}

reset.addEventListener('click', () => {
  let bod = document.body
  bod.classList.remove('green')
  bod.classList.remove('red')
  valuesArr = [false,false,false,false,false,false,false,false,false]
  for(let i = 0; i < valuesArr.length; i++) {
    buttons[i].textContent = ''
    buttons[i].removeAttribute('disabled')
  }

})
