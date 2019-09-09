/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const filter = (num) => {
    const fizz = parseInt(num / 3) === (num / 3)
    const buzz = parseInt(num / 5) === (num / 5)
    if (fizz && buzz) {
      return 'FizzBuzz'
    } else if (fizz) {
      return 'Fizz'
    } else if (buzz) {
      return 'Buzz'
    } else {
      return num.toString()
    }
  }
  return Array.from({ length: n }).map((_, index) => filter(index + 1))
};

