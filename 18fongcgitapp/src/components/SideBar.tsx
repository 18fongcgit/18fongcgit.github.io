import { useState } from 'react';
import './SideBar.css'

const SideBarItems = [
    { title: "About me", content: "This is the about me section." },
    { title: "Projects", content: "This is the projects section." },
    { title: "Education", content: "This is the education section." }
];


function SideBar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div>

            <ul className="sidebar-list">
                {SideBarItems.map((item, idx) => (
                    <li
                        key={item.title}
                        className={hoveredIndex === idx ? "sidebar-item highlighted" : "sidebar-item"}
                        onMouseOver={() => setHoveredIndex(idx)}
                        onMouseOut={() => setHoveredIndex(null)}
                    >
                        <h2>{item.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default SideBar