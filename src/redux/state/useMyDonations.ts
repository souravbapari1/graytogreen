import { OrderPayItem } from "@/interface/PaymentItem";
import { localClient } from "@/request/actions";
import { create } from "zustand";

export const useMyDonation = create<{
  mydonation: OrderPayItem[];
  loading: boolean;
  status: {
    country: number;
    projects: number;
  };
  loadMyDonation: () => Promise<void>;
}>((set) => ({
  mydonation: [],
  loading: true,
  status: {
    country: 0,
    projects: 0,
  },
  loadMyDonation: async () => {
    set({ loading: true });
    try {
      const data = await localClient
        .get("/api/account/donate")
        .send<OrderPayItem[]>();
      set({
        mydonation: data,
        loading: false,
        status: {
          country: Array.from(
            new Set(data.map((e) => e.expand.project.country))
          ).length,
          projects: Array.from(new Set(data.map((e) => e.expand.project.id)))
            .length,
        },
      });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
