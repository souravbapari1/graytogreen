"use client";
import { getUserOrderAllHistoryRequest } from "@/request/worker/account/ordersRequest";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function UserAllOrders() {
  const session = useSession();
  const [page, setPage] = useState(1);
  const loadAllOrders = useMutation({
    mutationKey: ["user-all-orders", session.data?.user?.id, page],
    mutationFn: async () => {
      const data = await getUserOrderAllHistoryRequest(
        session.data!.user!.id,
        page
      );
      return data;
    },
    onSuccess: () => {
      console.log("Successfully loaded all orders");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  useEffect(() => {
    if (session.data?.user?.id) {
      loadAllOrders.mutate();
    }
  }, [session.data?.user?.id, page]);
  if (loadAllOrders.isPending) {
    return <div>Loading...</div>;
  }

  if (loadAllOrders.isError) {
    return <div>Error: {loadAllOrders.error.message}</div>;
  }

  if (loadAllOrders.data?.totalItems == 0) {
    return <div>No Orders Found</div>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5">
        {loadAllOrders.data?.items?.map((e) => {
          return <OrderCard data={e} key={e.id} />;
        })}
      </div>
      {(loadAllOrders.data?.totalPages || 0) > 1 && (
        <div className="flex justify-between items-center mt-8 mb-5">
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                  />
                </PaginationItem>
              )}
              {Array.from({ length: loadAllOrders.data?.totalPages || 0 }).map(
                (e, i) => {
                  return (
                    <PaginationItem onClick={() => setPage(i + 1)}>
                      <PaginationLink>{i + 1}</PaginationLink>
                    </PaginationItem>
                  );
                }
              )}

              {(loadAllOrders.data?.totalPages || 0) > page && (
                <PaginationItem>
                  <PaginationNext
                    onClick={() => {
                      if (page < (loadAllOrders.data?.totalPages || 0)) {
                        setPage(page + 1);
                      }
                    }}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default UserAllOrders;
