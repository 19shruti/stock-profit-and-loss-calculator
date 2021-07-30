
var purchase = document.querySelector("#purchase");
var quantity = document.querySelector("#quantity");
var price = document.querySelector("#price");
var enter = document.querySelector("#enter");
var output = document.querySelector("#output");
var outputgif = document.querySelector("#outputgif");

const profitGIF = `<img align="centre" src="http://arbitrageprofitspy.com/wp-content/uploads/2016/01/make-it-rain2.gif"  " alt="funny GIF" width="24%"  />`;
const lossGIF = `<img align="centre" src="https://media1.tenor.com/images/49cb833f033c5de3f98107b70d36fea6/tenor.gif?itemid=10128252" width="30%"/>`;
const moreloss = `<img src="https://i.pinimg.com/originals/d3/5c/6d/d35c6d22a274ce7b4652a1c6e17cca24.gif"/>`;

function profitloss(event) {

    event.preventDefault();
    var purchasePrice = Number(purchase.value);
    var quantityNo = Number(quantity.value);
    var pricecurrently = Number(price.value);

    if (purchasePrice != "" && quantityNo != "" && pricecurrently != ""){
        if (purchasePrice >= 0 && quantityNo > 0 && pricecurrently > 0) {

            if (purchasePrice > pricecurrently) {
    
                var loss = (purchasePrice - pricecurrently) * quantityNo;
                var percentloss = (((purchasePrice - pricecurrently) * 100) / pricecurrently).toFixed(2);
            
                if (percentloss >= 50) {
                document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1865069.gif')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                output.innerHTML = " Lost more than 50% 😭 <br> LOSS of " + percentloss + " %" + "Your total loss is of rs. " + loss;
                outputgif.style.display = 'none';
                }
                        
            } else {
                const profit = (pricecurrently - purchasePrice) * quantityNo;
                const percentProfit = (((pricecurrently - purchasePrice) * 100) /purchasePrice).toFixed(2);
            
                if(percentProfit > 50){
                    output.innerHTML =" GAIN of " +percentProfit +" %. Your total profit is of  Rs. " +profit +"😍";
                    outputgif.style.display = "block";
                    outputgif.innerHTML = profitGIF;

                    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2128229.jpg')";
                }
                
            }
    
         }else{
               output.innerHTML = "enter valid input";
            }
    }else{
       output.innerHTML =" Every field is mandatory !Please enter all the inputs ";
    }
}