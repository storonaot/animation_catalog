export const REQUIRED = Symbol('REQUIRED')
export const INTEGER = Symbol('INTEGER')
export const STRING_MAX_LENGTH = ({ value, maxLength }) => ({
  rule: () => value.length <= maxLength,
  hint: () => `Максимальная длина ${maxLength} символов`
})
export const STRING_MIN_LENGTH = ({ value, minLength }) => ({
  rule: () => value.length >= minLength,
  hint: () => `Минимальная длина ${minLength} символов`
})
