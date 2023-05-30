let oui = document.getElementById("oui");
oui.addEventListener("click", function() {
    let sms = document.getElementById("sms");
    sms.style.display='block';
    this.style.display='none';
})