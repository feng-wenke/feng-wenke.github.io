document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');

    button.addEventListener('click', function() {
        // 添加.temp-background类
        this.classList.add('temp-background');

        // 设置一个计时器，用于在0.1秒后移除.temp-background类
        setTimeout(function() {
            button.classList.remove('temp-background');
        }, 100); // 0.1秒后恢复原样
    });
});
