import { Command } from "vscode";

const titleStart: string = "Click to view ";
const titleEnd: string = " documentation";
const tooltip: string = "(Documentation will open in a side window)";
const command: string = "wpilibj-integrated-docs.codelensAction";

export const docsDictionary: Record<string, Command> = {
    'NetworkTables': { title: `${titleStart}NetworkTables${titleEnd}`, tooltip: tooltip, command: command, arguments: ["NetworkTables", "https://docs.wpilib.org/en/stable/docs/software/networktables/index.html"] },
    //'': { title: `${titleStart}${titleEnd}`, tooltip: tooltip, command: command, arguments: ["", ""] }
};