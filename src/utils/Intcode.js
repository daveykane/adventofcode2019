export default class Intcode {
    constructor(program) {
        this.halted = false;
        this.pointer = 0;
        this.output = [];
        this.program = [...program];
    }

    get args() {
        const code = this.program[this.pointer].toString();
        const opcode = parseInt(code.slice(-2), 10);
        const modes = code.slice(0, -2).split("");
        const [mode1, mode2] = modes.map(Number).reverse();
        const param1 = mode1 ? this.program[this.pointer + 1] : this.program[this.program[this.pointer + 1]];
        const param2 = mode2 ? this.program[this.pointer + 2] : this.program[this.program[this.pointer + 2]];
        const param3 = this.program[this.pointer + 3];
        return { opcode, param1, param2, param3 };
    }

    get instructions() {
        return {
            "1": () => this.args.param1 + this.args.param2,
            "2": () => this.args.param1 * this.args.param2,
            "5": () => (this.args.param1 !== 0 ? this.args.param2 : this.pointer + 3),
            "6": () => (this.args.param1 === 0 ? this.args.param2 : this.pointer + 3),
            "7": () => Number(this.args.param1 < this.args.param2),
            "8": () => Number(this.args.param1 === this.args.param2)
        };
    }

    run(inputs = [], waitForInput = false) {
        while (!this.halted) {
            if ([1, 2, 7, 8].includes(this.args.opcode)) {
                this.program[this.args.param3] = this.instructions[this.args.opcode]();
                this.pointer += 4;
            } else if (this.args.opcode === 3) {
                this.program[this.program[this.pointer + 1]] = inputs.shift();
                this.pointer += 2;
            } else if (this.args.opcode === 4) {
                this.output.push(this.args.param1);
                this.pointer += 2;
                if (waitForInput) {
                    return this.output[this.output.length - 1];
                }
            } else if ([5, 6].includes(this.args.opcode)) {
                this.pointer = this.instructions[this.args.opcode]();
            } else if (this.args.opcode === 99) {
                this.halted = true;
            } else {
                throw new Error("Unknown opcode");
            }
        }
        return this.output.length ? this.output : this.program;
    }
}
