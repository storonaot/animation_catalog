import { REQUIRED } from 'constants/validation'

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

const rules = {
  [REQUIRED]: {
    rule: value => isPresented(value),
    hint: () => 'Поле не должно быть пустым'
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

// import React from 'react';
// import Isemail from 'isemail';
// import moment from 'moment';

// import { MINIMAL_AGE, MAXIMAL_AGE } from '../config/validation';

// export const NAME = 'NAME';
// export const REQUIRED = 'REQUIRED';
// export const EMAIL = 'EMAIL';
// export const PASSWORD = 'PASSWORD';
// export const PASSWORD_CONFIRMATION = 'PASSWORD_CONFIRMATION';
// export const PHONE = 'PHONE';
// export const WEBSITE = 'WEBSITE';
// export const WEBSITE_OR_PHONE = 'WEBSITE_OR_PHONE';
// export const ADDRESS = 'ADDRESS';
// export const INSTAGRAM_NAME = 'INSTAGRAM_NAME';
// export const INSTAGRAM_LOCATION = 'INSTAGRAM_LOCATION';
// export const REQUIRED_IF_CHECKED = 'REQUIRED_IF_CHECKED';
// export const DATE = 'DATE';
// export const DATE_OF_BIRTH = 'DATE_OF_BIRTH';
// export const STRING_MAX_LENGTH = ({ value, maxLength }) => ({
//   rule: () => value && value.length <= maxLength,
//   hint: () => <span>Maximum length is {maxLength} symbols.</span>,
// });

// export const onlyNumbersNormalizer = value => (value.replace(/\D/g, ''));

// const emailRegex = /^.+@.+\..+$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/; // TODO: rewrite it
// const nameRegex = /^(?=.*[a-z])[.a-z-' ]+$/i;
// const phoneRegex = /^(0[1-9])[0-9]{8}$/; // TODO: match to server version
// const websiteRegex = /(https?:\/\/|)[a-zа-яё0-9-.]{1,}\.[a-zа-яё0-9]{1,}/i;

// const isPresented = (value) => {
//   if (typeof value === 'number') {
//     if (value === 0) return true;

//     return !!value;
//   }

//   if (typeof value === 'string') {
//     return !!(value && value.trim());
//   }

//   if (typeof value === 'boolean') {
//     return value;
//   }

//   // check if value is an array
//   if (typeof value !== 'undefined' && value !== null && value.length !== undefined) {
//     return !!value.length;
//   }

//   return !!value;
// };

// export const rules = {
//   [REQUIRED]: {
//     rule: value => isPresented(value),
//     hint: () => <span>Required fields cannot be left blank.</span>,
//   },
//   [REQUIRED_IF_CHECKED]: {
//     rule: (value, allValues, fieldsMap, fieldName) => (allValues[`${fieldName}Checked`] ? isPresented(value) : true),
//     hint: () => <span>Please provide data or uncheck the checkbox.</span>,
//   },
//   [EMAIL]: {
//     rule: value => emailRegex.test(value) && Isemail.validate(value),
//     hint: () => <span>This is not an email. Please enter a valid email.</span>,
//   },
//   [PASSWORD]: {
//     rule: value => passwordRegex.test(value),
//     hint: () =>
//       (<span>
//         Password doesn&apos;t meet the rules.
//       </span>)
//     ,
//   },
//   [PASSWORD_CONFIRMATION]: {
//     rule: (value, allValues, fieldsMap) => {
//       const passwordFieldName = Object.keys(fieldsMap)
//         .find(key => new Set(fieldsMap[key])
//           .has(PASSWORD) && !new Set(fieldsMap[key])
//             .has(PASSWORD_CONFIRMATION));

//       return value === allValues[passwordFieldName];
//     },
//     hint: () => <span>Passwords do not match.</span>,
//   },
//   [WEBSITE]: {
//     rule: value => websiteRegex.test(value),
//     hint: () => <span>This is not a website URL. Please enter a valid URL.</span>,
//   },
//   [PHONE]: {
//     rule: value => phoneRegex.test(value),
//     hint: () => (
//       <span>Phone doesn&apos;t meet the rules.</span>
//     ),
//   },
//   [WEBSITE_OR_PHONE]: {
//     rule: value => websiteRegex.test(value) || phoneRegex.test(value),
//     hint: () => <span>This is not a website URL or phone number.</span>,
//   },
//   [NAME]: {
//     rule: value => nameRegex.test(value),
//     hint: () => <span>Field contains invalid characters.</span>,
//   },
//   [ADDRESS]: {
//     rule: address => address.buildingNumber
//       && address.street
//       && address.locality
//       && address.state
//       && address.country
//       && address.postcode,
//     hint: () => <span>Input full address including street and building.</span>,
//   },
//   [INSTAGRAM_NAME]: {
//     rule: value => value.length <= 30,
//     hint: () => <span>Instagram name cannot be longer than 30 symbols.</span>,
//   },
//   [INSTAGRAM_LOCATION]: {
//     rule: value => /^\d+$/.test(value),
//     hint: () => <span>Instagram location must be a number.</span>,
//   },
//   [DATE]: {
//     rule: value => moment(value, 'DD/MM/YYYY').isValid(),
//     hint: () => <span>The date is invalid.</span>,
//   },
//   [DATE_OF_BIRTH]: {
//     rule: (value) => {
//       const age = moment().diff(moment(value, 'DD/MM/YYYY'), 'years');

//       return age >= MINIMAL_AGE && age <= MAXIMAL_AGE;
//     },
//     hint: () => (<span>The minimal age is {MINIMAL_AGE} and maximal age is {MAXIMAL_AGE}.</span>),
//   },
// };

// export default fieldsMap => (values) => {
//   const errors = {};
//   /* eslint-disable no-restricted-syntax */
//   for (const fieldName of Object.keys(fieldsMap)) {
//     const rulesAppliedToField = fieldsMap[fieldName].map(rule =>
//       ((typeof rule === 'function')
//         ? rule(values)
//         : rule
//       )
//     );
//     const rulesMap = new Set(rulesAppliedToField);

//     // we need exact order of rules:
//     // for example REQUIRED must be the first
//     // even in case when user passes {"field": [EMAIL, REQUIRED]}
//     for (const ruleKey of rulesAppliedToField) {
//       const isOptionalAndChecked = rulesMap.has(REQUIRED_IF_CHECKED) && Boolean(values[`${fieldName}Checked`]);
//       const isOptionalAndUnchecked = rulesMap.has(REQUIRED_IF_CHECKED) && !values[`${fieldName}Checked`];
//       const isRequired = rulesMap.has(REQUIRED) || isOptionalAndChecked;
//       const validation = typeof ruleKey === 'string' ? rules[ruleKey] : ruleKey;
//       const value = values[fieldName];
//       // we do not validate empty strings for non-required fields
//       // for example, if email field is not required and not presented - it is valid
//       // despite empty string actually fails email validation)
//       const isValid = (!isRequired && !isPresented(value))
//           || isOptionalAndUnchecked
//           || validation.rule(value, values, fieldsMap, fieldName);

//       if (!isValid) {
//         errors[fieldName] = validation.hint(value);
//         break;
//       }
//     }
//   }
//   /* eslint-enable no-restricted-syntax */

//   return errors;
// };
