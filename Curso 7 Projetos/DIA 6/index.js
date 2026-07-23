
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple']
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor]
    document.getElementById('color').innerText = colors[randomColor]
    console.log(randomColor)
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}