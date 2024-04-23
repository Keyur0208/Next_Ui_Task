"use client"
import { Google, RemoveCircle } from "@mui/icons-material";
import { Avatar, Chip } from "@nextui-org/react";
import { useState } from "react";


export default function page() {

    const initialFruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"]

    const [fruits, setFruits] = useState(initialFruits);

    const handleClose = (fruitToRemove) => {
        setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
        if (fruits.length === 1) {
            setFruits(initialFruits);
        }
    };

    return (
        <div>
            <div className="text-center" >
                <h1 className="text-3xl" >Chip</h1>
            </div>
            <div className="p-3">
                <Chip color="success" startContent={<Google />}>oogle
                </Chip>
            </div>
            <div className="p-3">
                <Chip
                    color="success"
                    size="lg"
                    avatar={<Avatar src="/virat.jpeg" />}  >King
                </Chip>
            </div>
            <div className="p-3 flex gap-2">
                {fruits.map((fruit, index) => (
                    <Chip key={index} onClose={() => handleClose(fruit)} >
                        {fruit}
                    </Chip>
                ))}
            </div>
        </div>
    )
}