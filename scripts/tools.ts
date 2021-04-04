const camelize = (name: string): string => {
  const CAMELIZE_REG = /-(\w)/g
  return name.replace(CAMELIZE_REG, (_, key) => key.toUpperCase())
}

const parseStyles = (inlineStyle = ''): void => {
  return inlineStyle
    .split(';')
    .reduce((styleObject: any, stylePropertyValue) => {
      // extract the style property name and value
      const [property, value] = stylePropertyValue
        .split(/^([^:]+):/)
        .filter((val, i) => i > 0)
        .map((item) => item.trim().toLowerCase())

      styleObject[property] = value
      return styleObject
    }, {})
}

const replaceStyle = (initialVal = ''): string => {
  return initialVal
    .replace(/"var\(--geist-fill\)"/g, '"currentColor"')
    .replace(/"var\(--geist-stroke\)"/g, '"var(--primary-background)"')
}

export { camelize, parseStyles, replaceStyle }
