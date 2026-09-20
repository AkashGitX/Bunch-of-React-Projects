
import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        const html = document.documentElement;

        html.classList.remove("light", "dark");
        html.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider
            value={{ themeMode, lightTheme, darkTheme }}
        >
            <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn />
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;