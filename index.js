const solution = (str) => {
  // @TODO: handle when we're not passed a string or we're passed undefined/null


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

  let isNumberNegative = false

  // Handle negative numbers
  if (str.charAt(0) === '-') isNumberNegative = true

  // Break input into an array
  const chars = str.split('')

  let returnValue = []
  let result = 0


  let isCurrentValid = true

  let i = 0

  while (isCurrentValid === true && chars.length > i) {
    const currentChar = chars[i]

    if (validChars[currentChar]) {
      returnValue.push(validChars[currentChar])
    } else if (currentChar === '-') {
      isNumberNegative = true
    } else {
      isCurrentValid = false
    }    

    i++
  }

  // 10000
  // if return value.length === 5
  // element at position 0 is multiplied by 10000

  // Math.pow()

  let expIndex = 0

  for (let index = returnValue.length - 1; index >= 0; index--) {
    const element = returnValue[index];
    
    
    const exponent = Math.pow(10, expIndex)
    // console.log({ index })
    // console.log({ element })
    // console.log({ exponent })
    // console.log({ expIndex })

    result += element * exponent
    expIndex++
  }
  
  if (isNumberNegative) {
    return result *= -1
  }

  return result
}

module.exports = solution
