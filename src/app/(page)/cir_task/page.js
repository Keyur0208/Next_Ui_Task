import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function App() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl">Circular Progress</h1>
            </div>
            <div className="p-5">
                <Card className="w-[240px] h-[240px] border-none  p-5 bg-gradient-to-br from-violet-500 to-fuchsia-500">
                    <CardBody className="justify-center items-center pb-0">
                        <CircularProgress
                            classNames={{
                                svg: "w-36 h-36 drop-shadow-md",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={80}
                            strokeWidth={4}
                            showValueLabel={true}
                        />
                    </CardBody>
                    <CardFooter className="justify-center items-center pt-0">
                        <Chip
                            classNames={{
                                base: "border-1 border-white/30",
                                content: "text-white/90 text-small font-semibold",
                            }}
                            variant="bordered"
                        >
                            2800 Data points
                        </Chip>
                    </CardFooter>
                </Card>
                <CircularProgress />
                <CircularProgress color="danger" />
            </div>
        </div>
    );
}
