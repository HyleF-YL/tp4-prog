import React from "react";
import { Card } from "tp-kit/components";

export default function Layout({children}: {children: React.ReactNode}) {
    return <Card>
        {children}
    </Card>
}