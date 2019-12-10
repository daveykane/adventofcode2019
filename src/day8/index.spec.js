import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Eight", () => {
    describe("Part One", () => {
        it("should be 1", () => {
            expect(part1("123456789012", 3, 2)).toEqual(1);
        });

        it("should output 2286", async () => {
            const input = await getInput("day8");
            expect(part1(input, 25, 6)).toEqual(2286);
        });
    });

    describe("Part Two", () => {
        it("should be /", () => {
            const result = part2("0222112222120000", 2, 2);
            expect(result).toBeInstanceOf(Array);
            expect(result).toHaveLength(2);
            expect(result[0]).toEqual(" |");
            expect(result[1]).toEqual("| ");
        });

        it("should be CJZLP", async () => {
            const input = await getInput("day8");
            const result = part2(input, 25, 6);
            expect(result).toBeInstanceOf(Array);
            expect(result).toHaveLength(6);
            expect(result[0]).toEqual(" ||    || |||| |    |||  ");
            expect(result[1]).toEqual("|  |    |    | |    |  | ");
            expect(result[2]).toEqual("|       |   |  |    |  | ");
            expect(result[3]).toEqual("|       |  |   |    |||  ");
            expect(result[4]).toEqual("|  | |  | |    |    |    ");
            expect(result[5]).toEqual(" ||   ||  |||| |||| |    ");
        });
    });
});
