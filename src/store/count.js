import {create} from 'zustand'

export const useCountStore = create(
  () => ({
    counter: 0
  })
)