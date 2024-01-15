
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.registerForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        var amount = form.amount.value;
        var currency = form.exchange.value;
        var Result = document.getElementById('result');

        
        var exchangeRates = {
            usd: 3.5, 
            jod: 4.80, 
            nis: 1 
        };

            var exchangeRate = exchangeRates[currency];
            var result = (amount * exchangeRate).toFixed(2);
             Result.innerText = result + ' NIS';
            
        
    });
});
