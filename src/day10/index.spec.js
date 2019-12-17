import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Ten", () => {
    describe("Part One", () => {
        it("should see 8", () => {
            const map = `   .#..#
                            .....
                            #####
                            ....#
                            ...##`;
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(8);
        });

        it("should see 33", () => {
            const map = `   ......#.#.
                            #..#.#....
                            ..#######.
                            .#.#.###..
                            .#..#.....
                            ..#....#.#
                            #..#....#.
                            .##.#..###
                            ##...#..#.
                            .#....####`;
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(33);
        });

        it("should see 35", () => {
            const map = `   #.#...#.#.
                            .###....#.
                            .#....#...
                            ##.#.#.#.#
                            ....#.#.#.
                            .##..###.#
                            ..#...##..
                            ..##....##
                            ......#...
                            .####.###.`;
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(35);
        });

        it("should see 41", () => {
            const map = `   .#..#..###
                            ####.###.#
                            ....###.#.
                            ..###.##.#
                            ##.##.#.#.
                            ....###..#
                            ..#.#..#.#
                            #..#.#.###
                            .##...##.#
                            .....#.#..`;
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(41);
        });

        it("should see 210", () => {
            const map = `   .#..##.###...#######
                            ##.############..##.
                            .#.######.########.#
                            .###.#######.####.#.
                            #####.##.#.##.###.##
                            ..#####..#.#########
                            ####################
                            #.####....###.#.#.##
                            ##.#################
                            #####.##.###..####..
                            ..######..##.#######
                            ####.##.####...##..#
                            .#####..#.######.###
                            ##...#.##########...
                            #.##########.#######
                            .####.#.###.###.#.##
                            ....##.##.###..#####
                            .#.#.###########.###
                            #.#.#.#####.####.###
                            ###.##.####.##.#..##`;
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(210);
        });

        it("should output 278", async () => {
            const map = await getInput("day10");
            expect(part1(map.split("\n").map(row => row.trim()))).toEqual(278);
        });
    });

    describe("Part Two", () => {
        it("should output 1417", async () => {
            const map = await getInput("day10");
            expect(
                part2(
                    map.split("\n").map(row => row.trim()),
                    199
                )
            ).toEqual(1417);
        });
    });
});
