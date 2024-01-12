var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
var qrCodeContainer = document.getElementById('qr-code-container');

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    if(URLinput.value === ""|| null){
        alert("Enter URL");
    }
    else{
        sendURL(URLinput.value);
    }
    
});


//MP4

document.getElementById('144p30_mp4_button').addEventListener('click', () => {
    if(URLinput.value === ""|| null){
        alert("Enter URL");
    }
    else{
        sendURLWithFormat(URLinput.value, '144p', 30, 'mp4');
    }
    
});

document.getElementById('240p30_mp4_button').addEventListener('click', () => {
    if(URLinput.value === ""|| null){
        alert("Enter URL");
    }
    else{
        sendURLWithFormat(URLinput.value, '240p', 30, 'mp4');
    }
    
    
});

document.getElementById('360p30_mp4_button').addEventListener('click', () => {
    if(URLinput.value === ""|| null){
        alert("Enter URL");
    }
    else{
        sendURLWithFormat(URLinput.value, '360p', 30, 'mp4');
    }

   
});

document.getElementById('480p30_mp4_button').addEventListener('click', () => {
    if(URLinput.value === ""|| null){
        alert("Enter URL");
    }
    else{
        sendURLWithFormat(URLinput.value, '480p', 30, 'mp4');
    }
    
});

document.getElementById('720p30_mp4_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '720p', 30, 'mp4');
    }
});

document.getElementById('720p60_mp4_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '720p60', 60, 'mp4');
    }
});

document.getElementById('1080p_mp4_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '1080p', 30, 'mp4');
    }
});

document.getElementById('1080p60_mp4_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '1080p60', 60, 'mp4');
    }
});

//webm

document.getElementById('144p30_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '144p', 30, 'webm');
    }
});

document.getElementById('240p30_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '240p', 30, 'webm');
    }
});

document.getElementById('360p30_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '360p', 30, 'webm');
    }
});

document.getElementById('480p30_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '480p', 30, 'webm');
    }
});

document.getElementById('720p30_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '720p', 30, 'webm');
    }
});

document.getElementById('720p60_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '720p60', 60, 'webm');
    }
});

document.getElementById('1080p_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '1080p', 30, 'webm');
    }
});

document.getElementById('1080p60_webm_button').addEventListener('click', () => {
    if (URLinput.value === "" || URLinput.value === null) {
        alert("Enter URL");
    } else {
        sendURLWithFormat(URLinput.value, '1080p60', 60, 'webm');
    }
});


function sendURL(URL) {
    window.location.href = `https://yt-downloder-pcxl.onrender.com/download?URL=${URL}`;
}

function sendURLWithFormat(URL, qualityLabel, fps, container) {
    console.log(`URL: ${URL}`);
    window.location.href = `https://yt-downloder-pcxl.onrender.com/download?URL=${URL}&qualityLabel=${qualityLabel}&fps=${fps}&container=${container}`;
}


document.getElementById('generate-qrcode-button').addEventListener('click', () => {
    fetch('https://yt-downloder-pcxl.onrender.com/link')
        .then(response => response.text())
        .then(downloadLink => generateQRCode(downloadLink))
        .catch(error => console.error('Error fetching download link:', error));
});

function generateQRCode(url) {
    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    // Create a new QR code instance
    var qrcode = new QRCode(qrCodeContainer, {
        text: url,
        width: 300,
        height: 300
        
    });
}