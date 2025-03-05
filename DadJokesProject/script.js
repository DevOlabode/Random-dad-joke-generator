const newJoke = document.querySelector('#newJoke')
const jokeDisplay = document.querySelector('#display')
const allDisplay = document.querySelector('#allDisplay')
const copyButton = document.querySelector('#copy')
const copied = document.querySelector('#copied')
function randomColor() {
    const r = Math.floor(Math.random() * 256) + 10
    const g = Math.floor(Math.random() * 256) + 10
    const b = Math.floor(Math.random() * 256) + 10
    let  a = (Math.random() * 1).toFixed(1);
    return `rgb(${r},${g},${b},${a})`
}
function generate() {
const url = 'https://icanhazdadjoke.com/';
axios.get(url, {
    headers: {
        'Accept': 'application/json' 
    }
})
.then(response => {
    jokeDisplay.textContent = `${response.data.joke}`
})
.catch(error => {
    console.error('There was a problem with the request:', error);
});

}

function buttons() {
    copyButton.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        textarea.value = jokeDisplay.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copied.textContent = 'Copied joke to clipboard'
    });
}



buttons();
newJoke.addEventListener('click', () => {
    setTimeout(() => {
        generate()
        document.body.style.backgroundColor = randomColor();
    }
),1000
})


