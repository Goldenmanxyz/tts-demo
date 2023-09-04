const synth = window.speechSynthesis; // 启用文本
const msg = new SpeechSynthesisUtterance(); // 表示一次发音请求。其中包含了将由语音服务朗读的内容，以及如何朗读它（例如：语种、音高、音量）。
// 语音播报的函数
export function handleSpeak(text) {
    msg.text = text; // 文字内容: 测试内容
    msg.lang = "zh-CN"; // 使用的语言:中文
    msg.volume = 1; // 声音音量：1
    msg.rate = 1; // 语速：1
    msg.pitch = 1; // 音高：1
    synth.speak(msg); // 播放
}
// 语音停止
export function handleStop(e) {
    msg.text = e;
    msg.lang = "zh-CN";
    synth.cancel(msg); // 取消该次语音播放
}