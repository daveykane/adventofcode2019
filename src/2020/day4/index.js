const bruteForce = (min, max, filter = String) => {
    let count = 0;
    for (let i = min; i <= max; i += 1) {
        const password = i.toString();
        const digits = password.split("");
        const adjacents = (password.match(/(.)\1+/g) || []).filter(filter);
        const increments = digits.every((digit, index) => index === digits.length - 1 || digit <= digits[index + 1]);
        count += adjacents.length && increments ? 1 : 0;
    }
    return count;
};

export const part1 = bruteForce;
export const part2 = (min, max) => bruteForce(min, max, match => match.length === 2);
