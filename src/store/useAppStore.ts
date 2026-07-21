import { create } from 'zustand'

interface AppState {
  url: string
  process: 'single' | 'playlist'
  type: 'video' | 'audio'
  quality: 'normal' | 'high'
  folderName: string
  results: string
  setUrl: (url: string) => void
  setProcess: (process: 'single' | 'playlist') => void
  setType: (type: 'video' | 'audio') => void
  setQuality: (quality: 'normal' | 'high') => void
  setFolderName: (name: string) => void
  addResult: (command: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  url: '',
  process: 'single',
  type: 'video',
  quality: 'normal',
  folderName: '',
  results: '',
  setUrl: (url) => set({ url }),
  setProcess: (process) => set({ process }),
  setType: (type) => set({ type }),
  setQuality: (quality) => set({ quality }),
  setFolderName: (folderName) => set({ folderName }),
  addResult: (command) =>
    set((state) => ({ results: state.results + command + '\n' })),
}))
