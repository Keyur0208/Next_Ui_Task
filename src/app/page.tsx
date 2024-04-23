"use client"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  
  return (
    <>
      <div className="text-center" >
        <h1 className="text-4xl p-2" >Next UI</h1>
      </div>
      <br></br>
      <div className="flex items-center justify-center flex-wrap ">
        <div className="p-5">
          <Button color="primary" size="sm" onClick={()=>router.push('/avtar')} >
            Avtar Task
          </Button>
        </div>
        <div className="p-5" >
          <Button size="md" color="danger" onClick={()=>router.push('/accordion')} > 
            According Task
          </Button>
        </div>
        <div className="p-5" >
          <Button size="lg" variant="shadow" onClick={()=>router.push('/button_task')}  >
            Button Task
          </Button>
        </div>
        <div className="p-5" >
          <Button size="md" color="success" onClick={()=>router.push('/bage_task')}  >
          Badge
          </Button>
        </div>
        <div className="p-5" >
          <Button size="sm" color="warning" onClick={()=>router.push('/breadcrumbs_task')}  >
          Breadcrumbs
          </Button>
        </div>
        <div className="p-5" >
          <Button size="lg" color="default" onClick={()=>router.push('/card')}  >
          card
          </Button>
        </div>
        <div className="p-5" >
          <Button size="md" color="danger" onClick={()=>router.push('/checkbox_task')}  >
          Checkbox
          </Button>
        </div>
        <div className="p-5" >
          <Button size="sm" color="success" onClick={()=>router.push('/chip')}  >
          Chip
          </Button>
        </div>
        <div className="p-5" >
          <Button size="lg" color="secondary" onClick={()=>router.push('/input_task')}  >
          Input Form Task
          </Button>
        </div>
        <div className="p-5" >
          <Button size="md" color="primary" onClick={()=>router.push('/cir_task')}  >
          Circular Progress
          </Button>
        </div>
        <div className="p-5" >
          <Button size="sm" color="success" onClick={()=>router.push('/calender_task')}  >
           Celender
          </Button>
        </div>
        <div className="p-5" >
          <Button size="lg" onClick={()=>router.push('/dropdown_task')}  >
           DropDown
          </Button>
        </div>
      </div>
    </>
  );
}
