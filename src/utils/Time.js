export function getTime(time) {
  const [hours, minutes] = time.split(':')

  let getHours = parseInt(hours)

  if (getHours >= 12) {
    return `${getHours}:${minutes} PM`

  } else {
    return `${getHours}:${minutes} AM`
  }
}