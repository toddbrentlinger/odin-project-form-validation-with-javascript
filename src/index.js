import { createElement } from './utilities';
import './meyerReset.scss';
import './styles.scss';

(function() {
    class CustomForm {
        constructor(formElement) {
            this.element = formElement;
        }
    }

    document.body.appendChild(
        createElement('h1', {}, 'Odin Project - Form Validation with JavaScript')
    );
})();