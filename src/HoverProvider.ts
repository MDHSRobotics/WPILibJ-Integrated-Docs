import * as vscode from 'vscode';
import { stringDictionary } from './DocsDictionary';
import { substringDictionary } from './DocsDictionary';

export class HoverProvider implements vscode.HoverProvider {

	private regex: RegExp;

	constructor() {
		this.regex = new RegExp(`\\b(${Object.keys(stringDictionary).join("|")})\\b|${Object.keys(substringDictionary).join("|")}`, "g");
		console.log(this.regex);
	}

	public provideHover(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        vscode.Hover | undefined {
			let matchRange: vscode.Range | undefined = document.getWordRangeAtPosition(position, this.regex);
			if (matchRange) {
				const match: string = document.getText(matchRange);
				let matchMessage: string = stringDictionary[match];
				if (matchMessage)
				{
					console.log("Match is found in string dictionary");
					return new vscode.Hover(matchMessage);
				}
				console.log("Match is not found in string dictionary");
				matchMessage = substringDictionary[match];
				return new vscode.Hover(matchMessage);
			}
			return undefined;
    }
}
