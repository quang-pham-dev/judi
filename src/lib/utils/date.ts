import dayjs from 'dayjs'

export const formatDateToMonthDayYear = (date: string) => {
  return dayjs(date).format('MMMM DD, YYYY')
}

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  )
}

export const formatDay = (date: string) => {
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  const inputDate = new Date(date)

  if (isSameDay(inputDate, yesterday)) {
    return 'Yesterday'
  }

  if (isSameDay(inputDate, today)) {
    return 'Today'
  }

  return formatDateToMonthDayYear(date)
}
