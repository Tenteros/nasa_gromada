import React from "react";
import { useNavigate } from 'react-router-dom';
import "./VillageSelector.css";
import FieldImage from "../../assets/img.png";

// Данные сел
const villages = [
    { name: "ВОЛОДИМИРІВСЬКЕ", slug: "volodymyrivske" },
    { name: "ДНІПРЕЛЬСТАН",     slug: "dniprelstan"     },
    { name: "СОНЯЧНЕ",          slug: "sonyachne"       }
];

const VillageSelector = ({ name }) => {
    const navigate = useNavigate();

    const displayName = {
        "volodymyrivske": "ВОЛОДИМИРІВСЬКЕ",
        "dniprelstan":    "ДНІПРЕЛЬСТАН",
        "sonyachne":      "СОНЯЧНЕ",
        "shyrokivska-hromada": "ШИРОКІВСЬКА ГРОМАДА"
    }[name?.toLowerCase()] || "Невідоме село";

    const handleButtonClick = (slug) => {
        navigate(`/${slug}`); // Переход на страницу без префикса
    };

    const handleClick = () => {
        navigate('/test');
    };


    return (
        <div className="village-page">
            <div className="village-left">
                <img src={FieldImage} alt="field" className="village-image" />
            </div>
            <div className="village-right">
                <div className="village-selection">
                    <h1 className="village-title">
                        Оберіть село <span style={{ color: '#309C54' }}>громади</span>
                    </h1>
                    <div className="village-buttons">
                        {villages.map(v => (
                            <button
                                key={v.slug}
                                className="village-btn"
                                onClick={() => handleButtonClick(v.slug)}
                            >
                                {v.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="village-vote">
                    <p className="vote-title">Ваше село відсутнє?</p>
                    <p className="vote-subtext">
                        проголосуйте та виберіть яке село додати наступним
                    </p>
                    <button className="vote-btn" onClick={handleClick}>
                        Проголосувати
                    </button>

                </div>
            </div>
        </div>
    );
};

export default VillageSelector;
