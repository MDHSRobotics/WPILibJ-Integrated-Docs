import { Command } from "vscode";

const titleEnd: string = " Documentation";
const tooltip: string = "(Click to open in a side window)";
const command: string = "wpilibj-integrated-docs.codelensAction";

export const docsDictionary: Record<string, Command> = {
    // WPILib
    "Command": { title: `Command${titleEnd}`, tooltip: tooltip, command: command, arguments: ["Command", "https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html"] },
    "NetworkTables": { title: `NetworkTables${titleEnd}`, tooltip: tooltip, command: command, arguments: ["NetworkTables", "https://docs.wpilib.org/en/stable/docs/software/networktables/index.html"] },

    // CTRE
    "SignalLogger": { title: `SignalLogger${titleEnd}`, tooltip: tooltip, command: command, arguments: ["SignalLogger", "https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/api-usage/signal-logging.html"] },

    // Limelight
    "LimelightHelpers": { title: `LimelightLib${titleEnd}`, tooltip: tooltip, command: command, arguments: ["LimelightLib", "https://docs.limelightvision.io/docs/docs-limelight/apis/limelight-lib"] },
    //"": { title: `${titleStart}${titleEnd}`, tooltip: tooltip, command: command, arguments: ["", ""] }
};