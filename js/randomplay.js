
// 随机播放音乐的函数
function playRandomMusic() {
  var audioPlayer = document.getElementById('audioPlayer');
  var musicList = [
  '../video/晚夜微风问海棠.mp3',
  '../video/精卫.mp3',
 ' ../video/记念.mp3',
  '../video/阿嬷.mp3'
  // 更多音乐文件...
];
  var randomIndex = Math.floor(Math.random() * musicList.length);
  var musicPath = musicList[randomIndex];
  // 更新音频源的 src 属性为随机选择的音乐文件
 audioPlayer.src = musicPath;
  // 播放音乐
  audioPlayer.play();
}
