import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Fifteen", () => {
    describe("Part One", () => {
        it("should find oxygen system in 244 moves", async () => {
            const input = (await getInput("day15")).split(",").map(Number);
            expect(part1(input)).toEqual(244);
        });
    });

    describe("Part Two", () => {
        it("should fill area with oxygen in 278 minutes", async () => {
            const input = (await getInput("day15")).split(",").map(Number);
            expect(part2(input)).toEqual(278);
        });
    });
});
