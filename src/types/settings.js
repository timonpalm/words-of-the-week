export class Settings {
  constructor (numberOfWords, targetWeekday, targetHour) {
    this.numberOfWords = numberOfWords
    this.targetWeekday = targetWeekday
    this.targetHour = targetHour
  }

  static from_obj (settings_obj) {
    return new Settings(
      settings_obj.numberOfWords,
      settings_obj.targetWeekday,
      settings_obj.targetHour
    )
  }
}
