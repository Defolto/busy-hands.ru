export function cleareInput(id){
    document.querySelector(`#${id}`).value = '';
}

export function sendMessage(text, toEmail, fromEmail) {
    fetch('/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            toEmail: toEmail,
            fromEmail: fromEmail
        })
    })
    .then(res => res.json())
    .then(res => { console.log(res);});
}
