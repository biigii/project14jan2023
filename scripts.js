// const num = 1000

// if(num <= 100) {
//   document.body.style.setProperty('background-color','#f11')
// }

// if (num > 100) {
//   document.body.style.setProperty('background-color','#0f0')
// }

// if(age === 10) {
//   console.log('age is 10')
// } else {
//   console.log('age is something else')
// }


function windowResized() {
  const myBrowserWidth = window.innerWidth
  if(myBrowserWidth > 1200) {
    document.body.style.setProperty('background-color','#00f')
  } else {
    document.body.style.setProperty('background-color','#0f0')
  }
}

// function moveBall(event) {
//   const top = event.x
//   const left = event.y
//   const ball = document.querySelector('[data-ball]')
//   console.log(top)
//   //  top: 200px
//   // console.log(top+'px')
//   ball.style.top = top + 'px'
//   ball.style.left = left + 'px' 
// }

function moveBall(event) {
  const x = event.x
  const y = event.y
  const ball = document.querySelector('[data-ball]')
  // ball.style.translate = '400px 300px'
  // transform: translate(200px, 100px);
 ball.style.transform = `translate(${x-50}px, ${y-50}px)`
}

document.addEventListener('click', moveBall)

// const num = 200

// console.log(num+'px')
// console.log(`${num}px`)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 101]

numbers.forEach(function(number){
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/id/' + number + '/200'
  document.body.appendChild(img)
})