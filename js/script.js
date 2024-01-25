function subscribe()
{
    if(document.getElementById('emailbox').value ==='')
    {
        document.getElementById('erroremail').innerHTML="*please enter your email"
    }
    else{
        document.getElementById('btn').innerHTML ="Subscribed"
        document.getElementById('btn').style.backgroundColor="#28a745"
        document.getElementById('erroremail').innerHTML="Thank You"
    }
}

function updatecart()
{
    var num=document.getElementById('quality').value
    var total = num*100
    document.getElementById('totalamount').innerHTML= '$'+total+'.00'
    var num=document.getElementById('quality1').value
    var total1 = num*100
    document.getElementById('totalamount1').innerHTML= '$'+total1+'.00'
    var total3= total+total1
    document.getElementById('subtotal').innerHTML= '$'+total3+'.00'
    document.getElementById('avgtotal').innerHTML= '$'+total3+'.00'
    document.getElementById('subtotal0').innerHTML= '$'+total3+'.00'
}

function checkout()
{
    window.location.href='checkout.html';
}

function placeorder(){
if(document.getElementById('inputbox1').value=='')
{
    document.getElementById('errormsg1').innerHTML="please enter your name"
    document.getElementById('errormsg1').style.color="#28a745"
    document.getElementById('inputbox1').style.borderColor ="red"
}
else if(document.getElementById('inputbox2').value=='')
{
    document.getElementById('errormsg2').innerHTML="please enter your last name"
    document.getElementById('errormsg2').style.color="#28a745"
    document.getElementById('errormsg1').innerHTML=""
    document.getElementById('inputbox2').style.borderColor="red"
    document.getElementById('inputbox1').style.borderColor =""
}
else if(document.getElementById('inputbox4').value=='')
{
    document.getElementById('errormsg4').innerHTML="please enter your address"
    document.getElementById('errormsg4').style.color="#28a745"
    document.getElementById('errormsg2').innerHTML=""
    document.getElementById('inputbox4').style.borderColor ="red"
    document.getElementById('inputbox2').style.borderColor =""
}
else if(document.getElementById('inputbox5').value=='')
{
    document.getElementById('errormsg5').innerHTML="please enter your pincode"
    document.getElementById('errormsg5').style.color="#28a745"
    document.getElementById('errormsg4').innerHTML=""
    document.getElementById('inputbox5').style.borderColor ="red"
    document.getElementById('inputbox4').style.borderColor =""
}
else if(document.getElementById('inputbox6').value=='')
{
    document.getElementById('errormsg6').innerHTML=" please enter your city"
    document.getElementById('errormsg6').style.color="#28a745"
    document.getElementById('errormsg5').innerHTML=""
    document.getElementById('inputbox6').style.borderColor ="red"
    document.getElementById('inputbox5').style.borderColor =""
}
else if(document.getElementById('inputbox7').value=='')
{
    document.getElementById('errormsg7').innerHTML=" please enter your phone number"
    document.getElementById('errormsg7').style.color="#28a745"
    document.getElementById('errormsg6').innerHTML=""
    document.getElementById('inputbox7').style.borderColor ="red"
    document.getElementById('inputbox6').style.borderColor =""
}
else if(document.getElementById('inputbox8').value=='')
{
    document.getElementById('errormsg8').innerHTML=" please enter your email"
    document.getElementById('errormsg8').style.color="#28a745"
    document.getElementById('errormsg7').innerHTML=""
    document.getElementById('inputbox8').style.borderColor ="red"
    document.getElementById('inputbox7').style.borderColor =""
}
else{
    document.getElementById('errormsg8').innerHTML=""
    document.getElementById('inputbox8').style.borderColor =""
    document.getElementById('formsubmit').submit()
}
}

function addtocart()
{
var b=document.getElementById('addtocartinput').value;
var c = b*100
document.getElementById('amount').innerHTML='$'+c+'.00'
}

function fishmeat(){
document.getElementById('fishmeat').src="image/chicken-whole-cleaned-skin-less-500x500.png"
document.getElementById('chicken').src="image/fish-meat.jpg"
}
function meat(){
    document.getElementById('fishmeat').src="image/beef.jpg"
document.getElementById('chicken').src="image/fish-meat.jpg"
}
