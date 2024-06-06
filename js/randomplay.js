
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
  // 播放随机音乐
  playRandomMusic();

  // 监听哔哩哔哩视频播放状态
  function checkBilibiliVideoPlaying() {
    // 获取哔哩哔哩内嵌视频元素
    const video = document.querySelector('../site/.video-container');
    // 检查视频是否正在播放
    if (video && video.playing) {
      // 停止音频播放器
      var audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.pause();
      console.log('哔哩哔哩内嵌视频正在播放，已停止音乐播放器');
    }
  }

  // 每秒检查一次哔哩哔哩视频的播放状态
  setInterval(checkBilibiliVideoPlaying, 1000);
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
}
