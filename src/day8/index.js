import { occurrences } from "../utils";

const getLayers = (data, width, height) => data.match(new RegExp(`.{1,${width * height}}`, "g")) || [];

export const part1 = (data, width, height) => {
    const layers = getLayers(data, width, height).sort((a, b) => occurrences(a, 0) - occurrences(b, 0));
    return occurrences(layers[0], 1) * occurrences(layers[0], 2);
};

export const part2 = (data, width, height) => {
    let image = "";
    const layers = getLayers(data, width, height);

    for (let i = 0; i < width * height; i += 1) {
        const layer = layers.find(l => l[i] === "0" || l[i] === "1");
        image += layer && layer[i] === "1" ? "|" : " ";
    }

    return image.match(new RegExp(`.{1,${width}}`, "g")) || [];
};
