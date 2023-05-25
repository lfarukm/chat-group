const socket = io();


let textarea=document.querySelector('#textarea')

let messageArea=document.querySelector('.message_area')

let name;


textarea.addEventListener('keyup',(e) => {
    if(e.key==='Enter') {
        const message = document.getElementById('textarea').value;
        sendMessage(message);
    }
});

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    const message = document.getElementById('textarea').value;
    sendMessage(message);
});

function scrollToBottom(){
    var messageArea=document.querySelector('.message_area');
    messageArea.scrollTop=messageArea.scrollHeight;
}

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim(),
    }

    //Append

    appendMessage(msg, 'outgoing');
    textarea.value='';

    //Send to Server

    socket.emit('message', msg)

    scrollToBottom();
}



function appendMessage(msg,type) {
    let mainDiv= document.createElement('div');

    let className= type;

    mainDiv.classList.add(className,'message');


    let markup = `
    
    <p>${msg.message}</p>
`

mainDiv.innerHTML=markup
messageArea.appendChild(mainDiv)
      
    scrollToBottom();
    
}

// Receive Message

socket.on('message', (msg) => {
    // console.log(msg);

    appendMessage(msg, 'incoming')
});
