//音乐随机播放
document.addEventListener('DOMContentLoaded', function() {
    // 确保音频播放器已经加载
    var audioPlayer = document.getElementById('audioPlayer');
  //加载完成开始播放
    if (audioPlayer) {
        playRandomMusic();
    }
});

var isPlaying = false;

function playRandomMusic() {
    var audioPlayer = document.getElementById('audioPlayer');
    var musicList = [
        '../video/晚夜微风问海棠.mp3',
        '../video/精卫.mp3',
        '../video/不问别离.mp3',
        '../video/天下.mp3',
        '../video/人间惊鸿客.mp3',
        '../video/半壶纱.mp3',
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

    // 设置播放状态为播放
    isPlaying = true;
}

function togglePlayPause() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (isPlaying) {
        // 如果正在播放，则暂停
        audioPlayer.pause();
        isPlaying = false;
    } else {
        // 如果暂停，则播放
        audioPlayer.play().catch(error => {
            console.error('播放音乐时出错:', error);
        });
        isPlaying = true;
    }
}



//网页加载完成点击链接新标签页面打开链接
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有链接元素
  var links = document.querySelectorAll('a');

  // 遍历所有链接元素，并添加target="_blank"属性
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
  }
});
