"use client"
import { Calendar , RangeCalendar } from "@nextui-org/react";
import {parseDate} from '@internationalized/date';
import {today, getLocalTimeZone} from "@internationalized/date";

export default function page() {
    return (
        <div className="flex flex-wrap" >
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                isDisabled
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                isReadOnly
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                defaultValue={parseDate("2024-04-10")}
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                minValue={today(getLocalTimeZone())}
                defaultValue={today(getLocalTimeZone())}
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                maxValue={today(getLocalTimeZone())}
                defaultValue={today(getLocalTimeZone())}
                 />
            </div>
            <div className="p-5">
                <Calendar
                aria-label="Date (Uncontrolled)"
                visibleMonths={2}
                pageBehavior="single" 
                 />
            </div>
            <div className="p-5">
                <RangeCalendar 
                aria-label="Date (Min Date Value)"
                visibleMonths={2}
                />
            </div>
        </div>
    )

}