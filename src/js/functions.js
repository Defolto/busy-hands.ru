export function cleareInput(id){
    document.querySelector(`#${id}`).value = '';
}

export function sendMessage(text) {
    fetch('/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text
        })
    })
    .then(res => res.json())
    .then(res => { console.log(res);});
}
