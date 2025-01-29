import * as vscode from 'vscode';

/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {

	private codeLenses: vscode.CodeLens[] = [];
	private regex: RegExp;

	constructor() {
		this.regex = /(.+)/g;
	}

	public provideCodeLenses(document: vscode.TextDocument, _token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
		this.codeLenses = [];
		const regex = new RegExp(this.regex);
		const text = document.getText();
		let matches;
		while ((matches = regex.exec(text)) !== null) {
			const line = document.lineAt(document.positionAt(matches.index).line);
			const indexOf = line.text.indexOf(matches[0]);
			const position = new vscode.Position(line.lineNumber, indexOf);
			const range = document.getWordRangeAtPosition(position, new RegExp(this.regex));
			if (range) {
				this.codeLenses.push(new vscode.CodeLens(range));
			}
		}
		return this.codeLenses;
	}

	public resolveCodeLens(codeLens: vscode.CodeLens, _token: vscode.CancellationToken) {
		codeLens.command = {
			title: "Codelens provided by sample extension",
			tooltip: "Tooltip provided by sample extension",
			command: "wpilibj-integrated-docs.codelensAction",
			arguments: ["Argument 1", false]
		};
		return codeLens;
	}
}
