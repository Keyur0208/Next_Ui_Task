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
      <div className="flex items-center ">
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
      </div>

    </>
  );
}
