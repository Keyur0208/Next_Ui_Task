"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";

export default function page() {
    return (
        <>
            <div className="p-5 ">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="text-white"
                        >
                            Open Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" color="danger" disabledKeys={["edit", "delete"]} >
                        <DropdownItem key="new" className="text-black">New file</DropdownItem>
                        <DropdownItem key="copy" className="text-black">Copy link</DropdownItem>
                        <DropdownItem key="edit" className="text-black">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

        </>
    )
}