const directorFormatter = ({ name, originalName, ...res }) => ({
  name: `${name.first || ''} ${name.last}`,
  originalName: `${originalName.first || ''} ${originalName.last}`,
  ...res
})

const directorsFormatter = directors => directors.map(directorFormatter)

export { directorsFormatter, directorFormatter }
