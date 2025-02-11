import * as vscode from 'vscode';
import { HoverProvider } from './HoverProvider';

export function activate(_context: vscode.ExtensionContext) {
	const hoverProvider = new HoverProvider();

	_context.subscriptions.push(
		vscode.languages.registerHoverProvider('java', hoverProvider));
}

// this method is called when your extension is deactivated
export function deactivate() {}