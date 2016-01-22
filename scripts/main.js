var toggleFLButton;
var msg;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
    toggleFLButton = document.getElementById("buttonToggleFL");
    toggleFLButton.addEventListener("click", toggleFlashLight);
}

function toggleFlashLight() {
    if (window.navigator.simulator === true) {
        //alert("Not Supported in Simulator.");
        var cs = document.defaultView.getComputedStyle(toggleFLButton, null);
        var bg = cs.getPropertyValue('background-image');

        if (bg.match("on130")) {
            toggleFLButton.style.background = "center url('styles/img/off130.png') #242424 no-repeat";
        }
        else {
            toggleFLButton.style.background = "center url('styles/img/on130.png') #242424 no-repeat";
        }
        window.plugins.flashlight.toggle(onSuccess, onError);
    }
    else {
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                // toggle on/off
                //if (toggleFLButton.textContent === "ON") {
                //    toggleFLButton.textContent = "OFF";
                //}
                //else {
                //    toggleFLButton.textContent = "ON";
                //} 
                //window.plugins.flashlight.toggle(onSuccess, onError);
                var cs = document.defaultView.getComputedStyle(toggleFLButton, null);
                var bg = cs.getPropertyValue('background-image');

                if (bg.match("on130")) {
                    toggleFLButton.style.background = "center url('styles/img/off130.png') #242424 no-repeat";
                }
                else {
                    toggleFLButton.style.background = "center url('styles/img/on130.png') #242424 no-repeat";
                }
                window.plugins.flashlight.toggle(onSuccess, onError);
            }
            else {
                alert("aFlash not available on this device");
            }
        });
    }
}

function onSuccess() {
    msg = "Device flashlight has been toggled successfully!";
    showMessage(msg);
}
    
function onError() {
    msg = "Something went wrong. aFlash could not be turned on";
    showMessage(msg);
}
    
function showMessage(text) {
    var statusBox = document.getElementById('result');
   statusBox.textContent = text;
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("on130")) {
        image.src = "styles/img/off130.png";
    } else {
        image.src = "styles/img/on130.png";
    }
}
/*
function changeImage1() {
    var e = document.getElementById('buttonToggleFL');
    var cs = document.defaultView.getComputedStyle(e, null);
    var bg = cs.getPropertyValue('background-image');
    if (bg.match("on130")) {
        e.style.background = "center url('styles/img/off130.png') #242424 no-repeat";
        //cs.PropertyValue('background-image') = "styles/img/off130.png";
    } else {
        e.style.background = "center url('styles/img/on130.png') #242424 no-repeat";
        //cs.PropertyValue('background-image') = "styles/img/on130.png";
    }
}
*/