import Intcode from "../utils/Intcode";

export const part1 = (program, input) => new Intcode(program, input).run();
export const part2 = (program, output) => {
    for (let noun = 0; noun < 100; noun += 1) {
        for (let verb = 0; verb < 100; verb += 1) {
            if (new Intcode([...program], { noun, verb }).run()[0] === output) {
                return { noun, verb };
            }
        }
    }
    throw new Error(`Output ${output} not found`);
};
