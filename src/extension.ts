// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, languages, commands, Disposable, workspace, window } from 'vscode';
import { CodelensProvider } from './CodelensProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

let disposables: Disposable[] = [];

export function activate(_context: ExtensionContext) {
	const codelensProvider = new CodelensProvider();

	// Change to 'java'
	languages.registerCodeLensProvider('java', codelensProvider);

	commands.registerCommand("wpilibj-integrated-docs.enableCodeLens", () => {
		workspace.getConfiguration("wpilibj-integrated-docs").update("enableCodeLens", true, true);
	});

	commands.registerCommand("wpilibj-integrated-docs.disableCodeLens", () => {
		workspace.getConfiguration("wpilibj-integrated-docs").update("enableCodeLens", false, true);
	});

	commands.registerCommand("wpilibj-integrated-docs.codelensAction", (args: unknown) => {
		commands.executeCommand('vscode.open', "https://docs.wpilib.org/en/stable/docs/software/labview/index.html");
	});
}

// this method is called when your extension is deactivated
export function deactivate() {
	if (disposables) {
		disposables.forEach(item => item.dispose());
	}
	disposables = [];
}