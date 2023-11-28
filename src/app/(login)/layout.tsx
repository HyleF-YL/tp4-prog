import { ReactNode } from "react";
import { Card } from "tp-kit/components";

export default function Layout({children}: {children: ReactNode}) {
    return <>
        <Card>
            {children}
        </Card>
    </>
}