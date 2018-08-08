/**
 * parseInt implementation in Javascript, with no support for Hex numbers, or the radial parameter
 * 
 * Supports negative numbers
 * Supports non-numberic numbers in the input
 *   Example:
 *     Outputs 4 for input '4d'
 *     Outputs 4 for input '4d444'
 *     Outputs -1 for input '-1-5'
 * 
 * Supports returning NaN when first character is not a number
 *    
 * @param {String} str Potential string representation of a number
 * 
 * @return {Number}
 */
const solution = (str = '') => {  
  if (typeof str !== 'string' || (str && str.length === 0)) return NaN

  const validChars = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  // Handle negative numbers
  // If the first character is the negative symbol, we will then later negate the number we produce from the input
  const isNumberNegative = str.charAt(0) === '-'

  if (validChars[str.charAt(0)] === undefined && str.charAt(0) !== '-') return NaN

  // Break input into an array
  const chars = str.split('')

  let returnValue = []
  let result = 0


  let isCurrentValid = true

  let i = 0

  while (isCurrentValid === true && chars.length > i) {
    const currentChar = chars[i]

    if (typeof validChars[currentChar] === 'number') {
      returnValue.push(validChars[currentChar])
    } else if (isNumberNegative === true && i === 0) {
      // Do nothing
    } else {
      // Stop iterating now to avoid parsing beyond the first valid group of numbers
      isCurrentValid = false
    }    

    i++
  }

  let expIndex = 0

  for (let index = returnValue.length - 1; index >= 0; index--) {

    const element = returnValue[index]
    
    const exponent = Math.pow(10, expIndex)

    result += element * exponent

    expIndex++
  }
  
  if (isNumberNegative) {
    return result *= -1
  }

  return result
}

module.exports = solution
