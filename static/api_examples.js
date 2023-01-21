function toggleapidemo(ev) {
    let apidemo = document.getElementById("apidemo");
    apidemo.style.display = apidemo.style.display ? "" : "none";
}

window.onload = function() {
    let apiFrame = document.createElement("div");
    apiFrame.style.position = 'fixed';
    apiFrame.style.left = 0;
    apiFrame.style.top = '4em';
    apiFrame.style.zIndex = 1000;
    apiFrame.style.padding = 0;
    apiFrame.style.backgroundColor = 'rgb(51,204,204)';

    apiFrame.innerHTML = "\
        <div ><a href='#' onclick='toggleapidemo(event)'><img src='/assets/img/banner.jpg' alt='Seydaloğlu' width='120'></a></div>\
        <div id='apidemo' style='display: none; padding: 0.25em; text-align: center;'>\
        <div><h2>Seydaloğlu Yapı</h2></div>\
        <div><b>Telefon:</b> 0(532) 532 70 05</div>\
        <div><b>E-Posta:</b> hsivri@seydalogluyapi.com</div>\
        <div><b>Adres:</b> Merkez mah. Limon Sk. No:53/2 <br/>Kağıthane/ İstanbul</div>\
        <div><b>Web Sitesi:</b> <a href='http://www.seydalogluyapi.com/' target='_blank' rel='noopener noreferrer'>www.seydalogluyapi.com/</a></div>\
        </div>";
    document.body.appendChild(apiFrame);
};
