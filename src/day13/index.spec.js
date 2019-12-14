import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Nine", () => {
    describe("Part One", () => {
        it("should be 420 block tiles", async () => {
            const input = (await getInput("day13")).split(",").map(Number);
            expect(part1(input)).toEqual(420);
        });
    });

    describe("Part Two", () => {
        it("should get a score of 21651", async () => {
            const input = (await getInput("day13")).split(",").map(Number);
            expect(part2(input)).toEqual(21651);
        });
    });
});
