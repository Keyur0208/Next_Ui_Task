"use client"
import { Link } from "@mui/material";
import { Card, CardBody, CardFooter, CardHeader, Avatar, Divider, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

    const [colors, setcolors] = useState("primary");
    const [change, setchange] = useState(true);
    const [count, setcount] = useState(4)

    function follow_click() {
        if (colors == "primary") {
            setcolors("secondary")
        }
        else {
            setcolors("primary");
        }


        if (change == true) {
            setchange(false)
            setcount(count + 1)
        }
        else {
            setchange(true);
            setcount(count - 1)
        }


    }


    return (
        <div className="bg-white text-black" >
            <div className="text-center text-3xl p-3" >
                Card
            </div>
            <div className="p-3 flex  gap-4 ">
                <div>
                    <Card className="max-w-[400px]" >
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div>
                                    <Avatar src="/nextui.png" radius="md" />
                                </div>
                                <div>
                                    <h1>Next Ui</h1>
                                    <Link href="#" className="text-black no-underline" >nextui.org</Link>
                                </div>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <h1>
                                Make beautiful websites regardless of your design experience.
                            </h1>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <h1>
                                Visit source code on GitHub.
                            </h1>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h1 className="text-tiny uppercase font-bold">Virat Kohli</h1>
                            <p className="text-default-500">Batsman</p>
                            <h2 className="font-bold text-large">Virat Run Machine</h2>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <img src="/virat.jpeg" className="rounded-xl hover:rounded-full" />
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            alt="Woman listing to music"
                            className="object-cover"
                            height={200}
                            src="/virat.jpeg"
                            width={200}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">Available soon.</p>
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                Notify me
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <Avatar src="/virat.jpeg" />
                            <div className="p-3" >
                                <h1 className="font-bold">Virat Kohli</h1>
                                <p>@viratkohli</p>
                            </div>
                            <Button color={colors} radius="full" onClick={follow_click}  >
                                {change ? "Follow" : "Unfollow"}
                            </Button>
                        </CardHeader>
                        <CardBody>
                            <div className="flex flex-col" >
                                <p>
                                    Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                                </p>
                                <p>
                                    #FrontendWithZoey 💻
                                </p>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="flex flex-row p-2" >
                                <p>4</p>
                                <p className="px-2">Follwing</p>
                            </div>
                            <div className="flex flex-row p-2" >
                                <p>{count}</p>
                                <p className="px-2">Followers</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}