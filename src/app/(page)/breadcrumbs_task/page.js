"use client"
import { AbcOutlined, Home, MusicNoteOutlined } from "@mui/icons-material";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React, { useState } from "react";

export default function page() {

    const [currentpage, setCurrentPage] = useState("Home");
    const [colors, setColors] = useState("Home")

    function changepage() {
        if (currentpage === "Home") {
            setCurrentPage("Home")
            setColors('danger')
        }
        else if (currentpage === "About") {
            setCurrentPage("About")
            setColors('danger')
        }
        else {
            setColors('danger')
            setCurrentPage("Music")
        }
    }

    const color = ["foreground", "primary", "danger", "secondary", "warning"];

    const variants = ["solid", "bordered", "light"];

    const separator = ["/", ".", "*", "@", "&","{","}"];

    const all = [
        {
            "color": "danger",
            "underlines": "none",
            "radius": "full"
        },
        {
            "color": "danger",
            "underlines": "hover",
            "radius": "lg"
        },
        {
            "color": "danger",
            "underlines": "always",
            "radius": "md"
        },
        {
            "color": "success",
            "underlines": "active",
            "radius": "sm"
        },
        {
            "color": "success",
            "underlines": "focus",
            "radius": "none"
        }
    ]

    return (
        <>
            <div className="bg-white"  >
                <div className="text-center text-3xl text-black">
                    <h1>Breadcrumbs</h1>
                </div>
                <h1 className="text-3xl text-black p-3" >color</h1>
                {
                    color.map((item, key) => {
                        return (
                            <Breadcrumbs color={item}
                                className="p-3"
                            >
                                <BreadcrumbItem>Home</BreadcrumbItem>
                                <BreadcrumbItem>About</BreadcrumbItem>
                                <BreadcrumbItem>Music</BreadcrumbItem>
                            </Breadcrumbs>
                        )
                    })
                }
                <br></br>
                <h1 className="text-3xl text-black p-3" >variants</h1>
                {
                    variants.map((item, key) => {
                        return (
                            <Breadcrumbs
                                variant={item}
                                className="p-3"
                            >
                                <BreadcrumbItem  >
                                    Home
                                </BreadcrumbItem>
                                <BreadcrumbItem>About</BreadcrumbItem>
                                <BreadcrumbItem>Music</BreadcrumbItem>
                            </Breadcrumbs>
                        )
                    })
                }
                <h1 className="text-3xl text-black p-3" >BreadcrumbItem Props</h1>
                {
                    all.map((item, key) => {
                        return (
                            <Breadcrumbs
                                color={item.color}
                                radius={item.radius}
                                variant="solid"
                                className="p-3"
                                underline={item.underlines}

                            >
                                <BreadcrumbItem>Home</BreadcrumbItem>
                                <BreadcrumbItem>About</BreadcrumbItem>
                                <BreadcrumbItem>Music</BreadcrumbItem>
                            </Breadcrumbs>
                        )
                    })
                }
                <br></br>
                <Breadcrumbs underline="hover"
                    className="p-3"
                >
                    <BreadcrumbItem startContent={<Home />}>Home</BreadcrumbItem>
                    <BreadcrumbItem startContent={<AbcOutlined />}  >About</BreadcrumbItem>
                    <BreadcrumbItem startContent={<MusicNoteOutlined />} >Music</BreadcrumbItem>
                </Breadcrumbs>
                <br></br>
                <h1 className="text-3xl text-black p-3" >Menu Type</h1>
                <Breadcrumbs
                    className="p-3"
                    onAction={changepage}
                >
                    <BreadcrumbItem
                        startContent={<Home />}
                        color={colors}
                        isCurrent={currentpage}
                    >
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        color={colors}
                        startContent={<AbcOutlined />}
                        isCurrent={currentpage}
                    >
                        About
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        color={colors}
                        startContent={<MusicNoteOutlined />}
                        isCurrent={currentpage}
                    >
                        Music
                    </BreadcrumbItem>
                </Breadcrumbs>
                <br></br>
                <h1 className="text-3xl text-black p-3" >Separator</h1>
                {
                    separator.map((item) => {
                        return (
                            <Breadcrumbs
                                separator={item}
                                itemClasses={{
                                    separator: "px-2"
                                }}
                                className="p-3"
                            >
                                <BreadcrumbItem>Home</BreadcrumbItem>
                                <BreadcrumbItem>Music</BreadcrumbItem>
                                <BreadcrumbItem>Artist</BreadcrumbItem>
                                <BreadcrumbItem>Album</BreadcrumbItem>
                                <BreadcrumbItem>Song</BreadcrumbItem>
                            </Breadcrumbs>
                        )
                    })
                }
            </div>

        </>

    );
}
