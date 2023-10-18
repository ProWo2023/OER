function jimdoJStest(){
  location.assign('https://www.zdf.de/');
}

function riddle00_01(){
  //document.getElementById('id1').style.color = 'red';

  wert1=document.getElementById('enterCode').value ;
  wert=wert1.trim();
  //document.getElementById('ausgabe').innerHTML = wert ;
  
  if (wert=='9') {
    document.getElementById('richtig').style.visibility= 'visible' ;
    document.getElementById('falsch').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch').style.visibility= 'visible' ;
    document.getElementById('richtig').style.visibility= 'hidden' ;
  }
  
}
