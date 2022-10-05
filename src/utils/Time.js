export function formatTime(time) {
  const [hours, minutes] = time.split(':')

  let getHours = parseInt(hours)

  if (getHours > 12) {
    let newHour = parseInt(getHours - 12)
    return `${newHour}:${minutes} PM`

  } else {
    return `${getHours}:${minutes} AM`
  }
}