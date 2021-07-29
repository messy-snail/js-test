let webSocket = new WebSocket("ws://127.0.0.1:4200");
let messageTextArea = document.getElementById("messageTextArea");

webSocket.onopen = function (message) {
    messageTextArea.value += "서버 연결...\n";
};
// 소멸 콜백
webSocket.onclose = function (message) {
    messageTextArea.value += "서버 끊기...\n";
};
// 에러 콜백
webSocket.onerror = function (message) {
    messageTextArea.value += "에러...\n";
};
// 메시지 콜백
webSocket.onmessage = function (message) {
    // 출력 area에 메시지를 표시한다.
    messageTextArea.value += "수신: " + message.data + "\n";
};

function send_message() {
    var message = document.getElementById("textMessage");
    messageTextArea.value += "송신: " + message.value + "\n";
    webSocket.send(message.value);
    message.value = "";
}

function disconnect() {
    webSocket.close();
}