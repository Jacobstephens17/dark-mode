import useLocalStorage from "./useLocalStorage"

const useModeButton = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode?");
    return [darkMode, setDarkMode];
}

export default useModeButton;