import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import {
  StateStorage,
  createJSONStorage,
  createJsonStorage,
  persist,
} from "zustand/middleware";

const SecureStorage = {
  getItem: async (name) => {
    return (await SecureStore.getItemAsync(name)) || null;
  },
  setItem: async (name, value) => {
    return await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name) => {
    return await SecureStore.deleteItemAsync(name);
  },
};

export const useAlarmEvents = create()(
  persist(
    (set) => ({
      activeAlarm: null,
      setActiveAlarm: (date) => set(() => ({ activeAlarm: date })),
    }),
    {
      name: "active-alarm-storage",
      storage: createJSONStorage(() => SecureStorage),
    },
  ),
);
