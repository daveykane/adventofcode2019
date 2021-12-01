export default class Intcode {
    constructor(program, memory, pointer = 0, relativeBase = 0) {
        this.halted = false;
        this.pointer = pointer;
        this.relativeBase = relativeBase;
        this.output = [];
        this.program = [...program, ...(memory ? Array.from({ length: 5000 }, () => 0) : [])];
    }

    get args() {
        const code = this.program[this.pointer].toString();
        const opcode = parseInt(code.slice(-2), 10);
        const modes = code.slice(0, -2).split("");
        const [mode1, mode2, mode3] = modes.map(Number).reverse();
        const [param1, param2, param3] = [this.getParam(mode1, 1), this.getParam(mode2, 2), this.getParam(mode3, 3)];
        return { opcode, param1, param2, param3 };
    }

    get instructions() {
        return {
            "1": () => this.program[this.args.param1] + this.program[this.args.param2],
            "2": () => this.program[this.args.param1] * this.program[this.args.param2],
            "5": () => (this.program[this.args.param1] !== 0 ? this.program[this.args.param2] : this.pointer + 3),
            "6": () => (this.program[this.args.param1] === 0 ? this.program[this.args.param2] : this.pointer + 3),
            "7": () => Number(this.program[this.args.param1] < this.program[this.args.param2]),
            "8": () => Number(this.program[this.args.param1] === this.program[this.args.param2]),
            "9": () => this.relativeBase + this.program[this.args.param1]
        };
    }

    getParam(mode, index) {
        const param = this.pointer + index;
        const base = mode === 2 ? this.relativeBase : 0;
        return mode === 1 ? param : base + this.program[param];
    }

    clone() {
        return new Intcode([...this.program], false, this.pointer, this.relativeBase);
    }

    run(inputs = [], waitForInput = false) {
        while (!this.halted) {
            if ([1, 2, 7, 8].includes(this.args.opcode)) {
                this.program[this.args.param3] = this.instructions[this.args.opcode]();
                this.pointer += 4;
            } else if (this.args.opcode === 3) {
                this.program[this.args.param1] = typeof inputs === "function" ? inputs() : inputs.shift();
                this.pointer += 2;
            } else if (this.args.opcode === 4) {
                this.output.push(this.program[this.args.param1]);
                this.pointer += 2;
                if (waitForInput) {
                    return this.output[this.output.length - 1];
                }
            } else if ([5, 6].includes(this.args.opcode)) {
                this.pointer = this.instructions[this.args.opcode]();
            } else if (this.args.opcode === 9) {
                this.relativeBase = this.instructions[this.args.opcode]();
                this.pointer += 2;
            } else if (this.args.opcode === 99) {
                this.halted = true;
            } else {
                throw new Error("Unknown opcode");
            }
        }
        return this.output.length ? this.output : this.program;
    }
}
