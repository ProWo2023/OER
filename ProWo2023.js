function riddle00_01(){
  wert=document.getElementById('enterCode').value.trim() ;
   
  if (wert=='1234') {
    document.getElementById('richtig').style.visibility= 'visible' ;
    document.getElementById('falsch').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch').style.visibility= 'visible' ;
    document.getElementById('richtig').style.visibility= 'hidden' ;
  }
}

function riddle00_02(){
  wert=document.getElementById('enterCode').value.trim() ;
   
  if (wert=='erk') {
    document.getElementById('richtig').style.visibility= 'visible' ;
    document.getElementById('falsch').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch').style.visibility= 'visible' ;
    document.getElementById('richtig').style.visibility= 'hidden' ;
  }
}
