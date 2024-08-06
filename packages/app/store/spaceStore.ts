import { create } from 'zustand'

type SpaceState = {
  spaceDate: { title?: string; type?: string }[]
  setSpaceDate: (sessionId: string, notificationId?: string) => void
}

const useSpaceStore = create((set) => ({
  spaceData: {
    title: '',
    type: 'rosca',
  },

  setSpaceData: (newData) => set((state) => ({ spaceData: { ...state.spaceData, ...newData } })),
}))

export default useSpaceStore
