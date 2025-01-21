// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class CodeLensProvider implements vscode.CodeLensProvider {
	public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken):
		vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
			let codeLenses: vscode.CodeLens[] = [];
			return codeLenses;
		}

public resolveCodeLens?(codeLens: vscode.CodeLens, token: vscode.CancellationToken):
	vscode.CodeLens | Thenable<vscode.CodeLens> {
		return codeLens;
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
	context.subscriptions.push(
		vscode.languages.registerCodeLensProvider(
			{ scheme: 'file', language: 'java' }, new CodeLensProvider()
		)
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
