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
            this.errorElement.textContent = Object.entries(this.errors) // Get [key, value] pairs of ERRORS in array
                .filter(entry => this.inputElement.validity[entry[0]]) // Filter by invalid errors from input element
                .map(entry => entry[1]) // Map to array of error messages to display
                .join('\n'); // Join array of messages with newline separating them

            this.errorElement.className = 'error active';
        }
    }

    class CustomForm {
        constructor(formElement) {
            this.element = formElement;

            this.init();
        }

        init() {
            this.element.querySelectorAll('label').forEach(formLabel => {
                let errors = {};
                let customErrorHandler;
                switch (formLabel.querySelector('input').name) {
                    case 'email':
                        errors = {
                            typeMismatch: 'Must be a valid email address!',
                            valueMissing: 'Email required!',
                        }
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
                            patternMismatch: 'Must be a 5-digit number!',
                            valueMissing: 'Zipcode required!',
                        }
                        break;
                    case 'password':
                    case 'password-confirm':
                        break;
                    default:
                }
                new FormInput(formLabel, errors);
            });
        }
    }
    
    new CustomForm(document.getElementById('custom-form'));
})();