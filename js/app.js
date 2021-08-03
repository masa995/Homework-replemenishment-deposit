'use strict';
const formEl = document.getElementById('deposit-form');
const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');

function calculateDeposit(amountDeposit, periodDeposit){
    let percentDeposit = 2;

    if (periodDeposit > 3 && periodDeposit <= 6){
        percentDeposit = 2.2;
    }

    if (periodDeposit > 6 && periodDeposit <= 9){
        percentDeposit = 2.3;
    }

    if (periodDeposit > 9 && periodDeposit <= 12){
        percentDeposit = 2.6;
    }

    if (periodDeposit > 12 && periodDeposit <= 18){
        percentDeposit = 2.7;
    }

    const total = amountDeposit * (1 + percentDeposit / (12 * 100)) ** periodDeposit;
    const profit = total - amountDeposit;

    return {
        total: total.toFixed(),
        profit: profit.toFixed(),
        percent: percentDeposit,
    };
}

formEl.addEventListener('submit', function (evt){
    evt.preventDefault();

    amountInputEl.textContent = '';
    periodInputEl.textContent = '';

    const amountInput = Number(amountInputEl.value);
    const periodInput = Number(periodInputEl.value);

    const result = calculateDeposit(amountInput, periodInput);

    totalEl.textContent = result.total;
    profitEl.textContent = result.profit;
    percentEl.textContent = result.percent;
});

