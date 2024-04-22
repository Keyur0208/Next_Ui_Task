import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

export default function Avtar_task() {
    return (
      <>
        <h1 className="p-2" >Avtar</h1>
        <div className="flex gap-4 justify-start p-2" >
          <Avatar src="/dhoni.jpeg" size="md" />
          <Avatar src="/virat.jpeg" isDisabled className="w-20 h-20" isBordered color="success" />
          <Avatar name="virat Kohli" />
          <Avatar src="/sulok.png" size="md" radius="full" color="primary" />
          <Avatar showFallback />
          <Avatar showFallback />
        </div>
        <br></br>
        <h1 className="p-2">Avtar Group</h1>
        <AvatarGroup className="flex justify-start"
          max={2}
          total={3}>
          <Avatar src="/dhoni.jpeg" size="md" />
          <Avatar src="/virat.jpeg" isDisabled isBordered color="success" />
          <Avatar name="virat Kohli" />
          <Avatar src="/sulok.png" size="md" radius="full" color="primary" />
          <Avatar showFallback />
        </AvatarGroup>
        <br></br>
        <h1 className="p-2">Grid</h1>
        <AvatarGroup isGrid >
          <Avatar src="/dhoni.jpeg" size="md" />
          <Avatar src="/virat.jpeg" isDisabled isBordered color="success" />
          <Avatar src="/sulok.png" size="md" radius="full" color="primary" />
          <Avatar name="virat Kohli" />
          <Avatar icon={<AvatarIcon />}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/120",
            }} />
        </AvatarGroup>
  
      </>
    );
  }
  