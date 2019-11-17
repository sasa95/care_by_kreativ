const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1366,
  desktopL: 1800,
}

const breakpoints = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`
  return acc
}, {})

export default breakpoints
