import { part1 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Seventeen", () => {
    describe("Part One", () => {
        it("should be 11140", async () => {
            const input = (await getInput("day17")).split(",").map(Number);
            expect(part1(input)).toEqual(11140);
        });
    });
});
