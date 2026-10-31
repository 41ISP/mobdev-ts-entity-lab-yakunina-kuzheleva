import { create } from "zustand";
import type { Horse, IHorseInput, IStrapiResponse } from "../types";
import { api } from "../api";

interface IHorseStore {
    horses: IStrapiResponse<Horse[]> | undefined,
    getHorses: () => Promise<void>
    addHorse: (data: IHorseInput) => Promise<void>
    removeHorse: (documentId: string) => Promise<void>
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
    },
    addHorse: async (data: IHorseInput) => {
        set({ isLoading: true, error: null })
        try {
            await api.createHorse(data)
            await get().fetchHorses()
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Ошибка при создании"
            set({ error: message, isLoading: false })
            throw error
        }
    },

    removeHorse: async (documentId: string) => {
        set({ isLoading: true, error: null })
        try {
            await api.deleteHorse(documentId)
            await get().fetchHorses()
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Ошибка при удалении"
            set({ error: message, isLoading: false })
        }
    },
}))

