import * as vscode from 'vscode';
import { docsDictionary } from './DocsDictionary';

/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {

	private codeLenses: vscode.CodeLens[] = [];
	private regex: RegExp;

	constructor() {
		this.regex = new RegExp(`\\b(${Object.keys(docsDictionary).join("|")})\\b`, "g");
	}

	public provideCodeLenses(document: vscode.TextDocument, _token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
		this.codeLenses = [];
		// Get the entire document's text
		const text: string = document.getText();
		for (const match of text.matchAll(this.regex)) {
			// console.log(match);
			const matchLine: vscode.TextLine = document.lineAt(document.positionAt(match.index).line);
			const matchIndex: number = matchLine.text.indexOf(match[0]);
			const startPosition: vscode.Position = new vscode.Position(matchLine.lineNumber, matchIndex);
			const wordRange: vscode.Range | undefined = document.getWordRangeAtPosition(startPosition, this.regex);
			if (wordRange) {
				this.codeLenses.push(new vscode.CodeLens(wordRange, docsDictionary[match[0]]));
			}
		}
		return this.codeLenses;
	}
}
