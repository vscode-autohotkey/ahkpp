import * as vscode from 'vscode';

export class Global {
    public static configPrefix = 'ahk++';
    private static statusBarItem: vscode.StatusBarItem;

    /** Get configuration from VS Code setting. */
    public static getConfig<T>(key: ConfigKey): T | undefined {
        return vscode.workspace.getConfiguration(this.configPrefix).get<T>(key);
    }

    public static updateStatusBarItems(text: string) {
        if (!this.statusBarItem) {
            this.statusBarItem = vscode.window.createStatusBarItem(
                vscode.StatusBarAlignment.Left,
            );
        }
        this.statusBarItem.text = text;
        this.statusBarItem.show();
    }

    public static hide() {
        this.statusBarItem.hide();
    }
}

export enum ConfigKey {
    allowedNumberOfEmptyLines = 'v1.formatter.allowedNumberOfEmptyLines',
    compileBaseFileV1 = 'compiler.compileBaseFileV1',
    compileBaseFileV2 = 'compiler.compileBaseFileV2',
    compileIcon = 'compiler.compileIcon',
    compilerPath = 'file.compilerPath',
    interpreterPathV1 = 'file.interpreterPathV1',
    interpreterPathV2 = 'file.interpreterPathV2',
    helpPathV1 = 'file.helpPathV1',
    helpPathV2 = 'file.helpPathV2',
    indentCodeAfterIfDirective = 'v1.formatter.indentCodeAfterIfDirective',
    indentCodeAfterLabel = 'v1.formatter.indentCodeAfterLabel',
    maximumParseLength = 'intellisense.maximumParseLength',
    preserveIndent = 'v1.formatter.preserveIndent',
    templateSnippetNameV1 = 'file.templateSnippetNameV1',
    templateSnippetNameV2 = 'file.templateSnippetNameV2',
    trimExtraSpaces = 'v1.formatter.trimExtraSpaces',
    useMpress = 'compiler.useMpress',
}

export enum LanguageId {
    ahk1 = 'ahk',
    ahk2 = 'ahk2',
}
