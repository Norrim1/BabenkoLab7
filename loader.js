document.addEventListener("DOMContentLoaded", () => {
    const progressElement = document.getElementById("progress");
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            document.getElementById("loading-screen").style.display = 'none';
            document.getElementById("first-registration-screen").style.display = 'flex';
        }
        progressElement.style.width = progress + "%";
    }, 200);
});