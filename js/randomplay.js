
/*document.addEventListener('DOMContentLoaded', function() {
  playRandomMusic();
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
}*/
document.addEventListener('DOMContentLoaded', function() {
  playRandomMusic();
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
    console.error('播放音乐时出错：', error);
  });

  // 播放完成后，再次调用 playRandomMusic 函数
  audioPlayer.addEventListener('ended', function() {
    playRandomMusic();
  });

  // 检查页面是否有其他音频元素在播放
  checkForOtherAudio();
}

function checkForOtherAudio() {
  // 获取页面上所有的音频元素
  var audioElements = document.querySelectorAll('audio');
  
  // 遍历所有的音频元素
  audioElements.forEach(function(audioElement) {
    audioElement.addEventListener('play', function() {
      // 当有其他音频开始播放时，停止当前的音频播放
      stopCurrentAudio(audioPlayer);
    });
  });
}

function stopCurrentAudio(audioPlayer) {
  // 停止当前的音频播放
  audioPlayer.pause();
  // 清除结束事件监听器
  audioPlayer.removeEventListener('ended', playRandomMusic);
  // 重新调用 playRandomMusic 函数来播放下一首歌曲
  playRandomMusic();
}
