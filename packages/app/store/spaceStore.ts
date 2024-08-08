import { create } from 'zustand'

const useSpaceStore = create((set) => ({
  spaceInfo: {
    name: '',
    type: 'rosca',
  },

  setSpaceInfo: (newData) => set((state) => ({ spaceInfo: { ...state.spaceInfo, ...newData } })),
}))

export default useSpaceStore
