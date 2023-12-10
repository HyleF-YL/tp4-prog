import { OrderDetailsLayout } from "tp-kit/components";
import { NextPageProps } from "../../../../types";
import prisma from "../../../../utils/prisma";
import { notFound } from "next/navigation";
import RealTimeOrderDetails from "../../../../components/realtime-order-details";

type Props = {
  orderId: string;
}

export default async function OrderDetailsPage({params}: NextPageProps<Props>) {
  const orderId = parseInt(params.orderId);
  const order = await prisma.order.findUnique({
    where: {id: orderId},
    include: {
      lines: {
        include: { product: true }
      }
    }
  });

  if (!order) notFound();

  return <RealTimeOrderDetails><OrderDetailsLayout order={order} /></RealTimeOrderDetails> //TODO comprendre ce que le prof veut dire par "quand le composant est démonté"
}