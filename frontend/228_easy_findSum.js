/**
 * Дан массив целых чисел и целое число k. Нужно определить,
 * есть ли в массиве два числа, сумма которых равна k .
 *
 * Пример:
 * Вход: nums = [10, 15, 3, 7], k = 17
 * Выход: True
 *
 * Примечание
 * В качестве решения предоставьте функцию следующего вида:
 */

function findSum(nums, k) {
  const sortedArr = nums.sort((prev, next) => prev - next);

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === k) {
      return true;
    }

    if (sum > k) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(findSum([10, 15, 3, 7], 17)); // true
