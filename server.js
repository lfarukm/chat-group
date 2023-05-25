const express=require('express');
const app=express();
const http=require('http').createServer(app);

const PORT=process.env.PORT || 3001;

http.listen(PORT, ()=>{
    console.log(`Sunucu bağlantısı: ${PORT}`);
});

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/chat.html')
    
});

//Socket

const io = require('socket.io')(http);

io.on('connection', (socket) => {

    
    console.log('Bağlandı...');

    socket.on('message', (msg) => {

      // console.log(msg);

      socket.broadcast.emit('message',msg)
      
      
    })
    
});





// const http = require('http');
// const express = require('express');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Socket.IO ile yapmak istediğiniz işlemleri burada gerçekleştirebilirsiniz

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// const socket = io();

// function mesajGonder2() {
//     var metin = document.getElementById("mesajMed").value;
//     var yeniElement = document.createElement("p");
//     var icerik = document.createTextNode(metin);
//     yeniElement.appendChild(icerik);
//     var icerik = document.getElementById("icerikMed");
//     icerik.appendChild(yeniElement);
    
//     document.getElementById("mesajMed").value = "";
//     document.getElementById("icerikMed").scrollTop += 9999; /* yazdıkça scrollda gelsin */
//     window.scrollTo(0, document.body.scrollHeight)
// }

// document.getElementById("mesajMed").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("buttonMed").click();
//         document.getElementById("icerikMed").scrollTop += 9999; /* yazdıkça scroolda gelsin */
//     }
// });
