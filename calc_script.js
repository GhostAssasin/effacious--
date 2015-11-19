var degree="Deg";
var Inv=true;
var e=2.7182818446;
var ac_ce=0;
var result=[];
result[0]=' ';
result[1]='0';
var headCalc;
var Ans;
var use_eqal=false;
var i_key=1;
var use_zan=true;
var openI=0;
var closeI=0;
var rezultOb;
var mainArray=[];
var po=false;


$(document).ready(function(){
        $("#result_text").html(result[i_key]);
});

function turn()
{	if(degree==="Deg"){
	document.getElementById('imgg').style.float='right';
	degree="Rad";
	}
	else{
	document.getElementById('imgg').style.float='left';
	degree="Deg";
	}
}


function Invercion()
{
	if(Inv){
	document.getElementById('Invimg').src='images/lnv2.png';
	document.getElementById('sinimg').src='images/arsin.png';
	document.getElementById('lnimg').src='images/ex.png';
	document.getElementById('cosimg').src='images/arcos.png';
	document.getElementById('logimg').src='images/10pow.png';
	document.getElementById('tanimg').src='images/artan.png';
	document.getElementById('sqrtimg').src='images/pow.png';
	document.getElementById('powimg').src='images/sqrt1.png';
	document.getElementById('ansimg').src='images/Rnd.png';	
	Inv=false;
	}
	else{
	document.getElementById('Invimg').src='images/lnv1.png';
	document.getElementById('sinimg').src='images/sin.png';
	document.getElementById('lnimg').src='images/ln.png';
	document.getElementById('cosimg').src='images/cos.png';
	document.getElementById('logimg').src='images/log.png';
	document.getElementById('tanimg').src='images/tan.png';
	document.getElementById('sqrtimg').src='images/sqrt.png';
	document.getElementById('powimg').src='images/pow.png';
	document.getElementById('ansimg').src='images/ans.png';	

	Inv=true;
	}
}


function keyboard(key) {
		use_zan=true;
		if(Inv==false){
			switch(key){
				case 'sin(': key="arsin("; break;
				case 'ln(': key="e("; break;
				case 'cos(':key="arcos("; break;
				case 'log(':key="10^";break;
				case 'tan(':key="artan(";break;
				case 'sqrt(':key="^2";break;
				case '^':key="^(1/";break;
			};
		}
		if(key=='Ans'){key=String(Ans);}
		console.log(i_key);
        if(i_key===1){
			result[1]=key;
            result[2]=key;
            i_key++;
		}
		else
        {
		var i_ke=i_key-1;
		var pr=result[i_ke]+key;
		result[i_key]=String(pr);
        
    }

	$(document).ready(function(){
        $("#result_text").html(result[i_key]);});
	i_key++;
}



function ac(){
	if(use_zan){i_key--; use_zan=false;}
	
	if (use_eqal)
    {
        Ans=rezultOb; 
		use_eqal=false; 
		document.getElementById('acce').src='images/CE.png';
		$(document).ready(function(){
        $("#result_text").html("0");});
        result.splice(2,result.length);
        result[1]="0";
        i_key=1;
        $(document).ready(function(){
        $("#headCalc").html("Ans="+Ans);});
        
	}
	else{
    result.splice(i_key,2);i_key--;
	$(document).ready(function(){
        $("#result_text").html(result[i_key]);});
  }
}

function equall(){
    var promRezut;
    var mainString=result[i_key-1];
    mainString=zamina(mainString);
    transformToArr(mainString);
    //console.log(mainString);
    //console.log(subArray(2,5));
//for (var i20=0;i20<mainArray.length;i20++){console.log(mainArray[i20]);}

  if(aut(mainString)){
    use_eqal=true;
    //console.log(isBracker(mainString));
  if (isBracker(mainString)==0) 
    {
        
        rezultOb=eazu_action(mainString);
        
}
    else
    {
        for(var i17=0;i17<mainArray.length;i17++)
        {
            if (isBracker(mainString)==0)
            {
                rezultOb=eazu_action(subArray(-1,mainArray.length));//??????
                mainArray.splice(1,mainArray.length)
            }
            else
            { 
                lastBracker();
               // console.log(openI);
                //console.log(closeI);
               // for (var i20=0;i20<mainArray.length;i20++){console.log(mainArray[i20]);}
                promRezut=eazu_action(subArray(openI,closeI));
                if( mainArray[openI-1]=='a' || mainArray[openI-1]=='b' || mainArray[openI-1]=='c' || mainArray[openI-1]=='d' || mainArray[openI-1]=='e' || mainArray[openI-1]=='f' || mainArray[openI-1]=='g' || mainArray[openI-1]=='h' || mainArray[openI-1]=='i' || mainArray[openI-1]=='l')
                {if(mainArray[openI-1]=='a')
                    {   if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.asin(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='b')
                    {
                        if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.acos(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                        
                    }
                if(mainArray[openI-1]=='c')
                    {
                        if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.atan(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='d')
                    {
                        if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.sin(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='e')
                    {
                        promRezut=Math.exp(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='f')
                    {
                        if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.cos(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                        
                        
                    }
                if(mainArray[openI-1]=='g')
                    {
                        promRezut=Math.log(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='h')
                    {
                        if(degree=='Rad'){promRezut=Math.PI/180*promRezut;}
                        promRezut=Math.tan(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='i')
                    {
                        promRezut=Math.sqrt(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                if(mainArray[openI-1]=='l')
                    {
                        promRezut=Math.log(promRezut);
                        mainArray[openI-1]=promRezut;
                        mainArray.splice(openI,(closeI-openI+1));
                    }
                    promRezut=0;
                    rezultOb=mainArray[0];
                }
                else
                {                    
                    mainArray[openI]=promRezut;
                    mainArray.splice(openI+1,(closeI-openI));
                    promRezut=0;
                    rezultOb=mainArray[0];

                }

                    
                    
            }
            if(mainArray.length==3){rezultOb=eazu_action(subArray(-1,3)); console.log(subArray(-1,3)); console.log(rezultOb); break;}
        }

    }

    document.getElementById('acce').src='images/AC.png';
    $(document).ready(function(){
        $("#result_text").html(rezultOb);});
        headCalc=result[i_key-1]+'=';
        $(document).ready(function(){
        $("#calcparag").html(headCalc);});
}
else
{
    $(document).ready(function(){
        $("#result_text").html('Error');});
        $(document).ready(function(){
        $("#calcparag").html('');});
}
    mainArray.splice(0,mainArray.length);
}




function lastBracker(){
  for (var i1=0;i1<mainArray.length; i1++) {
    //console.log(mainArray[2]);
  	if(mainArray[i1]==')') {closeI=i1;  break;}
  };
  for(var i2=closeI;i2>=0;i2--){
  	if(mainArray[i2]=='('){openI=i2;break;}
  };
}

function isBracker (strinn) {
   // console.log(strinn);
    var ls=0;
    for(var i16=0;i16<mainArray.length;i16++)
    {
        if(strinn[i16]=='(' || strinn[i16]==')'){ls=1;}  
}
return ls;
}



function eazu_action (subStrIn) {
	var znaku=[];
	var prom="";
	var maxIndex;
	var minIndex;
	var i4=0;
	var zv;
//переформатування рядка в масив: [число][оператор][число][оператор][число]	
	while(i4<subStrIn.length)
	{
       
		if(subStrIn[i4+1]!='^' || subStrIn[i4+1]!='*' || subStrIn[i4+1]!='/' || subStrIn[i4+1]!='-' || subStrIn[i4+1]!='+'){			
			prom+=subStrIn[i4];
		}
        // console.log(prom);
		if(subStrIn[i4+1]=="^" || subStrIn[i4+1]=="*" || subStrIn[i4+1]=="/" || subStrIn[i4+1]=="+" || subStrIn[i4+1]=="-"){
			znaku.push(parseFloat(prom));
			znaku.push(subStrIn[i4+1]);
			i4++;
			prom="";
            
		}
        if(i4==subStrIn.length-1){znaku.push(prom);}
        i4++;
	};

	for(var i3=0;i3<znaku.length;i3++)
	{
		if(znaku[i3+1]=="^"){
			znaku[i3]=Math.pow((znaku[i3]),(znaku[i3+2]));
			znaku.splice(i3+1,2);
            }
	};


	for(var i6=0;i6<znaku.length;i6++)
	{
		if(znaku[i6+1]=="*"){
			znaku[i6]=(znaku[i6])*(znaku[i6+2]);
            znaku.splice(i6+1,2);
        }
	};


	for(var i8=0;i8<znaku.length;i8++)
	{
		if(znaku[i8+1]=="/"){
			znaku[i8]=(znaku[i8])/(znaku[i8+2]);
            znaku.splice(i8+1,2);
            }
	};

	for(var i11=0;i11<znaku.length;i11++)
	{
		if(znaku[i11+1]=="+"){
            znaku[i11]=parseFloat(znaku[i11])+parseFloat(znaku[i11+2]);
            znaku.splice((i11+1),2);
            }
	};

	for(var i12=0;i12<znaku.length;i12++)
	{
		if(znaku[i12+1]=="-"){
			znaku[i12]=(znaku[i12])-(znaku[i12+2]);
            znaku.splice(i12+1,2);
            }
	};
return znaku[0];	
}


function subArray (openIndex,closeIndex) {
    var returnString="";
    for (var i13=(openIndex+1);i13<closeIndex;i13++)
        {
            returnString+=mainArray[i13];

        };
    return returnString;
}


function transformToArr(mainString1) {
    var i9=0;
    var prom1="";
    l=true;
    while(i9<mainString1.length)
    {
     
     if(i9==0)
{
        if(mainString1[i9]=='(' || mainString1[i9]==')')
     {
        mainArray.push(mainString1[0]);
        i9++;
        
     }
 
     else {prom1+=mainString1[i9]; i9++;}
 }
      

        if(mainString1[i9]=="^" || mainString1[i9]=="*" || mainString1[i9]=="/" || mainString1[i9]=="+" || mainString1[i9]=="-"  || mainString1[i9]=="(" || mainString1[i9]==")")
     {
        mainArray.push(prom1);
        mainArray.push(mainString1[i9]);i9++;
        prom1=''; 
         if(mainString1[i9]=='(')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';i9++;}
            do{

                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]=='(');
        }

        if(mainString1[i9]==')')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';}
            do{
                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]==')');
        }    
         
     } 

     
         if(mainString1[i9+1]!='^' || mainString1[i9+1]!='*' || mainString1[i9+1]!='/' || mainString1[i9+1]!='-' || mainString1[i9+1]!='+' || mainString1[i9+1]!='(' || mainString1[i9+1]!=')')
        {
            prom1+=mainString1[i9];
            mainArray.push(prom1);
            prom1='';
            i9++;
            if(mainString1[i9]=='^'){mainArray.push(prom1);prom1=''; mainArray.push(mainString1[i9]);i9++;}
            if(mainString1[i9]=='/'){mainArray.push(prom1);prom1=''; mainArray.push(mainString1[i9]);i9++;}
            if(mainString1[i9]=='*'){mainArray.push(prom1);prom1=''; mainArray.push(mainString1[i9]);i9++;}
            if(mainString1[i9]=='+'){mainArray.push(prom1);prom1=''; mainArray.push(mainString1[i9]);i9++;}
            if(mainString1[i9]=='-'){mainArray.push(prom1);prom1=''; mainArray.push(mainString1[i9]);i9++;}
            
            if(mainString1[i9]=='(')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';i9++;}
            do{

                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]=='(');
        }

        if(mainString1[i9]==')')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';}
            do{
                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]==')');
        }
          //  console.log(prom1);
        }


     if(mainString1[i9+1]=="^" || mainString1[i9+1]=="*" || mainString1[i9+1]=="/" || mainString1[i9+1]=="+" || mainString1[i9+1]=="-"  || mainString1[i9+1]=="(" || mainString1[i9+1]==")")
            {
                prom1+=mainString1[i9];
                //console.log(prom1);
                mainArray.push(prom1);
                i9++;
                prom1='';
                //console.log('k');
                mainArray.push(mainString1[i9]);
                 //console.log(mainArray[1]);
                i9++;

            if(mainString1[i9]=='(')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';i9++;}
            do{

                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]=='(');
        }

        if(mainString1[i9]==')')
        {   if(prom1!=''){mainArray.push(prom1);prom1='';}
            do{
                mainArray.push(mainString1[i9]);i9++;                
            }while(mainString1[i9]==')');
        }
            } 
        if(i9==mainString1.length-1)
        {
            prom1+=mainString1[i9];
            mainArray.push(prom1);
            i9++;
           // console.log(prom1);
        }

    }
    for(var i18=0;i18<mainArray.length;i18++)
    {
        if(mainArray[i18]===''){mainArray.splice(i18,1);}

    }
}

function zamina (str1) {
    str1=str1.replace(/arsin/g,'a');
    str1=str1.replace(/arcos/g,'b');
    str1=str1.replace(/artan/g,'c');
    str1=str1.replace(/sin/g,'d');
    str1=str1.replace(/cos/g,'f');
    str1=str1.replace(/log/g,'g');
    str1=str1.replace(/tan/g,'h');
    str1=str1.replace(/sqrt/g,'i');
    str1=str1.replace(/ln/g,'l');
    return str1;
}


function aut (srtin) {
	var colclose=0;
	var colopen=0;
	for(var i15=0; i15<srtin.length;i15++){
		if(srtin[i15]=='('){colopen++;}
		if(srtin[i15]==')'){colclose++;}
    };
		if(colopen!=colclose){
			return false;
        }
			else{return true;}
	
}













$(document).ready(function() {
    $('#equal').mouseenter(function(){
        $('#equal').fadeTo('fast',0.6);
        
        }); 
    $('#equal').mouseleave(function(){
        $('#equal').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#Inv').mouseenter(function(){
        $('#Inv').fadeTo('fast',0.6);
        
        }); 
    $('#Inv').mouseleave(function(){
        $('#Inv').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#Ans').mouseenter(function(){
        $('#Ans').fadeTo('fast',0.6);
        
        }); 
    $('#Ans').mouseleave(function(){
        $('#Ans').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#0').mouseenter(function(){
        $('#0').fadeTo('fast',0.6);
        
        }); 
    $('#0').mouseleave(function(){
        $('#0').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#1').mouseenter(function(){
        $('#1').fadeTo('fast',0.6);
        
        });
    $('#1').mouseleave(function(){
        $('#1').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#2').mouseenter(function(){
        $('#2').fadeTo('fast',0.6);
        
        }); 
    $('#2').mouseleave(function(){
        $('#2').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#3').mouseenter(function(){
        $('#3').fadeTo('fast',0.6);
        
        }); 
    $('#3').mouseleave(function(){
        $('#3').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#4').mouseenter(function(){
        $('#4').fadeTo('fast',0.6);
        
        }); 
    $('#4').mouseleave(function(){
        $('#4').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#5').mouseenter(function(){
        $('#5').fadeTo('fast',0.6);
        
        }); 
    $('#5').mouseleave(function(){
        $('#5').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#6').mouseenter(function(){
        $('#6').fadeTo('fast',0.6);
        
        }); 
    $('#6').mouseleave(function(){
        $('#6').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#7').mouseenter(function(){
        $('#7').fadeTo('fast',0.6);
        
        }); 
    $('#7').mouseleave(function(){
        $('#7').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#8').mouseenter(function(){
        $('#8').fadeTo('fast',0.6);
        
        }); 
    $('#8').mouseleave(function(){
        $('#8').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#9').mouseenter(function(){
        $('#9').fadeTo('fast',0.6);
        
        }); 
    $('#9').mouseleave(function(){
        $('#9').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#10').mouseenter(function(){
        $('#10').fadeTo('fast',0.6);
        
        }) 
    $('#10').mouseleave(function(){
        $('#10').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#11').mouseenter(function(){
        $('#11').fadeTo('fast',0.6);
        
        }); 
    $('#11').mouseleave(function(){
        $('#11').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#12').mouseenter(function(){
        $('#12').fadeTo('fast',0.6);
        
        }); 
    $('#12').mouseleave(function(){
        $('#12').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#13').mouseenter(function(){
        $('#13').fadeTo('fast',0.6);
        
        }); 
    $('#13').mouseleave(function(){
        $('#13').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#14').mouseenter(function(){
        $('#14').fadeTo('fast',0.6);
        
        });
    $('#14').mouseleave(function(){
        $('#14').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#15').mouseenter(function(){
        $('#15').fadeTo('fast',0.6);
        
        }); 
    $('#15').mouseleave(function(){
        $('#15').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#16').mouseenter(function(){
        $('#16').fadeTo('fast',0.6);
        
        }); 
    $('#16').mouseleave(function(){
        $('#16').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#17').mouseenter(function(){
        $('#17').fadeTo('fast',0.6);
        
        }); 
    $('#17').mouseleave(function(){
        $('#17').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#18').mouseenter(function(){
        $('#18').fadeTo('fast',0.6);
        
        }); 
    $('#18').mouseleave(function(){
        $('#18').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#19').mouseenter(function(){
        $('#19').fadeTo('fast',0.6);
        
        });
    $('#19').mouseleave(function(){
        $('#19').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#20').mouseenter(function(){
        $('#20').fadeTo('fast',0.6);
        
        });
    $('#20').mouseleave(function(){
        $('#20').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#21').mouseenter(function(){
        $('#21').fadeTo('fast',0.6);
        
        }); 
    $('#21').mouseleave(function(){
        $('#21').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#22').mouseenter(function(){
        $('#22').fadeTo('fast',0.6);
        
        });
    $('#22').mouseleave(function(){
        $('#22').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#23').mouseenter(function(){
        $('#23').fadeTo('fast',0.6);
        
        }); 
    $('#23').mouseleave(function(){
        $('#23').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#24').mouseenter(function(){
        $('#24').fadeTo('fast',0.6);
        
        }); 
    $('#24').mouseleave(function(){
        $('#24').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#25').mouseenter(function(){
        $('#25').fadeTo('fast',0.6);
        
        }); 
    $('#25').mouseleave(function(){
        $('#25').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#26').mouseenter(function(){
        $('#26').fadeTo('fast',0.6);
        
        });
    $('#26').mouseleave(function(){
        $('#26').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#27').mouseenter(function(){
        $('#27').fadeTo('fast',0.6);
        
        }); 
    $('#27').mouseleave(function(){
        $('#27').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#28').mouseenter(function(){
        $('#28').fadeTo('fast',0.6);
        
        });
    $('#28').mouseleave(function(){
        $('#28').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#29').mouseenter(function(){
        $('#29').fadeTo('fast',0.6);
        
        }); 
    $('#29').mouseleave(function(){
        $('#29').fadeTo('fast',1);
        });
});
$(document).ready(function() {
    $('#30').mouseenter(function(){
        $('#30').fadeTo('fast',0.6);
        
        });
    $('#30').mouseleave(function(){
        $('#30').fadeTo('fast',1);
        });
});



