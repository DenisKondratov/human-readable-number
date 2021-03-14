module.exports = function toReadable(number) {
    const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let output = ''
    let num = parseInt(number)
    if (num == 0) return 'zero'
    else if (num > 0 && num < 10) {
        return ones[num - 1]
    }
    else if (num >= 10 && num < 20) {
        return teens[num - 10]
    }
    else if (num >= 20 && num < 100) {
        if (num.toString()[1] != '0') {
            output = tens[parseInt(num.toString()[0]) - 2] + ' '
            output += ones[parseInt(num.toString()[1]) - 1]
            return output
        }
        else return tens[parseInt(num.toString()[0]) - 2]
    }
    else {
        if (num.toString()[2] != '0' && num.toString()[1] != '1' && num.toString()[1] != '0') {
            output = ones[parseInt(num.toString()[0]) - 1] + ' hundred '
            output += tens[parseInt(num.toString()[1]) - 2] + ' '
            output += ones[parseInt(num.toString()[2]) - 1]
            return output
        }
        else if (num.toString()[1] == '0' && num.toString()[2] == '0') {
            return ones[parseInt(num.toString()[0]) - 1] + ' hundred'
        }
        else if (num.toString()[1] == '0') {
            output = ones[parseInt(num.toString()[0]) - 1] + ' hundred '
            output += ones[parseInt(num.toString()[2]) - 1]
            return output
        }
        else if (num.toString()[1] == '1') {
            output = ones[parseInt(num.toString()[0]) - 1] + ' hundred '
            output += teens[parseInt((num.toString()[1] + num.toString()[2])) - 10]
            return output
        }
        else {
            output = ones[parseInt(num.toString()[0]) - 1] + ' hundred '
            output += tens[parseInt(num.toString()[1]) - 2]
            return output
        }
    }
}