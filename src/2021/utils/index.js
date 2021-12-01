import { readFile } from "fs";
import { promisify } from "util";

export const readInput = day => promisify(readFile)(`${__dirname}/../${day}/input.txt`, "utf-8");
export const getInput = async day => (await readInput(day)).trim();
