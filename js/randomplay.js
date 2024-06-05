
function playRandomMusic() {
  // 生成一个随机索引
  var audioPlayer = document.getElementById('audioPlayer');
  var musicList = audioPlayer.querySelectorAll('source');
  var randomIndex = Math.floor(Math.random() * musicList.length);
  // 更新音频源的 src 属性为随机选择的音乐文件
  audioPlayer.src = musicList[randomIndex].src;
  audioPlayer.load();
  audioPlayer.play();
}
