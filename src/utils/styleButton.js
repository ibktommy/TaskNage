export function styleButton(value) {
  let valueText = value.toLowerCase()

  if (valueText === 'work') return 'category work'
  if (valueText === 'family') return 'category family'
  if (valueText === 'school') return 'category school'

  if (valueText === 'low') return 'priority low'
  if (valueText === 'medium') return 'priority medium'
  if (valueText === 'high') return 'priority high'
}