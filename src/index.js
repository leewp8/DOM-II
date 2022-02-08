import './less/index.less'

// Your code goes here!

// 1 - LOAD 
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'ALL ABOARD!'
}

// 2 - COPY
document.addEventListener('copy', (evt) => {
    console.log('copy action initiated')
})

// 3 - MOUSEOVER
document.addEventListener('mouseover', (evt) => {
    console.log('mouseover working')
    const heading = document.querySelector('h1')
    heading.textContent = 'Look at this tiny yellow bus'
})

// 4 - DBLCLICK
document.addEventListener('dblclick', (evt) => {
    console.log('DBLCLICKing functional')
    const headerH2 = document.querySelector('.intro h2')
    headerH2.textContent = ('OUCH!')
})

// 5 - WHEEL
document.addEventListener('wheel', (evt) => {
    console.log('weeeeeeeeeeeeee')
    const shrinkBus = document.querySelector('.intro img')
    shrinkBus.remove()
})

// 6 - MOUSEMOVE
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    // console.log(`mouse is currently at ${clientX}, ${clientY}`)
})

// 7 - KEYDOWN
window.addEventListener('keydown', evt => {
    if (evt.key == 9) {
        document.body.innerHTML = 'OHHH NOOOOOO'
    }
})

// 8 - MOUSEENTER
// 9 - MOUSELEAVE
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}


// 10 RESIZE
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;


Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        console.log(`The ${evt.target.textContent} link is a scam`)
    })
})

