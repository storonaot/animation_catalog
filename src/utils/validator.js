import { REQUIRED, INTEGER } from 'constants/validation'

const isPresented = (value) => {
  if (typeof value === 'number') {
    if (value === 0) return true
    return !!value
  }
  if (typeof value === 'string') {
    return !!(value && value.trim())
  }
  if (typeof value === 'boolean') {
    return value
  }
  // check if value is an array
  if (
    typeof value !== 'undefined' &&
    value !== null &&
    value.length !== undefined
  ) {
    return !!value.length
  }
  return !!value
}

const isInteger = (value) => {
  const val = Number(value)
  if (isNaN(val)) return false
  if (val < 0) return false
  if ((val ^ 0) !== val) return false
  return true
}

const rules = {
  [REQUIRED]: {
    rule: value => isPresented(value),
    hint: () => 'Поле не должно быть пустым'
  },
  [INTEGER]: {
    rule: value => isInteger(value),
    hint: () => 'Только целое положительное число'
  }
}

const createValidation = fieldsMap => (values) => {
  const errors = {}

  /* eslint-disable no-restricted-syntax */
  for (const fieldName of Object.keys(fieldsMap)) {
    const rulesAppliedToField = fieldsMap[fieldName].map(
      rule => (typeof rule === 'function' ? rule(values) : rule)
    )

    const rulesMap = new Set(rulesAppliedToField)

    for (const ruleKey of rulesAppliedToField) {
      const isRequired = rulesMap.has(REQUIRED)
      const validation = typeof ruleKey === 'symbol' ? rules[ruleKey] : ruleKey
      const value = values[fieldName]
      const isValid =
        (!isRequired && !isPresented(value)) ||
        validation.rule(value, values, fieldsMap, fieldName)
      if (!isValid) {
        errors[fieldName] = validation.hint(value)
        break
      }
    }
  }
  /* eslint-disable no-restricted-syntax */

  return errors
}

const getErrorText = ({ touched, submitFailed, valid, error }) =>
  (touched && submitFailed && !valid ? error : null)

export default createValidation
export { getErrorText }
