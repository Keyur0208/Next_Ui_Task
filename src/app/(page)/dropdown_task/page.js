"use client"
import { Anchor, HolidayVillageTwoTone, Home, HomeMax, NotificationAdd } from "@mui/icons-material";
import { Dropdown, DropdownItem, DropdownMenu, Image, DropdownTrigger, Button, Avatar, Kbd, Link } from "@nextui-org/react";

export default function page() {
    return (
        <>
            <div className="p-5 ">
                <Dropdown backdrop="blur" >
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="text-white"
                            startContent={<HolidayVillageTwoTone />}
                        >
                            Open Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" color="danger" disabledKeys={["edit", "delete"]} >
                        <DropdownItem key="new" className="text-black" href="/" >
                            New file
                        </DropdownItem>
                        <DropdownItem key="copy" className="text-black">Copy link</DropdownItem>
                        <DropdownItem key="edit" className="text-black">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="p-5 ">
                <Dropdown backdrop="blur" >
                    <DropdownTrigger >
                        <div className="flex gap-3 items-center" >
                            <div>
                                <Avatar src="/virat.jpeg" isBordered size="lg" color="danger" />
                            </div>
                            <div >
                                <h1>Virat Kohli</h1>
                                <span>@viratkohli</span>
                            </div>
                        </div>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="signed" className="text-black"
                            shortcut="⌘N">
                            Signed in as
                            <br></br>
                            @viratkohli
                        </DropdownItem>
                        <DropdownItem key="setting" className="text-black">
                            My Setting
                        </DropdownItem>
                        <DropdownItem key="team" className="text-black" startContent={<NotificationAdd />}>
                            Team Setting
                        </DropdownItem>
                        <DropdownItem key="analytics" className="text-black" >
                            Analytics
                        </DropdownItem>
                        <DropdownItem key="system" className="text-black">
                            System
                        </DropdownItem>
                        <DropdownItem key="logout" className="text-black">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Image
                isZoomed
                isBlurred
                className="p-3"
                    width={300}
                    src="/virat.jpeg"
                />
                <div>
                    <Kbd keys={["enter"]} >K</Kbd>
                </div>
                <div>
                    <Link  
                    isExternal
                    showAnchorIcon 
                    href="/" 
                    isBlock
                    color="danger"
                    anchorIcon={<Home/>}
                    >Return Home</Link>
                </div>
            </div>

        </>
    )
}