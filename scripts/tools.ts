const camelize = (name: string): string => {
  const CAMELIZE_REG = /-(\w)/g
  return name.replace(CAMELIZE_REG, (_, key) => key.toUpperCase())
}

const replaceStyle = (initialVal = ''): string => {
  return initialVal
    .replace(/"var\(--geist-fill\)"/g, '"currentColor"')
    .replace(/"var\(--geist-stroke\)"/g, '"var(--primary-background)"')
}

export { camelize, replaceStyle }
