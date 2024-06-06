
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
    console.error('播放音乐时出错:', error);
  });

  // 播放完成后，再次调用 playRandomMusic 函数
  audioPlayer.addEventListener('ended', function() {
    playRandomMusic();
  });
}

// 检测网页可见性变化
document.addEventListener('visibilitychange', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  if (document.visibilityState === 'hidden' && !audioPlayer.paused) {
    audioPlayer.pause();
  }
});

// 创建音频上下文
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let isPlaying = false;

// 创建一个GainNode，我们可以连接到音频输出
const gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

// 创建一个analyser节点
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// 定期检查音频输出
function checkAudioOutput() {
  requestAnimationFrame(checkAudioOutput);

  // 将数据复制到dataArray中
  analyser.getByteFrequencyData(dataArray);

  // 检查是否有音频信号
  let sum = 0;
  for (let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
  }
  const average = sum / bufferLength;

  // 如果平均音量大于某个阈值，则认为有声音在播放
  if (average > 10) {
    if (!isPlaying) {
      console.log('有声音在播放');
      isPlaying = true;
      // 暂停音乐播放器
      if (!document.getElementById('audioPlayer').paused) {
        document.getElementById('audioPlayer').pause();
      }
    }
  } else {
    isPlaying = false;
  }
}

// 开始检测
checkAudioOutput();
