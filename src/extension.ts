import * as vscode from 'vscode';
import { CodelensProvider } from './CodelensProvider';

export function activate(_context: vscode.ExtensionContext) {
	const codelensProvider = new CodelensProvider();

	_context.subscriptions.push(
		vscode.languages.registerCodeLensProvider('java', codelensProvider));

	_context.subscriptions.push(
		vscode.commands.registerCommand("wpilibj-integrated-docs.codelensAction", (webviewTitle: string, docsLink: string) => {
			const panel: vscode.WebviewPanel = vscode.window.createWebviewPanel('docsView', webviewTitle, vscode.ViewColumn.Two, {});
			panel.webview.html = getWebviewContent(docsLink);
			//commands.executeCommand('vscode.open', "https://docs.wpilib.org/en/stable/docs/software/labview/index.html");
		})
	);
}

function getWebviewContent(docsLink: string) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Test</title>
</head>
<body">
	<iframe src="${docsLink}" width="100%" style="border:none;height:100vh;"></iframe>
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}