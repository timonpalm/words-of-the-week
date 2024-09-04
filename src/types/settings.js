export class Settings {
  constructor (numberOfWords, targetWeekday, targetTime) {
    this.numberOfWords = numberOfWords
    this.targetWeekday = targetWeekday
    this.targetTime = targetTime
  }

  static from_obj (settings_obj) {
    return new Settings(
      settings_obj.numberOfWords,
      settings_obj.targetWeekday,
      settings_obj.targetTime
    )
  }
}
