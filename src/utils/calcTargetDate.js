export function calcTargetDate (targetWeekday, targetTime) {
  var targetDate = new Date()

  //console.log('now: ' + targetDate)
  //console.log('targetweekday: ' + targetWeekday)
  //console.log('targetTime: ' + targetTime)

  //console.log('date: ' + targetDate.getDate())
  //console.log('date+1: ' + (targetDate.getDate() + 1))
  //console.log('now date: ' + targetDate.getDate())
  //console.log((targetWeekday + 7 - targetDate.getDay()) % 7 || 7)

  // calculate target date from weekday
  targetDate.setDate(
    targetDate.getDate() + ((targetWeekday + 7 - targetDate.getDay()) % 7 || 7)
  )
  const [hours, minutes] = targetTime.split(':')
  //console.log('hours: ' + hours)
  targetDate.setHours(hours, minutes, 0, 0)

  //console.log(targetDate)

  return targetDate
}
