const directorsFormatter = directors =>
  directors.map(({ name, originalName, ...res }) => ({
    name: `${name.first} ${name.last}`,
    originalName: `${originalName.first} ${originalName.last}`,
    ...res
  }))

const testFormatter = () => {}

export { directorsFormatter, testFormatter }
