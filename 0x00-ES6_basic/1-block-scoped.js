export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task2 = true;
    task = false;
  }

  return [task, task2];
}
