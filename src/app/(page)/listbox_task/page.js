"use client"
import { Delete } from "@mui/icons-material";
import { Avatar, Button, Listbox, ListboxItem, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function page() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <>
            <Listbox
                disabledKeys={["edit", "copy"]}
                onAction={(key) => {
                    alert(key)
                }}
                className="w-25"
            >
                <ListboxItem key="new" >
                    New File
                </ListboxItem>
                <ListboxItem key="copy" >
                    Copy Link
                </ListboxItem>
                <ListboxItem key="edit" >
                    Edit File
                </ListboxItem>
                <ListboxItem key="delet" color="danger"
                    variant="bordered" startContent={<Delete />} >
                    Delete
                </ListboxItem>
            </Listbox>
            <br></br>
            <div className="p-5">
                <Listbox
                    selectionMode="multiple"
                >
                    <ListboxItem
                        key="virat"
                        startContent={<Avatar src="/virat.jpeg" />} >
                        Virat Kohli
                        <br></br>
                        <p>virat@gmail.com</p>
                    </ListboxItem>
                    <ListboxItem
                        key="dhoni"
                        startContent={<Avatar src="/dhoni.jpeg" />} >
                        Ms Dhoni
                        <br></br>
                        <p>dhoni@gmail.com</p>
                    </ListboxItem>
                    <ListboxItem
                        key="Sulok"
                        startContent={<Avatar src="/sulok.png" />} >
                        Sulok Digitak
                        <br></br>
                        <p>s@gmail.com</p>
                    </ListboxItem>
                </Listbox>
            </div>
            <div className="p-5" >
                <Button onPress={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}
                size="xl" placement="center" scrollBehavior="inside" backdrop="blur"   >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody  className="text-black">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>

    )
}