import { create } from "zustand";
import type { Horse, IStrapiResponse } from "../types";
import { api } from "../api";

interface IHorseStore {
    horses: IStrapiResponse<Horse[]> | undefined,
    getHorses: () => Promise<void>
}

export const useHorsesStore = create<IHorseStore>((set) => ({
    horses: undefined,
    getHorses: async () => {
        try {
           const res = await api.getHorses()
           set({ horses: res }) 
        } catch (error) {
           console.error(error) 
        }
    }
}))