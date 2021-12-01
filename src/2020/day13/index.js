import Intcode from "../utils/Intcode";

const play = program => {
    const game = new Intcode(program);
    const tiles = {};
    const input = () => {
        if (tiles[3][0] === tiles[4][0]) {
            return 0;
        }

        return tiles[3][0] < tiles[4][0] ? 1 : -1;
    };

    while (!game.halted) {
        const x = game.run(input, true);
        const y = game.run(input, true);
        const tile = game.run(input, true);

        if (x === -1 && y === 0) {
            tiles.score = tile;
        } else if (tile === 3 || tile === 4) {
            tiles[tile] = [x, y];
        } else {
            tiles[tile] = tiles[tile] || [];
            tiles[tile].push([x, y]);
        }
    }

    return tiles;
};

export const part1 = program => play(program)[2].length;
export const part2 = program => play([2, ...program.slice(1)]).score;
