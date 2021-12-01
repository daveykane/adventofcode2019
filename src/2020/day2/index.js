import Intcode from "../utils/Intcode";

export const part1 = (program, noun, verb) => {
    if (Number.isInteger(noun) && Number.isInteger(verb)) {
        const newProgram = [...program];
        [newProgram[1], newProgram[2]] = [noun, verb];
        return new Intcode(newProgram).run();
    }
    return new Intcode(program).run();
};

export const part2 = (program, output) => {
    for (let noun = 0; noun < 100; noun += 1) {
        for (let verb = 0; verb < 100; verb += 1) {
            const newProgram = [...program];
            [newProgram[1], newProgram[2]] = [noun, verb];
            if (new Intcode(newProgram).run()[0] === output) {
                return { noun, verb };
            }
        }
    }
    throw new Error(`Output ${output} not found`);
};
