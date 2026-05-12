"use strict";

function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const cached = cache.find(item => item.hash === hash);

    if (cached) {
      console.log("Из кеша: " + cached.value);
      return "Из кеша: " + cached.value;
    }

    const result = func(...args);

    cache.push({
      hash: hash,
      value: result
    });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (isFirstCall) {
      func(...args);
      wrapper.count++;
      isFirstCall = false;
      return;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}