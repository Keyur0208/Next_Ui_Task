"use client"
import React, { useState } from "react";
import { Avatar, Badge } from "@nextui-org/react";
import { Camera, Facebook, Instagram, NotificationAdd, Twitter } from "@mui/icons-material";

export default function page() {
  
  const [data, setData] = useState(false)

  function showdata()
  {
    if(data === false)
    {
      setData(true);
    }
    else
    {
      setData(false)
    }
  }

  return (
    <>
      <div className="text-center text-3xl p-3">
        <h1>Badge Task</h1>
      </div>
      <div className="flex items-center justify-center gap-4 p-3">
        <Badge content="5" size="sm" color="primary" >
          <Avatar src="/virat.jpeg" size="lg" />
        </Badge>
        <Badge content="5" size="lg" color="danger" placement="bottom-right">
          <Avatar src="/virat.jpeg" size="lg" isBordered color="danger" />
        </Badge>
        <Badge content="5" size="md" placement="bottom-left" shape="circle">
          <Avatar src="/virat.jpeg" size="lg" />
        </Badge>
        <Badge content="5" size="lg" color="success" placement="top-left" shape="rectangle">
          <Avatar src="/virat.jpeg" size="lg" radius="md" isBordered color="success" />
        </Badge>
      </div>
      <br></br>
      <div className="flex items-center justify-center gap-4 p-3">
        <Badge content="6" size="sm" color="primary" isInvisible={data}>
          <Camera />
        </Badge>
        <Badge content="2" size="sm" color="primary" isInvisible={data}>
          <NotificationAdd />
        </Badge>
        <Badge content="5" size="sm" color="primary" isInvisible={data}> 
          <Instagram />
        </Badge>
        <Badge content="4" size="sm" color="primary" isInvisible={data}>
          <Facebook />
        </Badge>
        <Badge content="Demo" size="sm" color="primary" isInvisible={data}>
          <Twitter />
        </Badge>
      </div>
      <div className="flex items-center justify-center gap-4 p-3">
        <input type="checkbox" onClick={showdata}/>
      </div>
      <br></br>
    </>
  );
}
