import * as React from "react";
import styles from "./TopNavigationBar.module.scss";
import { Link } from "@fluentui/react";

interface IMenuItem {
  title: string;
  link: string;
  submenu?: IMenuItem[];
}

const menuItems: IMenuItem[] = [
  { title: "Home", link: "#" },
  {
    title: "Administration",
    link: "#",
    submenu: [
      { title: "Users", link: "#" },
      { title: "Roles", link: "#" },
    ],
  },
  {
    title: "Fleet Management",
    link: "#",
    submenu: [
      { title: "Vehicles", link: "#" },
      { title: "Maintenance", link: "#" },
    ],
  },
  { title: "Marine Standard", link: "#" },
  { title: "Talent Development", link: "#" },
];

const TopNavigationBar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>("Home");
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://developsg.sharepoint.com/sites/ONESEASolution/SiteAssets/__sitelogo__oneseasolutions_logo.jpg" alt="Logo" />
        <span className={styles.portalTitle}>Intranet Portal</span>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li
            key={item.title}
            className={`${styles.menuItem} ${activeItem === item.title ? styles.active : ""}`}
            onClick={() => setActiveItem(item.title)}
            onMouseEnter={() => setHoveredItem(item.title)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.submenu && hoveredItem === item.title && (
              <ul className={styles.submenu}>
                {item.submenu.map((sub) => (
                  <li key={sub.title}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNavigationBar;
