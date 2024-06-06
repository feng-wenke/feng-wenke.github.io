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
    // 确保音频播放器已经加载
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        playRandomMusic();
    }
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

function togglePlayPause() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// 播放/暂停按钮
document.querySelector('.button-container button:first-child').addEventListener('click', function() {
    togglePlayPause();
});

// 随机播放按钮
document.querySelector('.button-container button:nth-child(2)').addEventListener('click', function() {
    playRandomMusic();
});
