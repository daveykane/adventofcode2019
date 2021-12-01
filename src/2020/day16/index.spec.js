import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Sixteen", () => {
    describe("Part One", () => {
        it("should be 01029498 after 4 phases", async () => {
            const input = "12345678";
            expect(part1(input.split("").map(Number), 4)).toEqual("01029498");
        });

        it("should be 24176176 after 100 phases", async () => {
            const input = "80871224585914546619083218645595";
            expect(part1(input.split("").map(Number), 100)).toEqual("24176176");
        });

        it("should be 73745418 after 100 phases", async () => {
            const input = "19617804207202209144916044189917";
            expect(part1(input.split("").map(Number), 100)).toEqual("73745418");
        });

        it("should be 52432133 after 100 phases", async () => {
            const input = "69317163492948606335995924319873";
            expect(part1(input.split("").map(Number), 100)).toEqual("52432133");
        });

        it("should be 25131128 after 100 phases", async () => {
            const input = (await getInput("day16")).trim();
            expect(part1(input.split("").map(Number), 100)).toEqual("25131128");
        });
    });

    describe("Part Two", () => {
        it("should be 84462026 after 100 phases", async () => {
            const input = "03036732577212944063491565474664";
            expect(part2(input, 100)).toEqual("84462026");
        });

        it("should be 78725270 after 100 phases", async () => {
            const input = "02935109699940807407585447034323";
            expect(part2(input, 100)).toEqual("78725270");
        });

        it("should be 53553731 after 100 phases", async () => {
            const input = "03081770884921959731165446850517";
            expect(part2(input, 100)).toEqual("53553731");
        });

        it("should be 53201602 after 100 phases", async () => {
            const input = (await getInput("day16")).trim();
            expect(part2(input, 100)).toEqual("53201602");
        });
    });
});
