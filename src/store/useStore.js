import {create} from 'zustand';

const useStore = create(set => ({
  // Example state
  user: null,
  setUser: user => set(() => ({user})),
  // Add other states and actions
}));

export default useStore;
