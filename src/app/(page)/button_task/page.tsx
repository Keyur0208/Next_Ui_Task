import { Button, ButtonGroup } from "@nextui-org/react"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { HeartBroken } from "@mui/icons-material";

export default function Button_task() {
    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl p-3" >Button Task</h1>
            </div>
            <h1 className="p-3 text-3xl" >Color And Size </h1>
            <div className="flex items-center p-3 gap-3" >
                <Button color="danger" size="sm" >
                    Click Me
                </Button>
                <Button color="success" size="md" >
                    Click Me
                </Button>
                <Button color="warning" size="lg" >
                    Click Me
                </Button>
                <Button color="primary" size="sm" >
                    Click Me
                </Button>
                <Button color="secondary" size="md" >
                    Click Me
                </Button>
                <Button color="default" size="lg" >
                    Click Me
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >Variant</h1>
            <div className="flex items-center p-3 gap-3" >
                <Button color="success" size="md" variant="flat" >
                    Click Me
                </Button>
                <Button color="success" size="lg" variant="shadow">
                    Click Me
                </Button>
                <Button color="success" size="sm" variant="solid" >
                    Click Me
                </Button>
                <Button color="success" size="md" variant="light" >
                    Click Me
                </Button>
                <Button color="success" size="lg" variant="faded">
                    Click Me
                </Button>
                <Button color="success" size="sm" variant="ghost" >
                    Click Me
                </Button>
                <Button color="success" size="sm" variant="bordered" >
                    Click Me
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >Loading</h1>
            <div className="flex items-center p-3 gap-3" >
                <Button color="danger" size="md" isLoading >
                    Click Me
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >With Icon</h1>
            <div className="flex items-center p-3 gap-3" >
                <Button startContent={<CameraAltIcon/>}>
                    Click Me
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >Icon Only</h1>
            <div className="flex items-center p-3 gap-3" >
                <Button isIconOnly color="danger"  aria-label="Love" >
                    <HeartBroken/>
                </Button>
                <Button isIconOnly color="default"  aria-label="Love" >
                    <CameraAltIcon/>
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >Customer Style</h1>
            <div className="flex items-center p-3 gap-3" >
                <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >
                    Click Me
                </Button>
            </div>
            <h1 className="p-3 text-3xl" >Button Group</h1>
            <div className="flex items-center p-3 gap-3" >
               <ButtonGroup isDisabled>
                    <Button variant="shadow" color="success" >One</Button>
                    <Button color="primary" >Two</Button>
                    <Button color="danger">Three</Button>
               </ButtonGroup>
            </div>
        </>

    )
}