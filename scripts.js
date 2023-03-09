function button1Clicked() {
  const img = document.querySelector('#image-1')
  img.style.rotate = '45deg'
}

document.querySelector('[data-button]').addEventListener('click', button1Clicked)

function button2Click() {
  document.body.style.setProperty('background-color','#0f0')
}

function textEntered() {
   let text = document.querySelector('[data-text]').value;
   const heading = document.querySelector('[data-entry]')
   heading.textContent = text
}

function dataEntered() {
  const input = document.querySelector('#fruit-text');
  const val = input.value;
  // const value = document.querySelector('fruit-text').value
  const li = document.createElement('li')
  li.innerHTML = val
  const ul = document.querySelector('#fruit-list')
  ul.appendChild(li)
}

function letterTyped() {
    const text = document.querySelector('[data-letters]').value
    const h2Text = document.querySelector('#h2-text')
    h2Text.textContent = text
}