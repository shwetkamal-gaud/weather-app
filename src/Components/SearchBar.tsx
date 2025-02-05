import { useState } from "react";
import styles from "../styles/Search.module.css";

const SearchBar = ({ onSearch }: { onSearch: (value:string) => void }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input.trim()) {
            onSearch(input.trim());
            setInput("");
            localStorage.setItem("lastCity", input)
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
