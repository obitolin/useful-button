import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('custom-button.toggleMaximizeEditorGroup', () => {
			vscode.commands.executeCommand("workbench.action.toggleMaximizeEditorGroup");
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('custom-button.save', () => {
			vscode.commands.executeCommand("workbench.action.files.save");
		})
	);
}

export function deactivate() {}
