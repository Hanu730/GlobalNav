import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "@fluentui/react";
import styles from "./TopNavigationBar.module.scss";
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
// Interface for menu items
interface IMenuItem {
  title: string;
  url: string;
  order: number;
  visible: boolean;
  parent?: string;
  children?: IMenuItem[];
}

interface ITopNavigationBarProps {
context:any
}

const TopNavigationBar: React.FC<ITopNavigationBarProps> = ({context}) => {
 
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    sp.setup({
      spfxContext:context,
      sp: {
         baseUrl: context.pageContext.web.absoluteUrl, // Replace with your site URL
      },
    })
    sp.web.lists
      .getByTitle("NavigationMenu") // Change this to your actual SharePoint list name
      .items.select("Title", "URL", "Display Order", "Vissible", "ParentMenu")
      .filter("Vissible eq 1") // Fetch only visible menus
      .orderBy("Display Order", true) // Sort by display order
      .get()
      .then((data:any) => {
        const menuData = data.map((item:any) => ({
          title: item.Title,
          url: item.URL || "#",
          order: item["Display Order"],
          visible: item.Vissible,
          parent: item.ParentMenu || null,
        }));

        // Convert flat list into nested structure
        const structuredMenu = buildMenuTree(menuData);
        setMenuItems(structuredMenu);
      })
      .catch((error) => console.log("Error fetching menu:", error));
  }, []);

  const buildMenuTree = (items: IMenuItem[]): IMenuItem[] => {
    const menuMap = new Map<string, IMenuItem>();

    items.forEach((item) => {
      menuMap.set(item.title, { ...item, children: [] });
    });

    const menuTree: IMenuItem[] = [];

    items.forEach((item) => {
      if (item.parent && menuMap.has(item.parent)) {
        menuMap.get(item.parent)?.children?.push(menuMap.get(item.title)!);
      } else {
        menuTree.push(menuMap.get(item.title)!);
      }
    });

    return menuTree;
  };

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
            className={styles.menuItem}
            onMouseEnter={() => setHoveredItem(item.title)}
            onMouseLeave={() => setTimeout(() => setHoveredItem(null), 300)}
          >
            <Link href={item.url}>{item.title}</Link>

            {item.children && item.children.length > 0 && hoveredItem === item.title && (
              <ul
                className={styles.submenu}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.children.map((sub) => (
                  <li key={sub.title}>
                    <Link href={sub.url}>{sub.title}</Link>
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
