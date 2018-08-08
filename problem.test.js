var solution = require('./')

describe('Test the parseInt function', function() {
    it('should return NaN when passed a non-numeric character as the first position', function() {
        expect(solution('k2')).toEqual(NaN)
    })

    it('should return 0 when passed a number represented as a string', function() {
        expect(solution('0')).toEqual(0)
    })

    it('should return number for a large number', function() {
        expect(solution('41395')).toEqual(41395)
    })

    it('should return a negative number for a large number', function() {
        expect(solution('-41395')).toEqual(-41395)
    })

    it('should return number for a large number with a 0 in the input', function() {
        expect(solution('40395')).toEqual(40395)
    })

    it('should handle negative numbers', function() {
        expect(solution('-10')).toEqual(-10)
    })
    
    it('should handle non-numeric character', function() {
        expect(solution('33g222')).toEqual(33)
        expect(solution('-33g222')).toEqual(-33)
    })

    it('should handle a big positive number', function() {
        expect(solution('1000')).toEqual(1000)
        expect(solution('1000dd11')).toEqual(1000)
    })

    it('should handle when we input empty strings or no parameter at all', function() {
        expect(solution('')).toEqual(NaN)
        expect(solution()).toEqual(NaN)
    })
})