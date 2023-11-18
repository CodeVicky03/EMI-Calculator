const loanAmountInput = document.querySelector(".loan-amount");
const intrestRateInput = document.querySelector(".Intrest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalIntrestValue = document.querySelector(".total-intrest .value");
const totalaAmountValue = document.querySelector(".total-amount .value");

const calculate = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let intrestRate = parseFloat(intrestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = intrestRate / 12 / 100;


const calculateEMI = () => {
    let emi =
        loanAmount *
        interest *
        (Math.pow(1 + interest, loanTenure) /
            (Math.pow(1 + interest, loanTenure) - 1));

    return emi;
};

const ubdateData = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(loanTenure * emi);
    totalaAmountValue.innerHTML = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalIntrestValue.innerHTML = totalInterestPayable;

    var xValues = ["Loan Intrest", "Principal loan Amount"];
    var yValues = [totalAmount, totalInterestPayable]
    var barColors = [
        "#117909",
        "#6b0fcc"
    ];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Break-up of Total Payment"
            }
        }
    });

}

var referese = () => {
    loanAmount = parseFloat(loanAmountInput.value);
    intrestRate = parseFloat(intrestRateInput.value);
    loanTenure = parseFloat(loanTenureInput.value);

    interest = intrestRate / 12 / 100;
}

const init = () => {
    referese()
    let emi = calculateEMI();
    ubdateData(emi);
};

init();

calculate.addEventListener("click", init)

