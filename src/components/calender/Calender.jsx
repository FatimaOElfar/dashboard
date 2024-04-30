import * as React from 'react';
import { useEffect, useState } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { addClass } from '@syncfusion/ej2-base';
import './Calender.css';
const Calender = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const specialDate = (args, name) => {
        let span = document.createElement('span');
        span.setAttribute('class', 'e-icons highlight');
        args.element.firstElementChild.setAttribute('title', name + '!');
        addClass([args.element], ['e-day', 'special', name.toLowerCase()]);
        args.element.setAttribute('data-val', name + '!');
        args.element.setAttribute('title', name + '!');
        args.element.appendChild(span);
    };
    const customDates = (args) => {
        /Dates need to be customized/
        if (args.date.getDate() === 10) {
            specialDate(args, "Birthday");
        }
        if (args.date.getDate() === 15) {
            specialDate(args, "Farewell");
        }
        if (args.date.getDate() === 25) {
            specialDate(args, "Vacation");
        }
    };
    const onchange = (args) => {
        let title = '';
        if (args.event) {
            /Displays selected date in the label/
            title = args.event.currentTarget.classList.contains('e-selected') ? args.event.currentTarget.getAttribute('data-val') : args.event.currentTarget.getElementsByClassName('e-selected').length > 0
                ? args.event.currentTarget.getElementsByClassName('e-selected')[0].getAttribute('data-val') : null;
            title = title == null ? '' : ' ( ' + title + ' )';
        }
        setSelectedValue(args.value.toLocaleDateString() + title);
    };
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className='calendar-control-section' style={{ overflow: 'auto' }}>
                    <CalendarComponent renderDayCell={customDates.bind(this)} change={onchange} className='e-customStyle'></CalendarComponent>
                    <label id='date_label'>Selected Value:{selectedValue}</label>
                </div>
            </div>
        </div>);
};
export default Calender;