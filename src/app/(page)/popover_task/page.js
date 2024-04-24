"use client"
import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Progress } from "@nextui-org/react";

export default function App() {
    const content = (
        <PopoverContent >
            <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
            </div>
        </PopoverContent>
    );

    const all = [
        {
            "color": "default",
            "placement": "top-start"
        },
        {
            "color": "danger",
            "placement": "top"
        },
        {
            "color": "primary",
            "placement": "top-end"
        },
        {
            "color": "secondary",
            "placement": "bottom-start"
        },
        {
            "color": "warning",
            "placement": "bottom-end"
        },
        {
            "color": "default",
            "placement": "right-start"
        },
        {
            "color": "danger",
            "placement": "right"
        },
        {
            "color": "primary",
            "placement": "right-end"
        },
        {
            "color": "secondary",
            "placement": "left-start"
        },
        {
            "color": "warning",
            "placement": "left"
        },
        {
            "color": "default",
            "placement": "left-end"
        },
    ];

    const [value, setValue] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
          }, 500);
      
          return () => clearInterval(interval);
        }, []);

    return (
        <>
            <div className="flex flex-wrap gap-4 p-20">
                {all.map((item) => (
                    <Popover key={item} placement={item.placement} color={item.color} backdrop="blur" >
                        <PopoverTrigger>
                            <Button color={item.color} className="capitalize">
                                {item.placement}
                            </Button>
                        </PopoverTrigger>
                        {content}
                    </Popover>
                ))}
            </div>
            <br></br>
            <div className="w-50 p-5">
                <Progress value={100} color="danger" isIndeterminate />
            </div>
            <div className="w-50 p-5">
                <Progress 
                value={100} 
                color="danger" 
                label="Loading ......"
                isStriped />
            </div>
            <div className="w-50 p-5">
                <Progress 
                value={value} 
                color="primary" 
                label="Loading ......"
                 />
            </div>
        </>
    );
}
