"use client"
import { Camera, Money, SdCard, VoiceChat, VolumeMute, VolumeOffRounded } from "@mui/icons-material";
import { Slider, Switch, Table, TableHeader, TableRow, TableColumn, TableBody, TableCell, Tab, tabs, Tabs , User} from "@nextui-org/react";


export default function page() {
    return (
        <>
            <div className="p-5">
                <Switch
                    defaultSelected
                    color="danger"
                    startContent={<Money />}
                    endContent={<SdCard />}
                >
                    <p className="text-white">Automatic updates</p>
                </Switch>
            </div>
            <div className="p-3 max-w-md gap-6 w-full" >
                <Slider
                    label="Temperature"
                    step={10}
                    maxValue={100}
                    color="danger"
                    size="md"
                    className="max-w-md"
                    showSteps={true}
                    marks={[{
                        value: 20,
                        label: "20%",
                    }, ,
                    {
                        value: 50,
                        label: "50%",
                    },
                    {
                        value: 80,
                        label: "80%",
                    },]}
                    startContent={<VolumeOffRounded />}
                    endContent={<VoiceChat />}
                />
            </div>
            <div className="p-3 max-w-md h-[348px] gap-6 w-full" >
                <Slider
                    label="Temperature"
                    step={1}
                    maxValue={100}
                    minValue={1}
                    color="danger"
                    size="md"
                    className="max-w-md"
                    orientation="vertical"
                />
            </div>
            <br></br>
            <br></br>
            <Table color="danger" className="p-3">
                <TableHeader>
                    <TableColumn>No</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>PR</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
            </Table>
            <div className="p-5">
                <Tabs aria-label="Options" color="danger">
                    <Tab key="Phto"
                        title={<div className="flex justify-center align-middle">
                            <Camera />
                            Photo
                        </div>} >
                        Keyur
                    </Tab>
                    <Tab key="Music" title="Photo">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Tab>
                </Tabs>
                <br></br>
                <div>
                    <User
                        name="Jane Doe"
                        description="Product Designer"
                        avatarProps={{
                            src: "/virat.jpeg"
                        }}
                    />
                </div>
            </div>
        </>


    )
}