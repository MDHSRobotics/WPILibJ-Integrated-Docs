import * as vscode from 'vscode';
import { docsDictionary } from './DocsDictionary';

export class HoverProvider implements vscode.HoverProvider {

	private regex: RegExp;

	constructor() {
		this.regex = new RegExp(`\\b(${Object.keys(docsDictionary).join("|")})\\b`, "g");
	}

	public provideHover(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        vscode.Hover | undefined {
			const matchRange: vscode.Range | undefined = document.getWordRangeAtPosition(position, this.regex);
			if (matchRange) {
				const match: string = document.getText(matchRange);
				return new vscode.Hover(match);
			}
			return undefined;
    }
}
