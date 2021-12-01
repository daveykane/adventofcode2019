import { part1, part2 } from ".";

describe("Advent of Code - Day Four", () => {
    describe("Part One", () => {
        it("should find 1", () => {
            expect(part1(111111, 111111)).toEqual(1);
        });

        it("should find 0", () => {
            expect(part1(223450, 223450)).toEqual(0);
        });

        it("should find 0", () => {
            expect(part1(123789, 123789)).toEqual(0);
        });

        it("should find 1640", () => {
            expect(part1(197487, 673251)).toEqual(1640);
        });
    });

    describe("Part Two", () => {
        it("should find 1", () => {
            expect(part2(112233, 112233)).toEqual(1);
        });

        it("should find 0", () => {
            expect(part2(123444, 123444)).toEqual(0);
        });

        it("should find 1", () => {
            expect(part2(111122, 111122)).toEqual(1);
        });

        it("should find 1126", () => {
            expect(part2(197487, 673251)).toEqual(1126);
        });
    });
});
