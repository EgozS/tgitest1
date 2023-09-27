const cloud = "./icons/cloud.png";
const sun = "./icons/sun.png";
const snow = "./icons/snow.png";

function justNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

window.onload = function () {
    let temp1 = document.getElementById("temp1");
    let temp2 = document.getElementById("temp2");
    let temp3 = document.getElementById("temp3");
    let temp4 = document.getElementById("temp4");

    let temps = [temp1, temp2, temp3, temp4];

    let temp1Value = temps[0].textContent;
    let temp2Value = temps[1].textContent;
    let temp3Value = temps[2].textContent;
    let temp4Value = temps[3].textContent;
    
    temp1Value = justNumbers(temp1Value);
    temp2Value = justNumbers(temp2Value);
    temp3Value = justNumbers(temp3Value);
    temp4Value = justNumbers(temp4Value);

    let values = [temp1Value, temp2Value, temp3Value, temp4Value];


    let icon1 = document.getElementById("icon1");
    let icon2 = document.getElementById("icon2");
    let icon3 = document.getElementById("icon3");
    let icon4 = document.getElementById("icon4");

    let icons = [icon1, icon2, icon3, icon4];    

    for (let i = 0; i < values.length; i++) {
        if (values[i] >= 30) {
            icons[i].src = sun;
        } else if (values[i] < 20) {
            icons[i].src = snow;
        } else {
            icons[i].src = cloud;
        }
    }
}