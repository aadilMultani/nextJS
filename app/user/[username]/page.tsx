'use client'

import { Button } from "@/app/ui/button";
import { useRouter } from "next/navigation"


export default function Page({ params }: { params: { username: string } }) {
    const router = useRouter();
    console.log("router >>>< ", router);

    return (

        <div>
            <p>My Post: {params.username}</p>
            <Button onClick={(e) => router.push(`${params.username}/setting`)}>Click Me</Button>
        </div>
    )
}