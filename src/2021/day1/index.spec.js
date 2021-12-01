import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day One", () => {
    describe("Part One", () => {
        it("should get 7", () => {
            const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
            expect(part1(input)).toBe(7);
        });

        it("should get 1832", async () => {
            const input = (await getInput("day1")).split("\n").map(Number);
            expect(part1(input)).toBe(1832);
        });
    });

    describe("Part Two", () => {
        it("should get 5", () => {
            const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
            expect(part2(input)).toBe(5);
        });

        it("should get 1858", async () => {
            const input = (await getInput("day1")).split("\n").map(Number);
            expect(part2(input)).toBe(1858);
        });
    });
});
