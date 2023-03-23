const card1 = document.querySelector('.rating-state')
const card2 = document.querySelector('.thank-you-state')


document.querySelector('#rating-state-form').addEventListener('submit', e => {
  e.preventDefault()
  card1.classList.add('none')
  card2.classList.remove('none')
})

const stars = document.querySelectorAll('.btn-group input')

for(let star of stars) {
  star.addEventListener('click', () => {
    // alert(e.target.value)
    document.querySelector('#state').textContent = star.value
  })
}