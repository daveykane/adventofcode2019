import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Two", () => {
    describe("Part One", () => {
        it("should output [1]", () => {
            const result = part1([3, 0, 4, 0, 99], { input: 1 });
            expect(result).toEqual([1]);
        });

        it("should be [1002,4,3,4,99]", () => {
            const result = part1([1002, 4, 3, 4, 33]);
            expect(result).toEqual([1002, 4, 3, 4, 99]);
        });

        it("should be [1101,100,-1,4,99]", () => {
            const result = part1([1101, 100, -1, 4, 0]);
            expect(result).toEqual([1101, 100, -1, 4, 99]);
        });

        it("should be an array with with leading 0's and 14522484 the last item", async () => {
            const input = (await getInput("day5")).split(",").map(Number);
            const result = part1(input, { input: 1 });
            const code = result.pop();
            const successful = result.every(output => output === 0);
            expect(successful).toBe(true);
            expect(code).toBe(14522484);
        });
    });

    describe("Part Two", () => {
        it("should output [1] as input is equal to 8", () => {
            const result = part2([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], { input: 8 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input not equal to 8", () => {
            const result = part2([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], { input: 7 });
            expect(result).toEqual([0]);
        });

        it("should output [1] as input is less than 8", () => {
            const result = part2([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], { input: 7 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input is not less than 8", () => {
            const result = part2([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], { input: 9 });
            expect(result).toEqual([0]);
        });

        it("should output [1] as input is equal to 8", () => {
            const result = part2([3, 3, 1108, -1, 8, 3, 4, 3, 99], { input: 8 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input not equal to 8", () => {
            const result = part2([3, 3, 1108, -1, 8, 3, 4, 3, 99], { input: 7 });
            expect(result).toEqual([0]);
        });

        it("should output [1] as input is less than 8", () => {
            const result = part2([3, 3, 1107, -1, 8, 3, 4, 3, 99], { input: 7 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input is not less than 8", () => {
            const result = part2([3, 3, 1107, -1, 8, 3, 4, 3, 99], { input: 9 });
            expect(result).toEqual([0]);
        });

        it("should output [1] as input is not 0", () => {
            const result = part2([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], { input: 1 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input is 0", () => {
            const result = part2([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], { input: 0 });
            expect(result).toEqual([0]);
        });

        it("should output [1] as input is not 0", () => {
            const result = part2([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], { input: 1 });
            expect(result).toEqual([1]);
        });

        it("should output [0] as input is 0", () => {
            const result = part2([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], { input: 0 });
            expect(result).toEqual([0]);
        });

        it("should output [999] as input is less than 8", () => {
            const result = part2(
                [
                    3,
                    21,
                    1008,
                    21,
                    8,
                    20,
                    1005,
                    20,
                    22,
                    107,
                    8,
                    21,
                    20,
                    1006,
                    20,
                    31,
                    1106,
                    0,
                    36,
                    98,
                    0,
                    0,
                    1002,
                    21,
                    125,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    104,
                    999,
                    1105,
                    1,
                    46,
                    1101,
                    1000,
                    1,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    98,
                    99
                ],
                { input: 7 }
            );
            expect(result).toEqual([999]);
        });

        it("should output [1000] as input is equal to 8", () => {
            const result = part2(
                [
                    3,
                    21,
                    1008,
                    21,
                    8,
                    20,
                    1005,
                    20,
                    22,
                    107,
                    8,
                    21,
                    20,
                    1006,
                    20,
                    31,
                    1106,
                    0,
                    36,
                    98,
                    0,
                    0,
                    1002,
                    21,
                    125,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    104,
                    999,
                    1105,
                    1,
                    46,
                    1101,
                    1000,
                    1,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    98,
                    99
                ],
                { input: 8 }
            );
            expect(result).toEqual([1000]);
        });

        it("should output [1001] as input is greater than 8", () => {
            const result = part2(
                [
                    3,
                    21,
                    1008,
                    21,
                    8,
                    20,
                    1005,
                    20,
                    22,
                    107,
                    8,
                    21,
                    20,
                    1006,
                    20,
                    31,
                    1106,
                    0,
                    36,
                    98,
                    0,
                    0,
                    1002,
                    21,
                    125,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    104,
                    999,
                    1105,
                    1,
                    46,
                    1101,
                    1000,
                    1,
                    20,
                    4,
                    20,
                    1105,
                    1,
                    46,
                    98,
                    99
                ],
                { input: 9 }
            );
            expect(result).toEqual([1001]);
        });

        it("should output [4655956]", async () => {
            const input = (await getInput("day5")).split(",").map(Number);
            const result = part2(input, { input: 5 });
            expect(result).toEqual([4655956]);
        });
    });
});
