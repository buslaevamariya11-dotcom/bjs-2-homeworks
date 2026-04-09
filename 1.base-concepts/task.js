"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);

  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  const monthlyRate = percent / 100 / 12;
  const creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  const monthlyPayment =
    creditBody *
    (monthlyRate +
      monthlyRate /
        ((1 + monthlyRate) ** countMonths - 1));

  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}