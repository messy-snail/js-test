import asyncio
import websockets

async def accept(websocket, path):
    while True:
        # 수신
        data = await websocket.recv();
        print("receive : " + data);

        # 송신(응답)
        await websocket.send("echo(" + data+")");

# IP, PORT
start_server = websockets.serve(accept, "127.0.0.1", 4200);

# 비동기로 대기
asyncio.get_event_loop().run_until_complete(start_server);
asyncio.get_event_loop().run_forever();