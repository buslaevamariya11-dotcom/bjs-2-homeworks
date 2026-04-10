"use strict";

// Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {};
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);

  return {
    min,
    max,
    avg: Number((sum / arr.length).toFixed(2))
  };
}

// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, el) => sum + el, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 === 0) even += num;
    else odd += num;
  }

  return even - odd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;
}

// Задача 3
function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > max) {
      max = result;
    }
  }

  return max;
}