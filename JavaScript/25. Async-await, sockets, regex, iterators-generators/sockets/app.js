http://
https://


ws://
wss://


let wsUrl = 'wss://site.ua'

let socket = new WebSocket(wsUrl)

//.  open
//  message
//  err
// close

socket.onopen([data], {})
socket.send()
socket.onmessage()
socket.onmessage()
socket.close()
socket.onerror()




