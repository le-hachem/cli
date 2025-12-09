import { color } from "bun";

export const error = color("red", "ansi");
export const warn = color("yellow", "ansi");
export const info = color("cyan", "ansi");
export const reset = "\x1b[0m"; // ANSI reset
