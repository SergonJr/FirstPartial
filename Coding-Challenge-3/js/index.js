let submitB = document.getElementById("submitBtn");

submitB.addEventListener("click", (e) => {
    e.preventDefault();

    let number = document.getElementById("fizzbNumber");

    let result = document.getElementById("resultsSection");

    if (number.value > 0)
    {
        for (let i = 0; i <= number.value; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                result.innerHTML += `<div>fizzbuzz</div>`;
            }
            else if (i % 3 == 0)
            {
                result.innerHTML += `<div>fizz</div>`;   
            }
            else if (i % 5 == 0)
            {
                result.innerHTML += `<div>buzz</div>;`
            }
            else
            {
                result.innerHTML += `<div>${i}</div>;`
            }
        }
    }
})