export function calcTargetDate (targetWeekday, targetTime) {
  var targetDate = new Date()

  const diffdays = (parseInt(targetWeekday) + 7 - targetDate.getDay()) % 7

  // calculate target date from weekday
  targetDate.setDate(targetDate.getDate() + (diffdays || 7))
  const [hours, minutes] = targetTime.split(':')

  targetDate.setHours(hours, minutes, 0, 0)

  return targetDate
}
