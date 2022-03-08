setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  let ap = document.getElementById("ap");

  if(d.getHours()>12){
      
      ap.innerHTML = "PM"
    }else{
    ap.innerHTML = "AM"
    }
  document.getElementById("saat").innerHTML=
  d.getHours().toString().padStart(2,0) + ":" +
  d.getMinutes().toString().padStart(2,0) + ":" +
  d.getSeconds().toString().padStart(2,0) ;

  
}
