function findMeetingSlots(schedules) {
  let times = schedules.flat();

  times.sort((a, b) => a[0] - b[0]);

  let result = [];

  let prevEnd = 0;
  times.forEach((t) => {
    let [start, end] = t;
    if (prevEnd < start) {
      result.push([prevEnd, start]);
    }

    prevEnd = Math.max(end, prevEnd);
  });

  if (prevEnd !== 24) {
    result.push([prevEnd, 24]);
  }

  return result;
}

console.log(
  findMeetingSlots([
    [
      [13, 15],
      [11, 12],
      [10, 13],
    ],
    [[8, 9]],
    [[13, 18]],
  ])
);

// [[0,8],[9,10],[18,24]]
