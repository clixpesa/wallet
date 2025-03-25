// import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'

// type UserStore = {
//   hasFinishedOnboarding: boolean
//   toggleHasOnboarded: () => void
// }

// export const useUserStore = create(
//   persist<UserStore>(
//     (set) => ({
//       hasFinishedOnboarding: false,
//       toggleHasOnboarded: () => {
//         set((state) => {
//           return {
//             ...state,
//             hasFinishedOnboarding: !state.hasFinishedOnboarding,
//           }
//         })
//       },
//     }),
//     {
//       name: 'auth-store',
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// )

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Create the zustand store for authentication
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' } // Local storage key for persistence
  )
)
