// import * as React from 'react';
// import styles from './Header.module.scss';
// import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

// interface IHeaderProps {
//     userName: string;
//   }
// const Header: React.FC<IHeaderProps> = ({userName}) => {
//   const menuItems: ICommandBarItemProps[] = [
//     { key: 'myLinks', text: 'My Links', iconProps: { iconName: 'Link' } },
//     { key: 'quickLinks', text: 'Quick Links', iconProps: { iconName: 'Link' } },
//     { key: 'helpDesk', text: 'Help Desk', iconProps: { iconName: 'Help' } },
//     { key: 'home', text: 'Home', iconProps: { iconName: 'Home' } },
//     { key: 'aboutUs', text: 'About Us', iconProps: { iconName: 'Info' } },
//     { key: 'appsTools', text: 'Apps & Tools', iconProps: { iconName: 'Toolbox' } },
//     { key: 'businessRequests', text: 'Business Requests', iconProps: { iconName: 'Page' } },
//     { key: 'resources', text: 'Resources', iconProps: { iconName: 'Database' } },
//   ];

//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="Web Synergies" className={styles.logo} />
//       </div>
      
//       <CommandBar items={menuItems} />
      
//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const menuItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     { key: "myLinks", text: "My Links", iconProps: { iconName: "Link" } },
//     { key: "quickLinks", text: "Quick Links", iconProps: { iconName: "Link" } },
//     { key: "helpDesk", text: "Help Desk", iconProps: { iconName: "Help" } },
//     { key: "aboutUs", text: "About Us", iconProps: { iconName: "Info" } },
//     { key: "appsTools", text: "Apps & Tools", iconProps: { iconName: "Toolbox" } },
//     { key: "businessRequests", text: "Business Requests", iconProps: { iconName: "Page" } },
//     { key: "resources", text: "Resources", iconProps: { iconName: "Database" } },
//   ];

//   return (
//     <header className={styles.header}>
//       {/* Logo Section */}
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="Web Synergies" className={styles.logo} />
//       </div>

//       {/* Navigation Menu */}
//       <div className={styles.navContainer}>
//         <CommandBar items={menuItems} className={styles.commandBar} />
//       </div>

//       {/* User Info */}
//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
// import { TooltipHost } from "@fluentui/react";
// import { ContextualMenu, IContextualMenuProps } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const [menuTarget, setMenuTarget] = React.useState<HTMLElement | null>(null);

//   const onShowMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setMenuTarget(event.currentTarget);
//   };

//   const onHideMenu = () => {
//     setMenuTarget(null);
//   };

//   // Dummy list of names to show on hover
//   const userList = [
//     { key: "user1", text: "John Doe" },
//     { key: "user2", text: "Jane Smith" },
//     { key: "user3", text: "Robert Brown" },
//     { key: "user4", text: "Emily Johnson" },
//   ];

//   const menuProps: IContextualMenuProps = {
//     items: userList,
//     target: menuTarget,
//     onDismiss: onHideMenu,
//     directionalHint: 4, // Positions the menu below the element
//   };

//   const menuItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     {
//       key: "myLinks",
//       text: "My Links",
//       iconProps: { iconName: "Link" },
//       onMouseEnter: onShowMenu, // Open on hover
//       onMouseLeave: onHideMenu, // Close when mouse leaves
//     },
//     { key: "quickLinks", text: "Quick Links", iconProps: { iconName: "Link" } },
//     { key: "helpDesk", text: "Help Desk", iconProps: { iconName: "Help" } },
//   ];

//   return (
//     <header className={styles.header}>
//       {/* Logo Section */}
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="web synergies" className={styles.logo} />
//       </div>

//       {/* Navigation Menu */}
//       <div className={styles.navContainer}>
//         <CommandBar items={menuItems} className={styles.commandBar} />
//         {menuTarget && <ContextualMenu {...menuProps} />}
//       </div>

//       {/* User Info */}
//       <div className={styles.userInfo}>
//         <TooltipHost content="Click to see profile">
//           <span>Welcome, {userName}</span>
//         </TooltipHost>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
// import { ContextualMenu, IContextualMenuProps, IContextualMenuItem } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const [menuTarget, setMenuTarget] = React.useState<HTMLElement | null>(null);
//   const [menuItems, setMenuItems] = React.useState<IContextualMenuItem[]>([]);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMegaMenuVisible, setMegaMenuVisible] = React.useState(false);

//   // Apps & Tools Mega Menu Items
//   const megaMenuItems = [
//     {
//       title: "Sales and CRM",
//       links: ["YODA", "Configure Price Quote (CPQ)", "ServAir", "YODA Training", "Seismic"]
//     },
//     {
//       title: "Document Management (DMS)",
//       links: ["Docuware", "Genpact Archival (VPN)", "Fortis (VPN)", "Customer Portal"]
//     },
//     {
//       title: "Yokogawa Group Systems Project (YGSP)",
//       links: [
//         "SAP (VPN)",
//         "Inventory Counting App (VPN)",
//         "Inventory Management App (VPN)",
//         "License Management System",
//         "Specification Selection System (SSS)"
//       ]
//     },
//     {
//       title: "YMMI SAP Inquiries",
//       links: ["YMMI/SAP Web Inquiries", "Tableau (VPN)", "Tableau Report Download"]
//     }
//   ];

//   // Quick Links Menu Items
//   const quickLinksMenu: IContextualMenuItem[] = [
//     { key: "concur", text: "Concur" },
//     { key: "nearMiss", text: "Near Miss Report" },
//     { key: "gawaGoods", text: "Gawa Goods" },
//     { key: "m365", text: "Microsoft 365" },
//     { key: "sap", text: "SAP" },
//   ];

//   // Help Desk Menu Items
//   const helpDeskMenu: IContextualMenuItem[] = [
//     { key: "incidentReport", text: "Incident Investigation Report" },
//     { key: "safetyTraining", text: "YCA Online Safety Training" },
//     { key: "cyberPS", text: "Yokogawa CyberPS" },
//     { key: "cyberDoc", text: "Yokogawa CyberDoc" },
//   ];

//   const onShowMenu = (event: React.MouseEvent<HTMLElement>, items: IContextualMenuItem[]) => {
//     setMenuTarget(event.currentTarget);
//     setMenuItems(items);
//     setIsMenuOpen(true);
//   };

//   const onHideMenu = () => {
//     setTimeout(() => {
//       setIsMenuOpen(false);
//       setMenuTarget(null);
//     }, 200);
//   };

//   const menuProps: IContextualMenuProps = {
//     items: menuItems,
//     target: menuTarget,
//     onDismiss: onHideMenu,
//     isBeakVisible: false,
//     directionalHintFixed: true,
//     gapSpace: 10,
//     calloutProps: { className: styles.megaMenu },
//   };

//   const commandBarItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     {
//       key: "quickLinks",
//       text: "Quick Links ▾",
//       iconProps: { iconName: "Link" },
//       onClick: (e: React.MouseEvent<HTMLElement>) => onShowMenu(e, quickLinksMenu),
//     },
//     {
//       key: "helpDesk",
//       text: "Help Desk ▾",
//       iconProps: { iconName: "Help" },
//       onClick: (e: React.MouseEvent<HTMLElement>) => onShowMenu(e, helpDeskMenu),
//     },
//   ];

//   return (
//     <header className={styles.header}>
//       {/* Left Logo */}
//       <div className={styles.logoContainer}>
//         <img
//           src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg"
//           alt="Web Synergies"
//           className={styles.logo}
//         />
//       </div>

//       {/* Navigation Menu */}
//       <div className={styles.navContainer} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={onHideMenu}>
//         <CommandBar items={commandBarItems} className={styles.commandBar} />
//         {isMenuOpen && <ContextualMenu {...menuProps} />}
//       </div>

//       {/* Apps & Tools Mega Menu */}
//       <div
//         className={styles.megaMenuWrapper}
//         onMouseEnter={() => setMegaMenuVisible(true)}
//         onMouseLeave={() => setMegaMenuVisible(false)}
//       >
//         <span className={styles.megaMenuTrigger}>Apps & Tools ▾</span>

//         {isMegaMenuVisible && (
//           <div className={styles.megaMenuContainer}>
//             {megaMenuItems.map((menu, index) => (
//               <div key={index} className={styles.megaMenuColumn}>
//                 <div className={styles.megaMenuTitle}>{menu.title}</div>
//                 <ul>
//                   {menu.links.map((link, i) => (
//                     <li key={i} className={styles.megaMenuItem}>{link}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Right Side - Welcome User */}
//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
// import { ContextualMenu, IContextualMenuProps, IContextualMenuItem } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const [menuTarget, setMenuTarget] = React.useState<HTMLElement | null>(null);
//   const [menuItems, setMenuItems] = React.useState<IContextualMenuItem[]>([]);

//   const megaMenuItems: IContextualMenuItem[] = [
//     {
//       key: "mostPopular",
//       text: "Most Popular",
//       itemType: 2, // Section header
//     },
//     { key: "concur", text: "Concur" },
//     { key: "nearMiss", text: "Near Miss Report" },
//     { key: "gawaGoods", text: "Gawa Goods" },
//     { key: "m365", text: "Microsoft 365" },
//     { key: "sap", text: "SAP" },

//     {
//       key: "allLinks",
//       text: "All Links",
//       itemType: 2, // Section header
//     },
//     { key: "hopesProgram", text: "HOPES Program" },
//     { key: "hopesTraining", text: "HOPES Training" },
//     { key: "m365", text: "Microsoft 365" },
//     { key: "kianSystem", text: "KIAN (Proposal) System" },
//     { key: "yokogawaPortal", text: "My Yokogawa - Rep Portal" },

//     {
//       key: "businessTools",
//       text: "Order Business Cards",
//     },
//     { key: "workday", text: "Workday" },
//     { key: "incidentReport", text: "Incident Investigation Report" },
//     { key: "safetyTraining", text: "YCA Online Safety Training" },
//     { key: "yokogawaCyberPS", text: "Yokogawa CyberPS" },
//     { key: "yokogawaCyberDoc", text: "Yokogawa CyberDoc" },
//   ];

//   const onShowMenu = (event: React.MouseEvent<HTMLElement>, items: IContextualMenuItem[]) => {
//     setMenuTarget(event.currentTarget);
//     setMenuItems(items);
//   };

//   const onHideMenu = () => {
//     setMenuTarget(null);
//   };

//   const menuProps: IContextualMenuProps = {
//     items: menuItems,
//     target: menuTarget,
//     onDismiss: onHideMenu,
//     isBeakVisible: false,
//     directionalHintFixed: true,
//     gapSpace: 10,
//     calloutProps: { className: styles.megaMenu },
//   };

//   const commandBarItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     {
//       key: "quickLinks",
//       text: "Quick Links ▾",
//       iconProps: { iconName: "Link" },
//       onMouseEnter: (e:React.MouseEvent<HTMLElement>) => onShowMenu(e, megaMenuItems),
//       onMouseLeave: onHideMenu,
//     },
//     {
//       key: "helpDesk",
//       text: "Help Desk ▾",
//       iconProps: { iconName: "Help" },
//       onMouseEnter: (e:React.MouseEvent<HTMLElement>) => onShowMenu(e, megaMenuItems),
//       onMouseLeave: onHideMenu,
//     },
//     { key: "helpDesk", text: "Help Desk", iconProps: { iconName: "Help" } },
//   ];

//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="web synergies" className={styles.logo} />
//       </div>

//       <div className={styles.navContainer}>
//         <CommandBar items={commandBarItems} className={styles.commandBar} />
//         {menuTarget && <ContextualMenu {...menuProps} />}
//       </div>

//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";
// import {  IContextualMenuProps, IContextualMenuItem } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const [menuTarget, setMenuTarget] = React.useState<HTMLElement | null>(null);
//   const [menuItems, setMenuItems] = React.useState<IContextualMenuItem[]>([]);
//   const [isMenuVisible, setIsMenuVisible] = React.useState(false);

//   const megaMenuItems: IContextualMenuItem[] = [
//     {
//       key: "mostPopular",
//       text: "Most Popular",
//       itemType: 2, // Section header
//     },
//     { key: "concur", text: "Concur" },
//     { key: "nearMiss", text: "Near Miss Report" },
//     { key: "gawaGoods", text: "Gawa Goods" },
//     { key: "m365", text: "Microsoft 365" },
//     { key: "sap", text: "SAP" },
//     { key: "yokogawaCyberDoc", text: "Yokogawa CyberDoc" }, // Extra item for testing multi-column

//     {
//       key: "allLinks",
//       text: "All Links",
//       itemType: 2, // Section header
//     },
//     { key: "hopesProgram", text: "HOPES Program" },
//     { key: "hopesTraining", text: "HOPES Training" },
//     { key: "m365", text: "Microsoft 365" },
//     { key: "kianSystem", text: "KIAN (Proposal) System" },
//     { key: "yokogawaPortal", text: "My Yokogawa - Rep Portal" },
//     { key: "workday", text: "Workday" },
//     { key: "incidentReport", text: "Incident Investigation Report" },
//   ];

//   const chunkArray = (arr: IContextualMenuItem[], chunkSize: number) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const formattedMegaMenuItems = chunkArray(megaMenuItems, 5);

//   const onShowMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setMenuTarget(event.currentTarget);
//     setMenuItems(megaMenuItems);
//     setIsMenuVisible(true);
//     console.log(menuProps);
//   };

//   const onHideMenu = () => {
//     setIsMenuVisible(false);
//     setMenuTarget(null);
//   };

//   const menuProps: IContextualMenuProps = {
//     items: menuItems,
//     target: menuTarget,
//     onDismiss: onHideMenu,
//     isBeakVisible: false,
//     directionalHintFixed: true,
//     gapSpace: 10,
//     calloutProps: { className: styles.megaMenu },
//   };

//   const commandBarItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     {
//       key: "quickLinks",
//       text: "Quick Links ▾",
//       iconProps: { iconName: "Link" },
//       onMouseEnter: onShowMenu,
//     },
//   ];

//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="web synergies" className={styles.logo} />
//       </div>

//       <div className={styles.navContainer}>
//         <CommandBar items={commandBarItems} className={styles.commandBar} />
//         {isMenuVisible && (
//           <div className={styles.megaMenuContainer} onMouseLeave={onHideMenu}>
//             {formattedMegaMenuItems.map((group, index) => (
//               <div key={index} className={styles.megaMenuColumn}>
//                 {group.map((item) => (
//                   <div key={item.key} className={styles.megaMenuItem}>
//                     {item.text}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import * as React from "react";
// import styles from "./Header.module.scss";
// import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

// interface IHeaderProps {
//   userName: string;
// }

// const Header: React.FC<IHeaderProps> = ({ userName }) => {
//   const [menuTarget, setMenuTarget] = React.useState<HTMLElement | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const megaMenuItems = [
//     {
//       key: "mostPopular",
//       title: "Most Popular",
//       links: ["Concur", "Near Miss Report", "Gawa Goods", "Microsoft 365", "SAP"]
//     },
//     {
//       key: "allLinks",
//       title: "All Links",
//       links: ["HOPES Program", "HOPES Training", "Gawa Goods", "KIAN (Proposal) System", "My Yokogawa - Rep Portal"]
//     },
//   ];

//   const onShowMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setMenuTarget(event.currentTarget);
//     setIsMenuOpen(true);
//   };

//   const onHideMenu = () => {
//     setIsMenuOpen(false);
//     console.log(menuTarget);
//   };

// //   const commandBarItems: ICommandBarItemProps[] = [
// //     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
// //     {
// //       key: "quickLinks",
// //       text: "Quick Links ▾",
// //       iconProps: { iconName: "Link" },
// //       onMouseEnter: onShowMenu,
// //     },
// //     {
// //       key: "helpDesk",
// //       text: "Help Desk ▾",
// //       iconProps: { iconName: "Help" },
// //       onMouseEnter: onShowMenu,
// //     }
// //   ];
//   const commandBarItems: ICommandBarItemProps[] = [
//     { key: "home", text: "Home", iconProps: { iconName: "Home" } },
//     {
//       key: "aboutUs",
//       text: "About Us ▾",
//       iconProps: { iconName: "Info" },
//       onMouseEnter: onShowMenu,
//     },
//     {
//       key: "appsTools",
//       text: "Apps & Tools ▾",
//       iconProps: { iconName: "AppIconDefault" },
//       onMouseEnter: onShowMenu,
//     },
//     {
//       key: "businessRequests",
//       text: "Business Requests ▾",
//       iconProps: { iconName: "ClipboardList" },
//       onMouseEnter: onShowMenu,
//     },
//     {
//       key: "resources",
//       text: "Resources ▾",
//       iconProps: { iconName: "KnowledgeArticle" },
//       onMouseEnter: onShowMenu,
//     },
//     {
//       key: "quickLinks",
//       text: "Quick Links ▾",
//       iconProps: { iconName: "Link" },
//       onMouseEnter: onShowMenu,
//     },
//     {
//       key: "helpDesk",
//       text: "Help Desk ▾",
//       iconProps: { iconName: "Help" },
//       onMouseEnter: onShowMenu,
//     }
//   ];
  
//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="web synergies" className={styles.logo} />
//       </div>

//       <div className={styles.navContainer}>
//         <CommandBar items={commandBarItems} className={styles.commandBar} />
//         {isMenuOpen && (
//           <div className={styles.megaMenuContainer} onMouseEnter={onShowMenu} onMouseLeave={onHideMenu}>
//             {megaMenuItems.map((menu, index) => (
//               <div key={index} className={styles.megaMenuColumn}>
//                 <div className={styles.megaMenuTitle}>{menu.title}</div>
//                 <div className={styles.megaMenuItemsContainer}>
//                   {menu.links.map((link, i) => (
//                     <span key={i} className={styles.megaMenuItem}>{link}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className={styles.userInfo}>
//         <span>Welcome, {userName}</span>
//       </div>
//     </header>
//   );
// };

// export default Header;

import * as React from "react";
import styles from "./Header.module.scss";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

interface IHeaderProps {
  userName: string;
}

const Header: React.FC<IHeaderProps> = ({ userName }) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  // Define Mega Menu items for specific links
  const megaMenuItems: Record<string, { title: string; links: string[] }> = {
    quickLinks: {
      title: "Quick Links",
      links: ["Concur", "Near Miss Report", "Gawa Goods", "Microsoft 365", "SAP"],
    },
    helpDesk: {
      title: "Help Desk",
      links: ["Raise a Ticket", "Knowledge Base", "Contact IT", "System Status"],
    },
    resources: {
      title: "Resources",
      links: ["Company Policies", "Employee Handbook", "Training Materials", "Compliance Documents"],
    },
  };

  // List of links that should show a Mega Menu
  //const menuWithDropdown = ["quickLinks", "helpDesk", "resources"];

  const onShowMenu = (menuKey: string) => {
   
    if (megaMenuItems[menuKey]) {
        setOpenMenu(menuKey);
      }
  };

  const onHideMenu = () => {
    setOpenMenu(null);
  };

  const commandBarItems: ICommandBarItemProps[] = [
    { key: "home", text: "Home", iconProps: { iconName: "Home" } }, // Regular Link
    {
      key: "quickLinks",
      text: "Quick Links ▾",
      iconProps: { iconName: "Link" },
      onMouseEnter: () => onShowMenu("quickLinks"),
    },
    {
      key: "helpDesk",
      text: "Help Desk ▾",
      iconProps: { iconName: "Help" },
      onMouseEnter: () => onShowMenu("helpDesk"),
    },
    // Regular Link
    {
      key: "resources",
      text: "Resources ▾",
      iconProps: { iconName: "KnowledgeArticle" },
      onMouseEnter: () => onShowMenu("resources"),
    },
    
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="https://websyn.sharepoint.com/sites/Test29/Shared%20Documents/getsitelogo.jpg" alt="web synergies" className={styles.logo} />
      </div>

      <div className={styles.navContainer}>
        <CommandBar items={commandBarItems} className={styles.commandBar} />

        {openMenu && megaMenuItems[openMenu] && (
          <div className={styles.megaMenuContainer} onMouseEnter={() => onShowMenu(openMenu)} onMouseLeave={onHideMenu}>
            <div className={styles.megaMenuColumn}>
              <div className={styles.megaMenuTitle}>{megaMenuItems[openMenu].title}</div>
              <div className={styles.megaMenuItemsContainer}>
                {megaMenuItems[openMenu].links.map((link, i) => (
                  <span key={i} className={styles.megaMenuItem}>{link}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.userInfo}>
        <span>Welcome, {userName}</span>
      </div>
    </header>
  );
};

export default Header;
