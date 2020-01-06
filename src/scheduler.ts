"use strict";
import * as vscode from "vscode";
import { ReminderView } from "./reminderView";
import { Utility } from "./utility";

export class Scheduler {
  public constructor(private context: vscode.ExtensionContext) {}

  public start() {
    this.startReminderView();
    setInterval(() => {
      this.startReminderView();
    }, 1000 * 60 * 60);
  }

  public startReminderView() {
    const configDay = Utility.getConfiguration().get<boolean>(
      "reminderViewDay",
      false
    );
    const currentWeek = new Date().getDay();
    const configWeek = Utility.getConfiguration().get<number>(
      "reminderViewWeek",
      5
    );
    const currentHour = new Date().getHours();
    const configHour = Utility.getConfiguration().get<number>(
      "reminderViewHour",
      17
    );
    if (
      (configDay || configWeek === currentWeek) &&
      configHour === currentHour
    ) {
      ReminderView.show(this.context);
    }
  }
}
