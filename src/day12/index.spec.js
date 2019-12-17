import { part1, part2 } from ".";
import { getInput } from "../utils";

describe("Advent of Code - Day Twelve", () => {
    describe("Part One", () => {
        it("total energy should be 179 after 10 steps", async () => {
            const moons = ["<x=-1, y=0, z=2>", "<x=2, y=-10, z=-7>", "<x=4, y=-8, z=8>", "<x=3, y=5, z=-1>"];
            expect(part1(moons, 10)).toEqual(179);
        });

        it("total energy should be 1940 after 100 steps", async () => {
            const moons = ["<x=-8, y=-10, z=0>", "<x=5, y=5, z=10>", "<x=2, y=-7, z=3>", "<x=9, y=-8, z=-3>"];
            expect(part1(moons, 100)).toEqual(1940);
        });

        it("total energy should be 8538 after 1000 steps", async () => {
            const moons = (await getInput("day12")).split("\n");
            expect(part1(moons, 1000)).toEqual(8538);
        });
    });

    describe("Part Two", () => {
        it("should take 2772 steps for history to repeat itself ", async () => {
            const moons = ["<x=-1, y=0, z=2>", "<x=2, y=-10, z=-7>", "<x=4, y=-8, z=8>", "<x=3, y=5, z=-1>"];
            expect(part2(moons)).toEqual(2772);
        });

        it("should take 4686774924 steps for history to repeat itself", async () => {
            const moons = ["<x=-8, y=-10, z=0>", "<x=5, y=5, z=10>", "<x=2, y=-7, z=3>", "<x=9, y=-8, z=-3>"];
            expect(part2(moons)).toEqual(4686774924);
        });

        it("should take 506359021038056 steps for history to repeat itself", async () => {
            const moons = (await getInput("day12")).split("\n");
            expect(part2(moons)).toEqual(506359021038056);
        });
    });
});
