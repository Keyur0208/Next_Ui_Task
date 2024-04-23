"use client"
import { CalendarToday, TimeToLeave, Visibility, VisibilityOff } from "@mui/icons-material";
import { DateRangePicker,Button, CalendarDate, DateInput, DatePicker, Input, TimeInput } from "@nextui-org/react";
import { useState } from "react";
import {parseZonedDateTime} from "@internationalized/date";


export default function Page() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [email, setemail] = useState("");

    const [password, setpassword] = useState("")

    function showdata()
    {
        alert(email +"\n"+ password);
    }

    return (
        <div className="bg-white text-black" >
            <div className="text-center">
                <h1 className="text-3xl p-3">Input Form</h1>
            </div>
            <div className="h-100 w-100 flex flex-col justify-center align-middle">
                <div >
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        className="max-w-xs p-3"
                        variant="bordered"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        variant="bordered"
                        isRequired
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    < Visibility className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    < VisibilityOff className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="max-w-xs p-3"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <DateInput 
                    isRequired
                    label={"Birth date"} 
                    className="max-w-xs p-3"
                    startContent={<CalendarToday/>}
                    />
                    <TimeInput 
                    isRequired
                    label="Time"
                    className="max-w-xs p-3"
                    startContent={<TimeToLeave/>} 
                    />
                    <DatePicker
                    isRequired
                    variant="underlined"
                    className="max-w-xs p-3"
                    />
                    <DateRangePicker 
                    label="Event duration"
                    hideTimeZone
                    visibleMonths={2}
                    defaultValue={{
                      start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
                      end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
                    }}
                    className="w-50 p-3"

                    />
                    
                    <div className="p-3" >
                        <Button 
                        color="primary"
                        className="w-50"
                        onClick={showdata}
                        
                        >Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}