function showLoading() {
    let loading = document.getElementById('loading');
    loading.style.display = 'flex';
    let logoCat = document.getElementById('logoCat');
    let spinner = logoCat.animate([
        {
            transform: 'rotate(0)'
            
        },
        {
            transform: 'rotate(359deg)'
        }
    ], {
        duration: 1000,
        iterations: Infinity,
    }
    );
    spinner.playbackRate = .5;
    let percentLoad = document.getElementById('percentLoad');
    let timeOut = 100;
    for (let i = 1; i < 100; i++) {
        timeOut = timeOut + (i + 1);
        setTimeout(() => {
            percentLoad.innerHTML = i + " %";
        }, timeOut);
    };
    setTimeout(() => {
        for (let i = 99; i <= 100; i++) {
            timeOut = timeOut + (i + 50);
            setTimeout(() => {
                percentLoad.innerHTML = i + " %";
            }, timeOut);
        }
    }, 200);
    setTimeout(() => {
        window.location = './HTML/home.html';  
    }, 5700);
}