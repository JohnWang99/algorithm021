var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        //针对于非99、999的数字，如果有进位就不断向前进位，截止到不可再进位为止
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i]) {
            return digits;
        }
    }
    //针对于99、999的数字，上述循环结束后digits=[0,0...0]，直接在索引0处补1
    digits = [1, ...digits];
    return digits;
};