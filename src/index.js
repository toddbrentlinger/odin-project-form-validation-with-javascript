import { createElement } from './utilities';
import './meyerReset.scss';
import './styles.scss';

(function() {
    class FormInput {
        constructor(labelElement, errors = FormInput.defaultErrors, customErrorHandler = null) {
            this.labelTitleElement = labelElement.querySelector('.label-title');
            this.inputElement = labelElement.querySelector('input');
            this.errorElement = labelElement.querySelector('.error');

            this.errors = errors;

            this.customErrorHandler = customErrorHandler;

            this.init();
        }

        static defaultErrors = {
            patternMismatch: 'Wrong pattern!',
            tooLong: 'Too long!',
            tooShort: 'Too short!',
            rangeOverflow: 'Number must be lower!',
            rangeUnderflow: 'Number must be higher!',
            typeMismatch: 'Wrong type!',
            valueMissing: 'Value required!',
            badInput: 'Bad input!',
        };

        init() {
            this.inputElement.addEventListener('blur', (e) => {
                if (this.inputElement.validity.valid) {
                    // Hide error
                    this.errorElement.textContent = '';
                    this.errorElement.className = 'error';
                } else {
                    // Show error
                    this.showError();
                }
            }, false);
        }

        showError() {
            // Add each lised error if invalid
            let outputText = Object.entries(this.errors) // Get [key, value] pairs of ERRORS in array
                .filter(entry => this.inputElement.validity[entry[0]]) // Filter by invalid errors from input element
                .map(entry => entry[1]) // Map to array of error messages to display
                .join('\n'); // Join array of messages with newline separating them

            if (this.customErrorHandler) {
                const customErrorText = this.customErrorHandler(this.inputElement);
                if (customErrorText) {
                    outputText += `\n${customErrorText}`;
                }
            }

            this.errorElement.textContent = outputText;
            this.errorElement.className = 'error active';
        }
    }

    class CustomForm {
        constructor(formElement) {
            this.element = formElement;

            this.init();
        }

        handleEmailValidation(inputElement) {
            let outputMessagesArr = [];
            let outputMessagesPerValidityState;

            if (inputElement.validity.typeMismatch) {
                outputMessagesPerValidityState = [];

                // Valid character sequence: character followed by '@' symbol followed by another character
                // x@y or x@y.z

                // Check if '@' symbol is present
                const bIncludesAtSymbol = inputElement.value.includes('@');
                let bSingleAtSymbol;
                if (bIncludesAtSymbol) {
                    // Check if more than one '@' symbol (if reach here, guaranteed to have at least one '@' symbol)
                    bSingleAtSymbol = inputElement.value.split('@').length === 2;
                    if (bSingleAtSymbol) {
                        // Check if value is just '@'
                        if (inputElement.value.length === 1) {
                            outputMessagesPerValidityState.push('Must include more than just an "@" symbol!');
                        } else { // Else includes '@' symbol and at least one other character
                            if (inputElement.value.startsWith('@')) {
                                outputMessagesPerValidityState.push('Must NOT start with "@" symbol!');
                            } else if (inputElement.value.endsWith('@')) {
                                outputMessagesPerValidityState.push('Must NOT end with "@" symbol!');
                            } else { // Else '@' symbol is sandwiched on either side by at least one character
                                //console.error('Email should be valid if reach here!');
                            }
                        }
                    } else { // Else multiple instances of '@' symbol
                        outputMessagesPerValidityState.push('Must include only 1 "@" symbol!');
                    }
                } else { // Else '@' symbol is NOT present
                    outputMessagesPerValidityState.push('Must include an "@" symbol!');
                } 

                // Check if '.' is present
                if (inputElement.value.includes('.')) {
                    // Check if valid characters before ('@' cannot be before '.')
                    if (bSingleAtSymbol && /@./.test(inputElement.value)) {
                        outputMessagesPerValidityState.push('Must not follow "@" symbol with "." symbol!');
                    }
                    // Check if valid characters after (any characters after are valid but must NOT end with '.' symbol)
                    if (inputElement.value.endsWith('.')) {
                        outputMessagesPerValidityState.push('Must NOT end with "." symbol!');
                    }
                }

                // If NO custom error messages added, use generic message related to validity state
                if (outputMessagesPerValidityState.length) {
                    outputMessagesArr.push.apply(outputMessagesArr, outputMessagesPerValidityState);
                } else {
                    outputMessagesArr.push('Must be a valid email address type!');
                }
            }

            return outputMessagesArr.join('\n');
        }

        handleZipCodeValidation(inputElement) {
            let outputMessagesArr = [];
            let outputMessagesPerValidityState;

            if (inputElement.validity.patternMismatch) {
                outputMessagesPerValidityState = [];

                // Valid character sequence: 
                // Regex: ^([0-9]{5})[-\s]?([0-9]{4}|)$
                // 5 digits followed by optional space or hyphen followed by optional 4 digits

                // Check if any non-valid characters are present (valid characters: 0-9, -, \s)
                if (/[^0-9\s-]/.test(inputElement.value)) {
                    outputMessagesPerValidityState.push('Must be numbered digits separated by optional space or hyphen!');
                } else { // Else all characters are valid
                    // Check for more than one separating character (dash or space)
                    if (/[\s-][0-9]*[\s-]/.test(inputElement.value)) {
                        outputMessagesPerValidityState.push('Must NOT have more than 1 separating character (dash or space)!');
                    } else { // Else only one separating character (dash or space)
                        // Get two separate sections of digits
                        const digitMatch = inputElement.value.match(/([0-9]*)[\s-]?([0-9]*)/);
                    }
                }

                if (outputMessagesPerValidityState.length) {
                    outputMessagesArr.push.apply(outputMessagesArr, outputMessagesPerValidityState);
                } else {
                    outputMessagesArr.push('Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!');
                }
            }

            return outputMessagesArr.join('\n');
        }

        handlePasswordValidation(inputElement) {

        }

        handlePasswordConfirmationValidaiton(passwordConfirmInputElement, passwordInputElement) {

        }

        init() {
            this.element.querySelectorAll('label').forEach(formLabel => {
                let errors = {};
                let customErrorHandler;
                switch (formLabel.querySelector('input').name) {
                    case 'email':
                        errors = {
                            //typeMismatch: 'Must be a valid email address!',
                            valueMissing: 'Email required!',
                        }
                        customErrorHandler = this.handleEmailValidation.bind(this);
                        break;
                    case 'country':
                        errors = {
                            typeMismatch: 'Must be a valid country name!',
                            valueMissing: 'Country required!',
                            tooLong: 'Country name too long!',
                        }
                        break;
                    case 'zipcode':
                        errors = {
                            //patternMismatch: 'Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!',
                            valueMissing: 'Zipcode required!',
                        }
                        customErrorHandler = this.handleZipCodeValidation.bind(this);
                        break;
                    case 'password':
                    case 'password-confirm':
                        break;
                    default:
                }
                new FormInput(formLabel, errors, customErrorHandler);
            });
        }
    }
    
    new CustomForm(document.getElementById('custom-form'));
})();