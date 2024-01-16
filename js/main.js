
var exhangeForm =document.querySelector(".exhangeForm");

exhangeForm.onsubmit=function(event){
    event.preventDefault();
    var element=event.target.elements;

    var amount=event.target.elements['amount'].value;
    var exchangeOption=event.target.elements['exchange'].value;

    var finalAmount=0;
    if(exchangeOption=="dollar"){
        finalAmount =amount/ 3.73;
        console.log(finalAmount);

    }else if(exchangeOption=="dinar"){
        finalAmount =amount / 5.31;
        console.log(finalAmount);
    }
    else if(exchangeOption=="nis"){
        finalAmount =amount;
        console.log(finalAmount);
    }
    else {
        alert("Error!");
    }
    document.querySelector(".result").innerHTML = `Converted Amount :  ${finalAmount}` ;
}


