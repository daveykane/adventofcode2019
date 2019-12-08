import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Two", () => {
    describe("Part One", () => {
        it("should be [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]", () => {
            const result = part1([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]);
            expect(result).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
        });

        it("should be [2, 0, 0, 0, 99]", () => {
            const result = part1([1, 0, 0, 0, 99]);
            expect(result).toEqual([2, 0, 0, 0, 99]);
        });

        it("should be [2, 3, 0, 6, 99]", () => {
            const result = part1([2, 3, 0, 3, 99]);
            expect(result).toEqual([2, 3, 0, 6, 99]);
        });

        it("should be [2, 4, 4, 5, 99, 9801]", () => {
            const result = part1([2, 4, 4, 5, 99, 0]);
            expect(result).toEqual([2, 4, 4, 5, 99, 9801]);
        });

        it("should get [30, 1, 1, 4, 2, 5, 6, 0, 99]", () => {
            const result = part1([1, 1, 1, 4, 99, 5, 6, 0, 99]);
            expect(result).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
        });

        it("should be an array with [6568671, ...] as the first item", async () => {
            const input = (await getInput("day2")).split(",").map(Number);
            expect(part1(input, { noun: 12, verb: 2 })[0]).toBe(6568671);
        });
    });

    describe("Part Two", () => {
        it("should be 3951", async () => {
            const input = (await getInput("day2")).split(",").map(Number);
            const { noun, verb } = part2(input, 19690720);
            expect(100 * noun + verb).toBe(3951);
        });
    });
});
