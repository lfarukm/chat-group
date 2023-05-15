const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

function mesajGonder(){
    var metin = document.getElementById("mesaj").value;
    var yeniElement = document.createElement("p");
    var icerik = document.createTextNode(metin);
    yeniElement.appendChild(icerik);
    var icerik = document.getElementById("icerik");
    icerik.appendChild(yeniElement);
    
    document.getElementById("mesaj").value = "";
    document.getElementById("icerik").scrollTop += 9999; /* yazdıkça scrollda gelsin */
    
}
    document.getElementById("mesaj").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("button").click();
            document.getElementById("icerik").scrollTop += 9999; /* yazdıkça scroolda gelsin */
        }
});
function getIp(callback) {
    fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'us',
        };
      })
      .then((resp) => callback(resp.country));
   }
   
     const phoneInputField = document.querySelector("#phone");
     
     const phoneInput = window.intlTelInput(phoneInputField, {
       preferredCountries: ["tr","us", "co", "in", "de"],
       geoIpLookup: getIp,
       utilsScript:
         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
     });


