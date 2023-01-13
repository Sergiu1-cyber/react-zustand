import { create } from 'zustand';

export const useCountStore = create((set) => ({
  counter: 0,
  counterIncrement: () => set((state) => ({ counter: state.counter++ })),
}));
