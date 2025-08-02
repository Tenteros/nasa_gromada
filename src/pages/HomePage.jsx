import React from "react";
import { useParams } from "react-router-dom";
import VillageSelector from "../components/VillageSelector/VillageSelector";

const HomePage = ({ name: propName }) => {
    const params = useParams();
    const name = propName || params.name;

    const displayName = {
        "volodymyrivske": "ВОЛОДИМИРІВСЬКЕ",
        "dniprelstan": "ДНІПРЕЛЬСТАН",
        "sonyachne": "СОНЯЧНЕ",
        "shyrokivska-hromada": "ШИРОКІВСЬКА ГРОМАДА"
    }[name?.toLowerCase()] || "Невідоме село";

    return (
        <VillageSelector />
    );
};

export default HomePage;
