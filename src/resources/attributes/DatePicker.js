/**
 * Created by rigel on 9/18/16.
 */
import { inject, customAttribute, DOM } from 'aurelia-framework';
import                                    'bootstrap-datepicker';

@customAttribute('datepicker')
@inject(DOM.Element)
export class DatePicker {
    constructor(element) {
        this.element = element;
    }

    attached() {
        $(this.element).datepicker({
          orientation: 'bottom'
        })
            .on('change', e => fireEvent(e.target, 'input'));

    }

    detached() {
        $(this.element).datepicker('destroy')
            .off('change');
    }
}

function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
}

function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
}
