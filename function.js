//variable declaration for element
var popup_div=document.getElementById("popup_div")
var msg_div=document.getElementById("msg_div")
var inner_msgdiv=document.getElementById("inner_msgdiv")
var loc_div=document.getElementById("loc_div")
var lati=document.getElementById("lati")
var longi=document.getElementById("longi")
var back_btn=document.getElementById("back_btn")
var send_btn=document.getElementById("send_btn")
var share_btn=document.getElementById("share_btn")
var lati_longi=document.getElementById("lati_longi")
// getting latitude and longitude
var send_location=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show_pos,show_error)
    }
    else{
        alert("Geolocation is not supported by this browser.")
    }
};
// To print the current location
var show_pos=(position)=>{
    var lat=position.coords.latitude
    var long=position.coords.longitude
    document.getElementById("popup")
    console.log(lat,long)
    // lati.append(lat)
    // longi.append(long)
    // lati_longi.append(lat+" "+long)
    lati.textContent="Latitude : "+lat
    longi.textContent="Longitude : "+long
    lati_longi.textContent="Location : "+lat+" "+long
}
// To return the type of the error
var show_error=(error)=>{
    //switch case statement
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("User denied the request")
            break
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable")
            break
        case error.TIMEOUT:
            alert("The request is timeout")
            break
        default:
            alert("Unknown error occured")
            break
    }
}
//
share_btn.addEventListener("click",popup_box)
function popup_box(){
    popup_div.style.display="block"
    msg_div.style.display="block"
    inner_msgdiv.style.display="block"
    
}

// To return main page
document.getElementById("ok_btn").addEventListener("click",return_main)     //Event listener
function return_main(){
    popup_div.style.display="none"
    msg_div.style.display="none"
}

// To see latitude and longitude
document.getElementById("info_btn").addEventListener("click",show_info)     //Event listener
function show_info(){
    loc_div.style.display="block"
    inner_msgdiv.style.display="none"
    // lati.append(lat)
    // longi.append(long)
}

back_btn.addEventListener("click",back_menu)
function back_menu(){
    loc_div.style.display="none"
    inner_msgdiv.style.display="block"
}