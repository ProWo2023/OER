// 
function riddle01_01(){
  wert1=document.getElementById('enterCode').value ;
  wert=wert1.trim();
    
  if (wert=='R' || wert=='r') {
    document.getElementById('richtig').style.visibility= 'visible' ;
    document.getElementById('falsch').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch').style.visibility= 'visible' ;
    document.getElementById('richtig').style.visibility= 'hidden' ;
  }
  
}

// function riddle01_02(){
  wert1=document.getElementById('enterCode').value ;
  wert=wert1.trim();
  
  if (wert=='A' || wert=='a') {
    document.getElementById('richtig1').style.visibility= 'visible' ;
    document.getElementById('falsch1').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch1').style.visibility= 'visible' ;
    document.getElementById('richtig1').style.visibility= 'hidden' ;
  }
  
}

// 
function riddle01_03(){
  wert1=document.getElementById('enterCode').value ;
  wert=wert1.trim();
  
  if (wert=='9') {
    document.getElementById('richtig1').style.visibility= 'visible' ;
    document.getElementById('falsch1').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch1').style.visibility= 'visible' ;
    document.getElementById('richtig1').style.visibility= 'hidden' ;
  }
  
}

// 
function riddle01_04(){
  wert1=document.getElementById('enterCode').value ;
  wert=wert1.trim();
  
  if (wert=='4') {
    document.getElementById('richtig1').style.visibility= 'visible' ;
    document.getElementById('falsch1').style.visibility= 'hidden' ;
  } else {
    document.getElementById('falsch1').style.visibility= 'visible' ;
    document.getElementById('richtig1').style.visibility= 'hidden' ;
  }
  
}
