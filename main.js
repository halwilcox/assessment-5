const fortuneBtn = document.getElementById('fortuneBtn')
const fortuneDisplayContainer = document.getElementById('fortuneDisplay')

console.dir(fortuneDisplayContainer)

fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune')
        .then(res => {
            fortuneDisplayContainer.innerHTML = ''
            const fortuneElement = document.createElement('li')
            // console.dir(fortuneElement)
            // fortuneElement.innerHTML = '<div><h2>TITLE</h2><p>THIs is a p</p></div>'
            fortuneElement.textContent = res.data
            fortuneDisplayContainer.append(fortuneElement)
            console.log(res.data)
        })
        .catch(err => console.log(err))
})


const addFortuneForm = document.getElementById('add-fortune-form')

addFortuneForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const addFortuneInput = document.getElementById('fortune-input')

    const { value } = addFortuneInput
    // const value = addFortuneInput.value

    axios.post('http://localhost:4000/api/fortune', { value })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})




