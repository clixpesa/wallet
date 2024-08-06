import { create } from 'zustand'

type BookmarkState = {
  bookmarks: { sessionId: string; notificationId?: string }[]
  toggleBookmarked: (sessionId: string, notificationId?: string) => void
}

const useSpaceStore = create((set) => ({
  spaceData: {
    title: '',
    type: 'rosca',
  },

  setSpaceData: (newData) => set((state) => ({ spaceData: { ...state.spaceData, ...newData } })),
}))

export default useSpaceStore
