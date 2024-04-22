"use client"
import { Money, Phone, Surfing } from "@mui/icons-material"
import { Accordion, Avatar } from "@nextui-org/react"
import { AccordionItem } from "@nextui-org/react"

export default function page() {

    const deatils = "Hello How Are You ? I Am Fine . And Good Daya"

    return (
        <div style={{backgroundColor:'white',color:"black"}}>
            <div className="text-center text-3xl p-2" >
                <h1>Accordion</h1>
            </div>
            <br></br>

            <Accordion isCompact >
                <AccordionItem key="1" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 1" subtitle="Hello">
                    <p className="text-success">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="2" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 2">
                    <p className="text-danger">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="3" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 3">
                    <p className="text-warning">{deatils}</p>
                </AccordionItem>
            </Accordion>
            <br></br>
            <h1 className="p-3 text-2xl" >Selection Mode</h1>
            <Accordion className="w-50" selectionMode="multiple" >
                <AccordionItem key="1" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 1" subtitle="Hello">
                    <p className="text-success">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="2" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 2">
                    <p className="text-danger">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="3" style={{ backgroundColor: 'white', padding: '10px' }} title="Accordion 3">
                    <p className="text-warning">{deatils}</p>
                </AccordionItem>
            </Accordion>
            <br></br>
            <h1 className="p-3 text-2xl" >Variant</h1>
            <Accordion className="w-50" variant="splitted">
                <AccordionItem key="1"  title="Accordion 1" subtitle="Hello">
                    <p className="text-success">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="2" title="Accordion 2">
                    <p className="text-danger">{deatils}</p>
                </AccordionItem>
                <AccordionItem key="3" title="Accordion 3">
                    <p className="text-warning">{deatils}</p>
                </AccordionItem>
            </Accordion>
            <h1 className="p-5 text-2xl" >Task</h1>
            <Accordion variant="splitted">
                <AccordionItem key={1} title="Virat Kohli"   startContent={<Avatar src="/virat.jpeg" />} indicator={<Surfing/>} >
                <p className="text-success">{deatils}</p>
                </AccordionItem>
                <AccordionItem key={2} title="Ms Dhoni"   startContent={<Avatar src="/dhoni.jpeg" />} indicator={<Money/>}>
                <p className="text-warning">{deatils}</p>
                </AccordionItem>
                <AccordionItem key={3} title="Sulok Digital PVP Limited"   startContent={<Avatar src="/sulok.png" />} indicator={<Phone/>}>
                <p className="text-danger">{deatils}</p>
                </AccordionItem>
            </Accordion>

        </div>
    )
}