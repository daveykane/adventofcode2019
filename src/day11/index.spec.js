import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Nine", () => {
    describe("Part One", () => {
        it("should paint 1883 panels", async () => {
            const input = (await getInput("day11")).split(",").map(Number);
            const result = part1(input);
            expect(result).toEqual(1883);
        });
    });

    describe("Part Two", () => {
        it("should paint registration identifier APUGURFH", async () => {
            const input = (await getInput("day11")).split(",").map(Number);
            const result = part2(input);
            expect(result).toBeInstanceOf(Array);
            expect(result).toHaveLength(6);
            expect(result[0]).toEqual("  ##  ###  #  #  ##  #  # ###  #### #  #   ");
            expect(result[1]).toEqual(" #  # #  # #  # #  # #  # #  # #    #  #   ");
            expect(result[2]).toEqual(" #  # #  # #  # #    #  # #  # ###  ####   ");
            expect(result[3]).toEqual(" #### ###  #  # # ## #  # ###  #    #  #   ");
            expect(result[4]).toEqual(" #  # #    #  # #  # #  # # #  #    #  #   ");
            expect(result[5]).toEqual(" #  # #     ##   ###  ##  #  # #    #  #   ");
        });
    });
});
