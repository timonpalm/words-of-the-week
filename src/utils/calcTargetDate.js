export function calcTargetDate (targetWeekday, targetTime) {
  var targetDate = new Date()

  // calculate target date from weekday
  targetDate.setDate(
    targetDate.getDate() + ((targetWeekday + 7 - targetDate.getDay()) % 7 || 7)
  )
  const [hours, minutes] = targetTime.split(':')
  targetDate.setHours(hours, minutes, 0, 0)

  return targetDate
}
