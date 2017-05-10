import React from 'react';

export {default as FieldErrors} from './FieldErrors';
export {default as Message} from './Message';

// export function createRulesWithCustomErrors(rules, errors, fields) {
//     fields = fields.slice(); // Add global error field
//     fields.unshift('');
//
//     return function(check) {
//         rules.call(this, check);
//
//         fields.forEach(field => {
//             const error = errors
//                 .filter(err => err.field === field)
//                 .map(err => err.error);
//
//             check(field).setValid('custom', error.length === 0, error[0]);
//         });
//     };
// }
