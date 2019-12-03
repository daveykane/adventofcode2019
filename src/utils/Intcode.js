export default class Intcode {
    constructor(program, noun, verb) {
        this.pointer = 0;
        this.program = program;
        [this.program[1], this.program[2]] = [noun, verb];
    }

    get instruction() {
        return {
            opcode: this.program[this.pointer],
            input1: this.program[this.program[this.pointer + 1]],
            input2: this.program[this.program[this.pointer + 2]],
            output: this.program[this.pointer + 3]
        };
    }

    setPointer() {
        this.pointer += Object.keys(this.instruction).length;
    }

    setValue() {
        if (this.instruction.opcode === 1) {
            this.program[this.instruction.output] = this.instruction.input1 + this.instruction.input2;
        } else if (this.instruction.opcode === 2) {
            this.program[this.instruction.output] = this.instruction.input1 * this.instruction.input2;
        } else {
            throw new Error("Unknown opcode");
        }
    }

    run() {
        while (this.instruction.opcode !== 99) {
            this.setValue();
            this.setPointer();
        }

        return this.program;
    }
}
