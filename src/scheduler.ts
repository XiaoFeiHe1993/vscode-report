import * as vscode from "vscode";
import { ReminderView } from "./reminderView";
import Asset from "./asset";

export class Scheduler {
  public constructor(private context: vscode.ExtensionContext) {}

  public start() {
    this.startReminderView();
    setInterval(() => {
      this.startReminderView();
    }, 1000 * 60 * 60);
  }

  public startReminderView() {
    const configDay = Asset.getReminderViewDay();
    const currentWeek = new Date().getDay();
    const configWeek = Asset.getReminderViewWeek();
    const currentHour = new Date().getHours();
    const configHour = Asset.getReminderViewHour();
    if (
      (configDay || configWeek === currentWeek) &&
      configHour === currentHour
    ) {
      ReminderView.show(this.context);
    }
  }
}
