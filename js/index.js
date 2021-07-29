var myVar;

function myFunction() {
    
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loading-image").style.display = "none";
  document.getElementById("myPage").style.display = "block";
}
function dieuHuong(){
    location.assign("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=0644b401-dac4-483c-9f86-e042874f0e8e&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fassessment.vlu.edu.vn&client-request-id=5d26da1c-4095-4ec0-9b17-e8e8378eb6ee&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.12.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=hD2adrfWd2KKexWW7ytax1aRj2HuX6pJg0BkDZgsDSg&code_challenge_method=S256&nonce=868c1b1e-6eaa-4b6f-8020-85e6c6334f21&state=eyJpZCI6ImYzZmY4MTg3LWEzZTMtNDgyNS1hYjA5LTE5ZTczZDNkZGEyYyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D");
}