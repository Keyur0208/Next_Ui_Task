import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function page() {

    const colors = ["foreground", "primary", "secondary", "success", "warning", "danger"];

    return (
        <>
            <div style={{ backgroundColor: 'white', color: 'black' }}>
                <div>
                    <h1>Hello</h1>
                </div>
                {colors.map((color) => (
                    <Breadcrumbs key={color} color={color}>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Music</BreadcrumbItem>
                        <BreadcrumbItem>Artist</BreadcrumbItem>
                        <BreadcrumbItem>Album</BreadcrumbItem>
                        <BreadcrumbItem>Song</BreadcrumbItem>
                    </Breadcrumbs>
                ))}
            </div>

        </>

    );
}
