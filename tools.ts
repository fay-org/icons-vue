export interface styleOptions {
  [prop: string]: any
}

const camelize = (name: string) => {
  const REG = /-(\w)/g
  return name.replace(REG, (_, key) => key.toUpperCase())
}

const replaceStyle = (val = '') => {
  return (
    val
      // .replace(/"var\(--geist-fill\)"/g, '"currentColor"')
      // .replace(/"var\(--geist-stroke\)"/g, '"currentColor"')
      .replace(/width="([0-9]+)"/g, ':width="setSize"')
      .replace(/height="([0-9]+)"/g, ':height="setSize"')
      .replace(/style=(.+)">/g, ':style={color:setColor}>')
  )
}

const parseStyle = (source = '') => {
  return source.split(';').reduce((acc: styleOptions, cur) => {
    const [prop, value] = cur
      .split(/^([^:]+):/)
      .filter((_, i) => i > 0)
      .map((item) => item.trim().toLocaleLowerCase())
    acc[prop] = value
    return acc
  }, {})
}

const parseSvg = (svg: string, style: any) => {
  const initColor = (val: string, ident: string) => {
    return val.includes(ident) ? '{color}' : '"var(--primary-background)"'
  }
  const fillColor =
    (style['--geist-fill'] &&
      initColor(style['--geist-fill'], 'currentColor')) ||
    ''
  const strokeColor =
    (style['--geist-stroke'] &&
      initColor(style['--geist-stroke'], 'currentColor')) ||
    ''

  svg = svg.split('"var(--geist-foreground)"').join('{color}')
  console.log(svg)
}

export { camelize, replaceStyle, parseStyle, parseSvg }
