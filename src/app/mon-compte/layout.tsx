import { ReactNode } from "react";
import { Card, SectionContainer } from "tp-kit/components";
import prisma from "../../utils/prisma";
import { OrderTable } from "../../components/order-table";
import { SupabaseClient } from "@supabase/supabase-js";
import { getUser } from "../../utils/supabase";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Layout({ children }: { children: ReactNode }) {
  const orders = await prisma.order.findMany();
  const supabase = createServerComponentClient({cookies});
  const currentUser = (await supabase.auth.getUser()).data
  return (
    <>
    {console.log(currentUser)}
    <SectionContainer>
      <Card>
        <h1>Mon compte</h1>
        <h2>Bonjour,{}</h2>
      </Card>
     
    </SectionContainer>
      {/* Orders list */}
      <SectionContainer wrapperClassName="py-24 min-h-[80vh]">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <OrderTable orders={orders} />
        </div>
      </SectionContainer>

      {/* Children */}
      {children}
    </>
  );
}
