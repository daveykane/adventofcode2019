const calculateIncreases = depths =>
    depths.reduce((total, depth, i) => (i === 0 || depths[i - 1] >= depth ? total : total + 1), 0);

export const part1 = calculateIncreases;
export const part2 = depths => {
    return calculateIncreases(
        depths.reduce((windows, depth, i) => {
            if (depths.length - 1 >= i + 2) {
                windows.push(depth + depths[i + 1] + depths[i + 2]);
            }

            return windows;
        }, [])
    );
};
