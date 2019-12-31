const sizes = {
  mobile1: 320,
  mobile2: 360,
  mobile3: 375,
  mobile4: 412,
  tablet1: 768,
  tablet2: 800,
  tablet3: 1024,
  desktop1: 1280,
  desktop2: 1366,
  desktop3: 1440,
  desktop4: 1536,
  desktop5: 1600,
  desktop6: 1920,
}

const mediaQueries = Object.keys(sizes).reduce((acc, cur) => {
  acc[`${cur}_up`] = `(min-width: ${sizes[cur]}px)`
  acc[`${cur}_down`] = `(max-width: ${sizes[cur] - 1}px)`
  return acc
}, {})

mediaQueries.portrait = '(orientation: portrait)'
mediaQueries.landscape = '(orientation: landscape)'

export default mediaQueries
