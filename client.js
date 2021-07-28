function client_on() {
    let net = require('net');

    let ip = '127.0.0.1';
    let port = 4200;

    let socket = new net.Socket();
    socket.connect({host:ip, port:port}, function() {
        console.log('서버와 연결 성공');
     
        socket.write('Hello Socket Server\n');
        socket.end();
     
         socket.on('data', function(chunk) {
             console.log('서버가 보냄 : ',
             chunk.toString());      
            //  document.getElementById("text_edit").innerHTML = chunk.toString();  
         });
     
         socket.on('end', function() {
             console.log('서버 연결 종료');
         });
     });
}


client_on()
