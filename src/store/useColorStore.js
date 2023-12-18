import {create} from 'zustand';

const useColorStore = create(set => ({
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#888888',
    text: '#000000',
    textSecondary: '#757575',
    error: '#b00020',
    // ... other colors
  },
  setColors: newColors =>
    set(state => ({colors: {...state.colors, ...newColors}})),
}));

export default useColorStore;
