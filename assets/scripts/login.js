
let systemPswd = "1234";
let desktopPage = document.getElementById("desktopId");

document
    .getElementById("enterIcon")
    .addEventListener("click", () => {
        let passwordElement = document.getElementById("password")
        let userPswd = passwordElement.value;
        if (userPswd === systemPswd) {
            desktopPage.click();
        }
        else {
            console.log("try again");
        }
        passwordElement.value = "";
    })