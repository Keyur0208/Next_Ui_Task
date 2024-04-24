"use client"
import { CheckBox, CheckBoxOutlineBlank, CopyAll } from "@mui/icons-material";
import { Skeleton, Card, Button, Avatar, Snippet, ScrollShadow } from "@nextui-org/react";
import { useState } from "react";

export default function page() {

    const [isloaded, setisloaded] = useState(false);


    function myfun() {
        setisloaded(!isloaded);
    }

    return (
        <>
            <div className="p-5">
                <Card className="w-[200px] space-y-5 p-5" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </Card>
            </div>
            <div className="p-5">
                <div className="max-w-[300px] w-full flex items-center gap-3" >
                    <Skeleton className="flex rounded-full w-12 h-12" />
                    <div className="w-full flex flex-col gap-2">
                        <Skeleton className="h-3 w-3/5 rounded-lg" />
                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="max-w-[300px] w-full flex items-center gap-3" >
                    <Skeleton className="flex rounded-full" isLoaded={isloaded} >
                        <Avatar src="/virat.jpeg" />
                    </Skeleton>
                    <div className="w-full flex flex-col gap-2">
                        <Skeleton className=" w-3/5 rounded-lg" isLoaded={isloaded} >
                            <p>Virat Kohli</p>
                        </Skeleton>
                        <Skeleton className=" w-4/5 rounded-lg" isLoaded={isloaded}>
                            <p>virat@gmail.com </p>
                        </Skeleton>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <Button onClick={myfun} className="p-3" >Click Me</Button>
            </div>
            <br></br>
            <div className="p-3">
                <Snippet
                    timeout="1000"
                    symbol="$"
                    color="danger"
                    hideCopyButton
                    variant="flat"
                    checkIcon={<CheckBoxOutlineBlank />}
                    copyIcon={<CopyAll />}
                    size="lg">Keyur Pansuriya</Snippet>
            </div>
            <div className="p-3">
                <Snippet>
                    <span>Keyur Pansuriya</span>
                    <span>Keyur Pansuriya</span>
                    <span>Keyur Pansuriya</span>
                    <span>Keyur Pansuriya</span>
                    <span>Keyur Pansuriya</span>
                </Snippet>
            </div>
            <br></br>
            <ScrollShadow size={50} orientation="horizontal" className="w-[300px] h-[400px]">
                <p>
                    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

                    Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.

                    Est velit labore esse esse cupidatat. Velit id elit consequat minim. Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad ipsum elit esse pariatur sit adipisicing sunt excepteur enim.

                    Incididunt duis commodo mollit esse veniam non exercitation dolore occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure fugiat in magna non consectetur proident fugiat. Commodo magna et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim incididunt non culpa velit quis aute in elit magna ullamco in consequat ex proident.

                    Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo. Veniam voluptate cupidatat ex nisi do ullamco in quis elit.

                    Cillum proident veniam cupidatat pariatur laborum tempor cupidatat anim eiusmod id nostrud pariatur tempor reprehenderit. Do esse ullamco laboris sunt proident est ea exercitation cupidatat. Do Lorem eiusmod aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor consequat cillum tempor laboris mollit laborum reprehenderit reprehenderit veniam aliqua deserunt cupidatat consequat id.

                    Est id tempor excepteur enim labore sint aliquip consequat duis minim tempor proident. Dolor incididunt aliquip minim elit ea. Exercitation non officia eu id.

                    Ipsum ipsum consequat incididunt do aliquip pariatur nostrud. Qui ut sint culpa labore Lorem. Magna deserunt aliquip aute duis consectetur magna amet anim. Magna fugiat est nostrud veniam. Officia duis ea sunt aliqua.

                    Ipsum minim officia aute anim minim aute aliquip aute non in non. Ipsum aliquip proident ut dolore eiusmod ad fugiat fugiat ut ex. Ea velit Lorem ut et commodo nulla voluptate veniam ea et aliqua esse id. Pariatur dolor et adipisicing ea mollit. Ipsum non irure proident ipsum dolore aliquip adipisicing laborum irure dolor nostrud occaecat exercitation.

                    Culpa qui reprehenderit nostrud aliqua reprehenderit et ullamco proident nisi commodo non ut. Ipsum quis irure nisi sint do qui velit nisi. Sunt voluptate eu reprehenderit tempor consequat eiusmod Lorem irure velit duis Lorem laboris ipsum cupidatat. Pariatur excepteur tempor veniam cillum et nulla ipsum veniam ad ipsum ad aute. Est officia duis pariatur ad eiu
                </p>
            </ScrollShadow>
        </>
    )
}