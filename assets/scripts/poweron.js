let progressBarFlag = false

const poweronbtn = document.getElementById("poweronbtn");

poweronbtn.addEventListener("click", () => {
    poweronbtn.style.display = "none"
    document.getElementById("progressWrapper").style.display = "block"
    progressBarFlag = true
})

document.addEventListener("DOMContentLoaded", () => {
    var progressBar = document.getElementById("progressBar");
    var progressValue = 0;
    
    const progressBarUpdate = () => {
        if (progressValue < 100 && progressBarFlag) {
            progressValue++;
            progressBar.style.width = progressValue + "%";
            progressBar.innerHTML = progressValue + "%";
            progressBar.setAttribute("aria-valuenow", progressValue)
        }
        else if (progressValue >= 100) {
            progressBarFlag = false;
            document.getElementById("loginPage").click();
        }
    }
    setInterval(progressBarUpdate, 100)
})