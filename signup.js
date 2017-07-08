function signupCheck(){
  var textvalue = document.getElementByName('phone')[0].value;
  if (textvalue.length != 11)
  {
   document.getElementById('phonemsg').innerHTML = '11 DIGITS PLEASE';
  } eles {
      for (var i=0;i<textvalue.length;i++){
        if (textvalue.substr(i,1)<"0" || textvalue.substr(i,1)>"9"){
        document.getElementById('phonemsg').innerHTML = 'ALL NUMBERS PLEASE';
        }
      }
  }
}
