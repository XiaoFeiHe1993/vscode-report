import * as vscode from "vscode";
import Asset from "./asset";

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext) {
    let asset: Asset = new Asset(context);

    const imagePath = asset.getImageUri();
    let title = asset.getTitle();
    const configDay = Asset.getReminderViewDay();
    const documentTitle = configDay ? "日报提醒" : "周报提醒";
    if (configDay) {
      title = title.replace("周报", "日报");
    }

    if (this.panel) {
      this.panel.webview.html = this.generateHtml(
        imagePath,
        title,
        documentTitle
      );
      this.panel.reveal();
    } else {
      this.panel = vscode.window.createWebviewPanel(
        "resport",
        documentTitle,
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );
      this.panel.webview.html = this.generateHtml(
        imagePath,
        title,
        documentTitle
      );
      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    }
  }

  protected static generateHtml(
    imagePath: vscode.Uri | string,
    title: string,
    documentTitle: string
  ): string {
    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${documentTitle}</title>
        </head>
        <body>
            <div><h1>${title}</h1></div>
            <div><img src="${imagePath}"></div>
        </body>
        </html>`;

    return html;
  }
}
