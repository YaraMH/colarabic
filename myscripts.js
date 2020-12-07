function isHarake(c) {
     if (c == "َ" || c == "ُ" || c == "ِ" || c == "ٍ" || c == "ٌ" || c== "ً")
            return true;
        else return false;
    }
    function isHaref(a){
        var letters = ['د', 'ج' ,'ح', 'خ', 'ه', 'ع', 'غ', 'ف', 'ق', 'ث', 'ص', 'ض', 'ش', 'س', 'ي', 'ب', 'ل' ,'ا', 'ت' ,'ن' , 'ك', 'ط' , 'ز' ,'و' ,'ة', 'ى' ,'ر' ,'ؤ' ,'ء' ,'ئ' , 'أ' ,'إ' ,'آ' ,'ء','م' , 'ذ'];
        for(var i=0; i<letters.length;i++){
              if(a==letters[i])
                  return true;
        }
        return false;
    }

    function colorText() {
    if(document.getElementById("originalText").value == '')
    {
    alert("لم تدخل أي نص. الرجاء المحاولة مجدداً.");
   return ;
    }
    var text = document.getElementById("originalText").value;
    var i = 0;
    var text1;
    var isColored=true;
    while (i < text.length) {     
      if(text.charAt(i)=='\n'){
        document.getElementById("coloredText").innerHTML+= "<br/>"
        i+=1;
        continue;
      }
      else if(!isHarake(text.charAt(i)) && !isHaref(text.charAt(i))) {
        text1=text[i] ;
        i=i+1;
      }
      else if ((text.charAt(i + 3) == "ل" && text.charAt(i + 2) == "ا" && (text.charAt(i) == "ب"  ) && isHarake(text.charAt(i+1)))  && text.charAt(i+1)!= " " && text.charAt(i+2)!= " " ) {
            text1 = text[i] + text[i + 1] + text[i + 2] + text[i+3];
            i = i + 4;
          
            if(isHarake(text.charAt(i)))
            {
              text1+=text[i];
              i+=1;
            }
        } 

        else if ((text.charAt(i + 2) == "ل" && text.charAt(i + 1) == "ا" && text.charAt(i) == "ب"  && !isHarake(text.charAt(i+1)))  && text.charAt(i+1)!= " " && text.charAt(i+2)!= " " ) {
            text1 = text[i] + text[i + 1] + text[i + 2] ;
            i = i + 3;
          
            if(isHarake(text.charAt(i)))
            {
              text1+=text[i];
              i+=1;
            }

        }
        else if (text.charAt(i + 1) == "ل" && text.charAt(i) == "ا" && (text.charAt(i + 3) != "ّ" && text.charAt(i + 4) != "ّ")) {
            text1 = text[i] + text[i + 1];
            i = i + 2;
        } 
        else if (text.charAt(i + 1) == "ل" && text.charAt(i) == "ا" && (text.charAt(i + 3) == "ّ" || text.charAt(i + 4) == "ّ")) {
            text1 = text[i] + text[i + 1] + text[i + 2] + text[i + 3];
            if (isHarake(text.charAt(i + 3)) || isHarake(text.charAt(i + 4))) {
                text1 += text[i + 4];
                i = i + 5;
            } else
               { i = i + 4;}
            if (text.charAt(i + 1) == "ْ") {
                text1 += text[i] + text[i + 1];
                i = i + 2;
            }
            else if(text.charAt(i) == "و" || text.charAt(i) == "ا" || text.charAt(i) == "ي" || text.charAt(i)=='ى'){
              text1+=text[i];
              i+=1;
              if(isHarake(text.charAt(i)))
              {
                text1+=text[i];
                i+=1;
              }
            }
        } 
        else if (text.charAt(i + 3) == "ْ") {
            text1 = text[i] + text[i + 1] + text[i + 2] + text[i + 3];
            i = i + 4;
        }  
        else if ((isHarake(text.charAt(i+1)) && (text.charAt(i + 2) == "و" || (text.charAt(i + 2) == "ا" && text.charAt(i+3)!= "ل" )|| text.charAt(i + 2) == "ي" || text.charAt(i+2)=='ى')) ||   (!isHarake(text.charAt(i+1)) && (text.charAt(i + 1) == "و" || text.charAt(i + 1) == "ا"  || text.charAt(i + 1) == "ي" || text.charAt(i+1)=='ى')) ) {
            if((isHarake(text.charAt(i+1)) && text.charAt(i + 3) == "و" || text.charAt(i + 3) == "ا"|| text.charAt(i + 3) == "ي" || text.charAt(i+3)=='ى' ) || (!isHarake(text.charAt(i+1)) && text.charAt(i + 2) == "و" || text.charAt(i + 2) == "ا"|| text.charAt(i + 2) == "ي" || text.charAt(i+2)=='ى' ))
            {
              text1=text[i];
              if(isHarake(text.charAt(i + 1))){
                text1+=text[i+1];
                i = i + 2;
              }
              else 
                i = i + 1;
            }
            else{
            text1 = text[i] + text[i + 1];
            if(isHarake(text.charAt(i + 1)))
                {
                  text1+=text[i + 2];
                  i=i+3;
                }
            else 
               i = i + 2;
             if(isHarake(text.charAt(i)))
             {
              text1+=text[i];
              i+=1;
             }
             else if(text.charAt(i)=="ّ")
             {
              text1+=text[i];
              i+=1;
              if(isHarake(text.charAt(i)))
              {
                text1+=text[i];
                i+=1;
              }
             }
             }

        } 
          else if ( ((isHarake(text.charAt(i+1)) && text.charAt(i + 2) == "ّ") || (isHarake(text.charAt(i+2)) && text.charAt(i + 1) == "ّ")) && (text.charAt(i + 3) == "و" || text.charAt(i + 3) == "ا" || text.charAt(i + 3) == "ي" || text.charAt(i+2)=='ى') ) {
            text1 = text[i] + text[i + 1] + text[i+2] +text[i+3];
            i = i + 4;
        } 
        else if (text.charAt(i + 1) == "ّ" ||  (text.charAt(i + 2) == "ّ" && isHarake(text.charAt(i+1))) ){
          text1=text[i]+text[i+1];
          if(isHarake(text.charAt(i+1)) || isHarake(text.charAt(i+2))){
            text1+=text[i+2];
            i=i+3;
          }
          else i=i+2;
        }
        else if (isHarake(text.charAt(i + 1))) {
            text1 = text[i] + text[i + 1];
            i = i + 2;
        } 
        else if (text.charAt(i + 1) == "ً" && text.charAt(i + 2) == "ا") {
            text1 = text[i] + text[i + 1] + text[i + 2];
            i = i + 3;
        } 
        else {
           text1 =text[i];
           i++;
        }
        if((text.charAt(i)=='إ' || text.charAt(i)=='أ' || text.charAt(i)=='ا') && text.charAt(i-1)=="ل" )
        {
          text1+=text[i];
          i++;
        }
  
        var x = document.createElement("SPAN");
        if(isHarake(text1.charAt(0)) || isHaref(text1.charAt(0)))
        { if (!isColored) {
           x.style.color="red";
            isColored=true;
        } else {
            isColored=false;
        }
        }
        var t = document.createTextNode(text1);
        x.appendChild(t);
        document.getElementById("coloredText").appendChild(x);  
    }
    hideDisplay();
}

function hideDisplay() {
  sizeFunction();
  var x = document.getElementById("originalText");
  var y = document.getElementById("coloredText");
  var z = document.getElementById("colorButton");
  var w =document.getElementById("backButton");
  var clBtn = document.getElementById("clearButton");
  //var ui = document.getElementById("cloud");
  if (x.style.display === "none") {
    x.style.display = "block";   
    z.style.display = "block";
    clBtn.style.display = "block";
    w.style.display ="none";
    w.style.visibility="hidden";
    y.innerHTML = '';
    y.style.display ="none";
    y.style.visibility ="hidden";
    //ui.style.visibility = "visible";

  } else {
    x.style.display = "none";
    z.style.display="none";
    clBtn.style.display="none";
    w.style.display="block";
    y.style.display ="block";
    y.style.visibility ="visible";
    w.style.visibility ="visible";
    //ui.style.visibility = "hidden";
  }
}

function sizeFunction(){
var w = window.innerWidth;
var x = document.getElementById("backButton");
var y = document.getElementById("logo");
if(w<900){
 x.style.marginRight="160px";
 x.style.marginTop="50px";
 x.style.position="static";
 y.style.zIndex = "-1";
}
else {
  x.style.position="fixed";
x.style.marginRight="50px";
  y.style.zIndex = "0";
  x.style.marginTop="0px";
}
}


function clearText(){
 return  document.getElementById("originalText").value='';
}
