"use client"
import { ReactNode, useEffect, useReducer } from "react";
import { Card } from "tp-kit/components";
import { getUser } from "../../utils/supabase";
import { createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Layout({children}: {children: ReactNode}) {
    const supabase = createClientComponentClient()
    const router = useRouter()
    useEffect(() => {
        getUser(supabase).then((data) => {
            console.log(data);
            if(data)
                router.replace('/')
        })
    }, [])
    return <Card>
            <>{children}</>
           </Card>

}