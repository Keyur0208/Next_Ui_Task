"use client"
import { CameraAlt, HeartBroken } from "@mui/icons-material"
import { Checkbox, CheckboxGroup, Select } from "@nextui-org/react"
import { useState } from "react"


export default function page() {

    const [select, setSelect] = useState("surat")

    return (
        <div className="bg-white text-black w-100" >
            <div className="text-center text-3xl p-3" >
                <h2>CheckBox</h2>
            </div>
            <div className="flex flex-col items-start gap-5 p-3 "  >
                <div>
                    <Checkbox >Click Me</Checkbox>
                </div>
                <div>
                    <Checkbox defaultSelected >Click Me</Checkbox>
                </div>
                <div>
                    <Checkbox defaultSelected isDisabled >Click Me</Checkbox>
                </div>
                <div className="flex  gap-5 p-3">
                    <Checkbox size="sm">Click Me</Checkbox>
                    <Checkbox size="md">Click Me</Checkbox>
                    <Checkbox size="lg">Click Me</Checkbox>
                </div>
                <div className="flex  gap-5 p-3">
                    <Checkbox radius="sm" defaultSelected >Click Me</Checkbox>
                    <Checkbox radius="md" defaultSelected >Click Me</Checkbox>
                    <Checkbox radius="lg" defaultSelected >Click Me</Checkbox>
                    <Checkbox radius="full" defaultSelected >Click Me</Checkbox>
                </div>
                <div className="flex  gap-5 p-3">
                    <Checkbox color="danger" defaultSelected >Click Me</Checkbox>
                    <Checkbox color="primary" defaultSelected >Click Me</Checkbox>
                    <Checkbox color="success" defaultSelected  >Click Me</Checkbox>
                    <Checkbox color="warning" defaultSelected >Click Me</Checkbox>
                </div>
                <h1 className="p-2">Icon</h1>
                <Checkbox color="danger" defaultSelected icon={<HeartBroken />} >Click Me</Checkbox>
                <Checkbox color="danger" defaultSelected icon={<CameraAlt />} >Click Me</Checkbox>
                <div className="p-3"  >
                    <h1 className="text-3xl">CheckboxGroup</h1>
                </div>
                <div>
                    <CheckboxGroup
                    defaultValue={"surat"}
                    color="danger"
                    value={select}
                    onValueChange={setSelect}
                    >
                        <Checkbox value="surat" >Surat</Checkbox>
                        <Checkbox value="juangath" >Junagath</Checkbox>
                        <Checkbox value="vadodra" >Vadodra</Checkbox>
                    </CheckboxGroup>
                    <p className="text-default-500 text-small">Selected :{select.concat(",")}
                    </p>
                </div>
            </div>
        </div>
    )
}