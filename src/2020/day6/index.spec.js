import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Six", () => {
    describe("Part One", () => {
        it("should have 42 orbits", () => {
            const input = ["COM)B", "B)C", "C)D", "D)E", "E)F", "B)G", "G)H", "D)I", "E)J", "J)K", "K)L"];
            expect(part1(input)).toEqual(42);
        });

        it("should have 223251 orbits", async () => {
            const input = (await getInput("day6")).split("\n");
            expect(part1(input)).toEqual(223251);
        });
    });

    describe("Part Two", () => {
        it("should have 4 orbital transfers", () => {
            const input = [
                "COM)B",
                "B)C",
                "C)D",
                "D)E",
                "E)F",
                "B)G",
                "G)H",
                "D)I",
                "E)J",
                "J)K",
                "K)L",
                "K)YOU",
                "I)SAN"
            ];
            expect(part2(input)).toEqual(4);
        });

        it("should have 430 orbital transfers", async () => {
            const input = (await getInput("day6")).split("\n");
            expect(part2(input)).toEqual(430);
        });
    });
});
