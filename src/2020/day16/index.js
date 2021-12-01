import { flatMap } from "../utils";

const getPattern = (length, base) => Array.from({ length }, () => base);

export const part1 = (list, phases) => {
    let output = [...list];
    const base = [0, 1, 0, -1];

    for (let i = 0; i < phases; i += 1) {
        const input = [...output];
        output = [];

        for (let j = 0; j < list.length; j += 1) {
            let pointer = 0;
            const length = j + 1;
            const patten = flatMap((value, index) => getPattern(length, base[index]), base);
            const sum = input.reduce((total, digit) => {
                pointer = pointer === patten.length - 1 ? 0 : pointer + 1;
                return total + digit * patten[pointer];
            }, 0);
            output.push(Math.abs(sum % 10));
        }
    }

    return output.slice(0, 8).join("");
};

export const part2 = data => {
    const list = data.repeat(10000);
    const offset = data.substring(0, 7);
    const input = list.substring(offset);
    let values = input.split("").map(Number);

    for (let phase = 0; phase < 100; phase += 1) {
        const newValues = [];
        for (let index = values.length - 1; index >= 0; index -= 1) {
            newValues[index] = ((newValues[index + 1] || 0) + values[index]) % 10;
        }
        values = newValues;
    }

    return values.slice(0, 8).join("");
};
