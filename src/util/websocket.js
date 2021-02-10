let Socket = "";
// let WSS_URL=process.env.VUE_APP_BASE_SOCKET//'ws://10.0.0.194:8002'
// let hosts = '10.0.0.133:8001';
// let WSS_URL =  "ws://" + hosts;
//process.env.NODE_ENV == 'development'

// let hosts = window.location.host.split(":")[0];
// let WSS_URL =  "ws://" + hosts;
// let WSS_URL =  "ws://" + hosts + ":2020";
// console.log(WSS_URL)
// let WSS_URL =`ws://${window.location.host}`;
// if(process.env.NODE_ENV == 'development'){
//   WSS_URL =`ws://${process.env.VUE_APP_WS}`;
// }
let WSS_URL = "ws://8.133.177.11:2020";
var client = 'classroom0000001';

/**建立连接 */
export function createSocket(url) {
  if (!Socket) {
    console.log("建立websocket连接", url);
    Socket = new WebSocket(`${WSS_URL}${url}`);
    Socket.onopen = onopenWS;
    Socket.onmessage = onmessageWS;
    Socket.onerror = onerrorWS;
    Socket.onclose = oncloseWS;
    // Socket.send = onsendWS;
  } else {
    console.log("websocket已连接");
  }
}
/**打开WS之后发送心跳 */
export function onopenWS() {
  console.log("连接成功");
  Socket.send(JSON.stringify({'type':'open', 'data':{'name':client}}));
}
/**连接失败重连 */
export function onerrorWS() {
  if (Socket) {
    Socket.close();
  }
  Socket = "";
  // createSocket(); //重连
}
/**WS数据接收统一处理 */
export function onmessageWS(e) {
  // console.log(e)
  window.dispatchEvent(
    new CustomEvent("onmessageWS", {
      detail: {
        data: e,
      },
    })

  );
}

/**关闭WS */
export function oncloseWS() {
  if (Socket) {
    Socket.close();
  }
  Socket = "";
  console.log("websocket已断开");
}
/**发送 */
export function onsendWS(data) {
  Socket.send(data || "test");
}
