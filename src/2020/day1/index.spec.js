import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day One", () => {
    describe("Part One", () => {
        it("should get 2", () => {
            expect(part1([12])).toBe(2);
        });

        it("should get 2", () => {
            expect(part1([14])).toBe(2);
        });

        it("should get 654", () => {
            expect(part1([1969])).toBe(654);
        });

        it("should get 33583", () => {
            expect(part1([100756])).toBe(33583);
        });

        it("should get 3384232", async () => {
            const input = (await getInput("day1")).split("\n").map(Number);
            expect(part1(input)).toBe(3384232);
        });
    });

    describe("Part Two", () => {
        it("should get 2", () => {
            expect(part2([14])).toBe(2);
        });

        it("should get 966", () => {
            expect(part2([1969])).toBe(966);
        });

        it("should get 50346", () => {
            expect(part2([100756])).toBe(50346);
        });

        it("should get 5073456", async () => {
            const input = (await getInput("day1")).split("\n").map(Number);
            expect(part2(input)).toBe(5073456);
        });
    });
});
