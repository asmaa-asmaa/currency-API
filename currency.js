fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5d3baaeeddd84ac18484b0db3c2c4e6e").then(
    (result)=>{
       // console.log(result)
       let myData=result.json();
       //console.log(myData);
       return myData;
    }).then ((currency)=>{

        let amount=document.querySelector(".amount");
        let egpPrice=document.querySelector(".egp span");
        let sarPrice=document.querySelector(".sar span");

        egpPrice.innerHTML=amount.innerHTML* currency.rates["EGP"];
        sarPrice.innerHTML=Math.round(amount.innerHTML* currency.rates["SAR"]);




        //console.log(currency.rates);
        console.log(currency.rates["EGP"]);
        console.log(currency.rates["SAR"]);

    })