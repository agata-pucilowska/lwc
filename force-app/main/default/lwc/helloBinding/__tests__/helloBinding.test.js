import {createElement} from 'lwc';
import HelloBinding from 'c/helloBinding';

describe('c-hello-binding test suite', () => {
    beforeEach(() => {
        const element = createElement('c-hello-binding',{
            is:HelloBinding
        })
        document.body.appendChild(element);
    });
	
	afterEach(() => {
		while (document.body.firstChild){
		document.body.removeChild(document.body.firstChild);
		}
	});

    test('default value should be Hello !!', () => {
        const element = document.querySelector('c-hello-binding');
        const divEl = element.shadowRoot.querySelector('div');
        expect(divEl.textContent).toBe('Hello !!');
    })

    test('input change event value', () => {
        const element = document.querySelector('c-hello-binding');
        const inputEl = element.shadowRoot.querySelector('lightning-input');
        inputEl.value = 'Salesforce';
        inputEl.dispatchEvent(new CustomEvent('change'))
        const divEl = element.shadowRoot.querySelector('div');
        return Promise.resolve().then (() => {
            expect(divEl.textContent).toBe('Hello Salesforce!!');
        })
    })

})