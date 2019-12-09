import { readFile } from "fs";
import { promisify } from "util";

export const readInput = day => promisify(readFile)(`${__dirname}/../${day}/input.txt`, "utf-8");
export const getInput = async day => (await readInput(day)).trim();
export const flatMap = (cb, arr) => arr.reduce((acc, item, i) => acc.concat(cb(item, i)), []);

export const permutations = (input = []) => {
    if (!input.length) {
        return [[]];
    }
    return flatMap((item, i) => {
        return permutations([...input.slice(0, i), ...input.slice(i + 1)]).map(value => [item, ...value]);
    }, input);
};
