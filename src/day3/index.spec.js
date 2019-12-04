import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Three", () => {
    describe("Part One", () => {
        it("should be 6", () => {
            expect(
                part1([
                    ["R8", "U5", "L5", "D3"],
                    ["U7", "R6", "D4", "L4"]
                ])
            ).toEqual(6);
        });

        it("should be 159", () => {
            expect(
                part1([
                    ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
                    ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
                ])
            ).toEqual(159);
        });

        it("should be 135", () => {
            expect(
                part1([
                    ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"],
                    ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
                ])
            ).toEqual(135);
        });

        it("should be 865", async () => {
            const input = (await getInput("day3")).split("\n").map(paths => paths.split(","));
            expect(part1(input)).toBe(865);
        });
    });

    describe("Part Two", () => {
        it("should be 30", () => {
            expect(
                part2([
                    ["R8", "U5", "L5", "D3"],
                    ["U7", "R6", "D4", "L4"]
                ])
            ).toEqual(30);
        });

        it("should be 610", () => {
            expect(
                part2([
                    ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
                    ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
                ])
            ).toEqual(610);
        });

        it("should be 410", () => {
            expect(
                part2([
                    ["R98", "U47", "R26", "D63", "R33", "U87", "L62", "D20", "R33", "U53", "R51"],
                    ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
                ])
            ).toEqual(410);
        });

        it("should be 35038", async () => {
            const input = (await getInput("day3")).split("\n").map(paths => paths.split(","));
            expect(part2(input)).toBe(35038);
        });
    });
});
