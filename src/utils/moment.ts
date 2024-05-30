import { dayMapping, monthMapping } from "utils/moment.constant"
import type { Day, Month } from "utils/moment.type"

abstract class Core {
  protected date: Date

  constructor(date: Date) {
    this.date = date
  }
}

export class Moment extends Core {
  constructor(date: Date) {
    super(date)
    this.date = date
  }

  currentDate() {
    return this.date.getDate()
  }

  currentDay() {
    const day = this.date.getDay() as Day
    return dayMapping[day]
  }

  currentMonth() {
    const month = (this.date.getMonth() + 1) as Month
    return monthMapping[month]
  }
}

const MomentInstance = new Moment(new Date())

export default MomentInstance
