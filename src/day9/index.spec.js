import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Nine", () => {
    describe("Part One", () => {
        it("should out a copy of the input", () => {
            const program = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99];
            const result = part1(program);
            expect(result).toEqual(program);
        });

        it("should output a 16-digit number", () => {
            const program = [1102, 34915192, 34915192, 7, 4, 7, 99, 0];
            const result = part1(program);
            expect(result[0].toString().length).toEqual(16);
        });

        it("should output the large number in the middle of the input", () => {
            const program = [104, 1125899906842624, 99];
            const result = part1(program);
            expect(result).toEqual([program[1]]);
        });

        it("should output [3429606717]", async () => {
            const input = (await getInput("day9")).split(",").map(Number);
            const result = part1(input, [1]);
            expect(result).toEqual([3429606717]);
        });
    });

    describe("Part Two", () => {
        it("should output [33679]", async () => {
            const input = (await getInput("day9")).split(",").map(Number);
            const result = part2(input, [2]);
            expect(result).toEqual([33679]);
        });
    });
});
