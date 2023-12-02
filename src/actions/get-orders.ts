"use server";

import prisma from "../utils/prisma";

export async function getOrders() {
    return await prisma.order.findMany();
}