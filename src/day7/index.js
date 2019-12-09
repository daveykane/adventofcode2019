import Intcode from "../utils/Intcode";
import { permutations } from "../utils";

export const part1 = program => {
    const sequences = permutations([0, 1, 2, 3, 4]);
    return sequences.reduce((signal, sequence) => {
        const thruster = sequence.reduce((output, phase) => new Intcode(program).run([phase, output]).shift(), 0);
        return thruster > signal ? thruster : signal;
    }, 0);
};

export const part2 = program => {
    const sequences = permutations([5, 6, 7, 8, 9]);
    return sequences.reduce((signal, sequence) => {
        const amplifiers = Array.from({ length: 5 }, () => new Intcode(program));
        let thruster = sequence.reduce((output, phase, index) => amplifiers[index].run([phase, output], true), 0);
        while (!amplifiers[4].halted) {
            thruster = amplifiers.reduce((output, amp) => amp.run([output], true), thruster);
        }
        return thruster[thruster.length - 1] > signal ? thruster[thruster.length - 1] : signal;
    }, 0);
};
