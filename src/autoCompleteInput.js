import { createElement } from './utilities';

export class AutoCompleteInput {
    /**
     * 
     * @param {HTMLInputElement} inputElement 
     * @param {Array<String>} strArr 
     */
    constructor(inputElement, strArr) {
        this.inputElement = inputElement;
        this.strArr = strArr;
        this.currentFocus = null;

        this.inputElement.addEventListener('input', this.handleInputEvent.bind(this), false);
        this.inputElement.addEventListener('keydown', this.handleKeyDownEvent.bind(this), false);

        document.addEventListener('click', (e) => {
            this.closeAllLists(e.target);
        }, false);
    }

    handleInputEvent() {
        let val = this.inputElement.value;
        let matchingOptionsContainer, matchingOption;

        // Close any already open lists of autocompleted values
        this.closeAllLists();

        // Return if NO value in input element
        if (!val) return;

        this.currentFocus = -1;

        // Create element to contain the matching options
        matchingOptionsContainer = createElement('div', 
            { 
                id: this.inputElement.id + 'autocomplete-list', 
                class: 'autocomplete-items',
            }
        );

        // Append element as child of input element container
        this.inputElement.parentNode.appendChild(matchingOptionsContainer);

        this.strArr.forEach(str => {
            // Check if the item starts with the same letters as the text field value
            if (str.substring(0, val.length).toUpperCase() == val.toUpperCase()) {
                // Create element for each match
                matchingOption = createElement('div', {}, 
                  createElement('span', {}, str.substring(0, val.length)),
                  str.substring(val.length),
                  createElement('input', { type: 'hidden', value: '' }, str)
                );
                
                matchingOption.addEventListener('click', (e) => {
                    this.inputElement.value = this.inputElement.getElementsByTagName('input')[0].value;
                    this.closeAllLists();
                }, false);

                // Append matching option to container
                matchingOptionsContainer.appendChild(matchingOption);
            }
        });
    }

    handleKeyDownEvent(e) {
        let autocompleteList = document.getElementById(this.inputElement.id + 'autocomplete-list');
        if (autocompleteList) {
            autocompleteList = autocompleteList.getElementsByTagName('div');
        }

        // If arrow down key is pressed
        if (e.keyCode == 40) {
            this.currentFocus++;
            this.addActive(autocompleteList);
        } else if (e.keyCode == 38) { // Else if arrow up key is pressed
            this.currentFocus--;
            this.addActive(autocompleteList);
        } else if (e.keyCode == 13) { // Else if enter key is pressed
            e.preventDefault();
            if (this.currentFocus > -1) {
                if (autocompleteList) {
                    autocompleteList[this.currentFocus].click();
                }
            }
        }
    }

    addActive(autocompleteElementList) {
        if (!autocompleteElementList) return;

        this.removeActive(autocompleteElementList);

        if (this.currentFocus >= autocompleteElementList.length) {
            this.currentFocus = 0;
        } else if (curr < 0) {
            this.currentFocus = autocompleteElementList.length - 1;
        }

        autocompleteElementList[this.currentFocus].classList.add('autocomplete-active');
    }

    removeActive(autocompleteElementList) {
        [...autocompleteElementList].forEach((autocompleteElement) => {
            autocompleteElement.classList.remove('autocomplete-active');
        });
    }

    // TODO: Make static to close lists in all instances of AutoCompleteInput
    closeAllLists(elementException) {
        const x = document.getElementsByClassName('autocomplete-items');
        [...x].forEach((element) => {
            if (elementException != element && elementException != this.inputElement) {
                element.parentNode.removeChild(element);
            }
        });
    }
}
