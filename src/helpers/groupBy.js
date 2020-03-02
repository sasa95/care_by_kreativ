export const groupBy = (arr, criteria) => {
  return arr.reduce(function(obj, item) {
    var key = typeof criteria === 'function' ? criteria(item) : item[criteria]

    if (!obj.hasOwnProperty(key)) {
      obj[key] = []
    }

    obj[key].push(item)

    return obj
  }, {})
}
