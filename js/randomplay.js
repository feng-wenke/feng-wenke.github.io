/*
document.addEventListener('DOMContentLoaded', function() {
  //移除加载自动播放代码
  //playRandomMusic();
});

function playRandomMusic() {
  var audioPlayer = document.getElementById('audioPlayer');
  var musicList = [
    '../video/晚夜微风问海棠.mp3',
    '../video/精卫.mp3',
    '../video/记念.mp3',
    '../video/阿嬷.mp3'
    // 更多音乐文件...
  ];

  var randomIndex = Math.floor(Math.random() * musicList.length);
  var musicPath = musicList[randomIndex];
  
  // 更新音频源的 src 属性为随机选择的音乐文件
  audioPlayer.src = musicPath;
  
  // 播放音乐
  audioPlayer.play().catch(error => {
    console.error('播放音乐时出错:', error);
  });

  // 播放完成后，再次调用 playRandomMusic 函数
  audioPlayer.addEventListener('ended', function() {
    playRandomMusic();
  });
}
*/
document.addEventListener('DOMContentLoaded', function() {
  // 移除自动播放的代码
  // playRandomMusic();

  // 创建播放和暂停按钮
  var playButton = document.createElement('button');
  playButton.textContent = '播放音乐';
  playButton.addEventListener('click', function() {
    playRandomMusic();
  });

  var pauseButton = document.createElement('button');
  pauseButton.textContent = '暂停音乐';
  pauseButton.addEventListener('click', function() {
    audioPlayer.pause();
  });

  // 将按钮添加到页面中
  document.body.appendChild(playButton);
  document.body.appendChild(pauseButton);
});

function playRandomMusic() {
  var audioPlayer = document.getElementById('audioPlayer');
  var musicList = [
    '../video/晚夜微风问海棠.mp3',
    '../video/精卫.mp3',
    '../video/记念.mp3',
    '../video/阿嬷.mp3'
    // 更多音乐文件...
  ];

  var randomIndex = Math.floor(Math.random() * musicList.length);
  var musicPath = musicList[randomIndex];
  
  // 更新音频源的 src 属性为随机选择的音乐文件
  audioPlayer.src = musicPath;
  
  // 播放音乐
  audioPlayer.play().catch(error => {
    console.error('播放音乐时出错:', error);
  });

  // 播放完成后，再次调用 playRandomMusic 函数
  audioPlayer.addEventListener('ended', function() {
    playRandomMusic();
  });
}
