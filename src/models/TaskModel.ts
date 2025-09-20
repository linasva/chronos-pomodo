export type TaskModel = {
  id: string;
  name: string;
  duration: string;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
};
