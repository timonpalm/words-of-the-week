
export function calcTargetDate(targetWeekday, targetHour) {
    
    var targetDate = new Date();

    // calculate target date from weekday
    targetDate.setDate(targetDate.getDate() + (((targetWeekday + 7 - targetDate.getDay()) % 7) || 7));
    targetDate.setHours(targetHour, 0, 0, 0);

    return targetDate;
}