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
            this.inputElement.addEventListener('input', this.checkValidity.bind(this), false);
        }

        checkValidity(e) {
            let invalidStateArr = [];
            if (!this.inputElement.validity.valid) {
                invalidStateArr = Object.entries(this.errors) // Get [key, value] pairs of ERRORS in array
                    .filter(entry => this.inputElement.validity[entry[0]]) // Filter by invalid errors from input element
                    .map(entry => entry[1]) // Map to array of error messages to display
            }

            if (this.customErrorHandler) {
                const customErrorText = this.customErrorHandler(this.inputElement);
                if (customErrorText) {
                    invalidStateArr = invalidStateArr.concat(customErrorText);
                }
            }

            // Clear error messages, if any
            while (this.errorElement.firstElementChild) {
                this.errorElement.firstElementChild.remove();
            }

            if (!invalidStateArr.length) {
                // Sets input to :valid state for styling
                this.inputElement.setCustomValidity('');

                // Hide error
                this.errorElement.className = 'error';
            } else {
                // Sets input to :invalid state for styling
                this.inputElement.setCustomValidity(' ');

                // Display error
                this.errorElement.append(...invalidStateArr.map(invalidState => createElement('p', {}, invalidState)));
                this.errorElement.className = 'error active';
            }
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
                    if (bSingleAtSymbol && /@\./.test(inputElement.value)) {
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

            return outputMessagesArr;
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

            return outputMessagesArr;
        }

        handlePasswordValidation(inputElement) {
            /** Password Requirements:
             *  - Minimum 8 characters
             *  - At least one uppercase letter
             *  - At least one lowercase letter
             *  - At least one special character
             *  - At least one number
             */
            // Object to hold boolean value for each password validation
            const validations = {};
            const invalidMessageArr = [];

            // Minimum 8 characters
            validations.minChars = inputElement.value.length >= 8;
            if (!validations.minChars) {
                invalidMessageArr.push('Must have minimum 8 characters!');
            }

            // At least one uppercase letter
            validations.uppercaseLetter = /[A-Z]/.test(inputElement.value);
            if (!validations.uppercaseLetter) {
                invalidMessageArr.push('Must have at least one uppercase letter!');
            }

            // At least one lowercase letter
            validations.lowercaseLetter = /[a-z]/.test(inputElement.value);
            if (!validations.lowercaseLetter) {
                invalidMessageArr.push('Must have at least one lowercase letter!');
            }

            // At least one number
            validations.number = /[0-9]/.test(inputElement.value);
            if (!validations.number) {
                invalidMessageArr.push('Must have at least one number!');
            }

            // At least one special character
            validations.specialChar = /[~`!@#$%^&*()_\-+={[}\]|\:;"'<,>.?/]/.test(inputElement.value);
            if (!validations.specialChar) {
                invalidMessageArr.push('Must have at least one special character!');
            }

            if (invalidMessageArr) {
                inputElement.setCustomValidity(' ');
            }

            this.updatePasswordRequiredStatesElement(validations);

            console.log(invalidMessageArr);

            return invalidMessageArr;
        }

        handlePasswordConfirmationValidaiton(passwordConfirmInputElement, passwordInputElement) {
            let outputMessagesArr = [];

            if (passwordConfirmInputElement.value !== passwordInputElement.value) {
                outputMessagesArr.push('Passwords do NOT match!');
            }

            return outputMessagesArr;
        }

        /**
         * Updates element holding password required states given an object of key/value pairs with boolean value of a state validity.
         * @param {Object} stateValidity - Keys are matching data attribute of message element and values are boolean of whether state is valid
         */
        updatePasswordRequiredStatesElement(stateValidity) {
            // Return if NO element to display required states
            if (!this.passwordRequiredStatesElement) return;

            const requiredStatesElements = this.passwordRequiredStatesElement.querySelectorAll('.password-required-state-item');

            requiredStatesElements.forEach(element => {
                if (stateValidity[element.dataset.requiredState]) {
                    element.classList.add('valid');
                } else {
                    element.classList.remove('valid');
                }
            });
        }

        init() {
            // Password Required States
            this.passwordRequiredStatesElement = document.getElementById('password-required-states');

            // Email
            const emailElement = this.element.querySelector('label[for="email"]');
            if (emailElement) {
                new FormInput(
                    emailElement, 
                    {
                        //typeMismatch: 'Must be a valid email address!',
                        valueMissing: 'Email required!',
                    }, 
                    this.handleEmailValidation.bind(this)
                );
            }

            // Country
            const countryElement = this.element.querySelector('label[for="country"]');
            if (countryElement) {
                new FormInput(
                    countryElement, 
                    {
                        typeMismatch: 'Must be a valid country name!',
                        valueMissing: 'Country required!',
                        tooLong: 'Country name too long!',
                    }
                );
            }

            // Zipcode
            const zipcodeElement = this.element.querySelector('label[for="zipcode"]');
            if (zipcodeElement) {
                new FormInput(
                    zipcodeElement, 
                    {
                        //patternMismatch: 'Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!',
                        valueMissing: 'Zipcode required!',
                    }, 
                    this.handleZipCodeValidation.bind(this)
                );
            }

            // Password
            const passwordElement = this.element.querySelector('label[for="password"]');
            if (passwordElement) {
                new FormInput(
                    passwordElement, 
                    {}, 
                    this.handlePasswordValidation.bind(this)
                );
            }

            // Password Confirm
            const passwordConfirmElement = this.element.querySelector('label[for="password-confirm"]');
            if (passwordConfirmElement) {
                new FormInput(
                    passwordConfirmElement, 
                    {
                        //patternMismatch: 'Must be 5 digits followed by optional space or hyphen followed by optional 4 digits!',
                        valueMissing: 'Zipcode required!',
                    }, 
                    (passwordConfirmInputElement) => {
                        return this.handlePasswordConfirmationValidaiton(
                            passwordConfirmInputElement, 
                            this.element.querySelector('input[name="password"]')
                        );
                    }
                );
            }
        }
    }
    
    new CustomForm(document.getElementById('custom-form'));
})();