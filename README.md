# DG-Lab v2 Socket Server
- 一个不完整的 DG-Lab 2.0 产品的 Socket 服务器
- 兼容了部分 3.0 的功能，由于波形相关文档太过简略（也可能是我菜），所以暂时没有实现相关功能

## 使用方法
- `server.js` 是拿来开https服务器的，因为浏览器不允许在没有https的情况下使用蓝牙功能
- 自己签个证书，然后文件路径写到 `server.js` 的 第5 和 第6 行，直接运行 `node server.js` 即可
- 打开浏览器 `https://127.0.0.1:45423/index.html` 即可使用
- 先点击 Start 按钮，连接到2.0设备
- 然后打开浏览器控制台，输入 `startWS()` 连接到 Socket 客户端
- 客户端的地址和服务端的id信息都在 `index.html` 的 255 行和 256 行
- 波形信息写死在了 184 行，可以根据需要修改
- 连接WebSocket之后，点击 `Set Strength` 按钮将强度上限设置为200，接下来直接使用即可

## 其他的一些说明
- 代码很乱，本来就随便瞎写的（）
- 本项目仅供参考，不保证能兼容所有程序
- 目前只针对 [hyperzlib/DG-Lab-Coyote-Streaming-Widget](https://github.com/hyperzlib/DG-Lab-Coyote-Streaming-Widget) 做了兼容
- 代码中有非常多非标准的操作，如果要用在其他程序上，需要注意修改（也许可以发个issue让我来改改？）

## ⚡⚡⚡
- QQ群: `G4YDAMBYGAYDAOI=` （自己解密.jpg）