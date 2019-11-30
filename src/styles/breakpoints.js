const sasaSizes = {
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

const query = Object.keys(sasaSizes).reduce((acc, cur) => {
  acc[`${cur}_up`] = `(min-width: ${sasaSizes[cur]}px)`
  acc[`${cur}_down`] = `(max-width: ${sasaSizes[cur] - 1}px)`
  return acc
}, {})

query.portrait = '(orientation: portrait)'
query.landscape = '(orientation: landscape)'

export default query
