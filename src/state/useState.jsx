import { create } from 'zustand';

export const useStore = create((set) => ({
  selectedOption: null,
  minPrice: null,
  maxPrice: null,
  setSelectedOption: (option) => set({ selectedOption: option }),
  setMinPrice: (minPrice) => set({ minPrice }),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  setPriceRange: (min, max) => set({ minPrice: min, maxPrice: max }),
}));