import * as TaskManager from "expo-task-manager";
import { useAlarmEvents } from "../states";

const ALARM_TASK_NAME = "ALARM_TASK";

TaskManager.defineTask(ALARM_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(" just in here");
});

console.log(TaskManager.isTaskDefined(ALARM_TASK_NAME));
