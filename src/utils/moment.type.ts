import { dayMapping, monthMapping } from "utils/moment.constant"

export type Month = keyof typeof monthMapping

export type Day = keyof typeof dayMapping
