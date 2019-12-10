import Intcode from "../utils/Intcode";

export const part1 = (program, inputs = []) => new Intcode(program, true).run(inputs);
export const part2 = (program, inputs = []) => new Intcode(program, true).run(inputs);
