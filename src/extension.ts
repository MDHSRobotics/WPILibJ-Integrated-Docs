// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CodelensProvider } from './CodelensProvider';

// this method is called when your extension is activated
export function activate(_context: vscode.ExtensionContext) {
	const codelensProvider = new CodelensProvider();

	_context.subscriptions.push(
		// Change to 'java'
		vscode.languages.registerCodeLensProvider('java', codelensProvider));

	_context.subscriptions.push(
		vscode.commands.registerCommand("wpilibj-integrated-docs.codelensAction", (args: unknown) => {
			vscode.commands.executeCommand("wpilibj-integrated-docs.openDocs");
			//commands.executeCommand('vscode.open', "https://docs.wpilib.org/en/stable/docs/software/labview/index.html");
		})
	);

	_context.subscriptions.push(
		vscode.commands.registerCommand("wpilibj-integrated-docs.openDocs", (args: unknown) => {
			const panel: vscode.WebviewPanel = vscode.window.createWebviewPanel('docsView', 'Docs View', vscode.ViewColumn.Two, {});
			panel.webview.html = getWebviewContent();
			
		})
	);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Test</title>
</head>
<body style="background-color:#e0e0e0">
	<iframe src="https://docs.wpilib.org/en/stable/docs/software/labview/index.html" style="border:none;position:absolute;height:100%;" title="Labview" width="100%"></iframe>
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}