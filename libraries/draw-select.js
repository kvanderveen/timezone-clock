function drawSelect() {
  const fontSize = width * 0.02 * (width < 800 ? 2.5 : 1)
  const selectWidth = width * 0.2 * (width < 800 ? 2.5 : 1)
  const select = createSelect()
  select.position(width / 2 - selectWidth / 2, height * 0.7)
  Object.keys(timeZones).forEach((timeZone) => select.option(timeZone))
  select.style('padding', '10px')
  select.style('border-radius', '5px')
  select.style('width', selectWidth + 'px')
  select.style('font-size', fontSize + 'px')
  return select
}
