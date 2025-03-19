import * as React from 'react';
import styles from './Header.module.scss';
interface IIntranetNavBarProps {
  context: any;
}

const IntranetNavBar: React.FC<IIntranetNavBarProps> = ({ context }) => {
    return (
      <div className={styles.navBar}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <img
            src={`${context.pageContext.web.serverRelativeUrl}/SiteAssets/__sitelogo__oneseasolutions_logo.jpg`}
            alt="Logo"
            className={styles.logo}
          />
          <span className={styles.portalTitle}>Intranet Portal</span>
        </div>
  
        {/* Navigation Section */}
        <div className={styles.navLinks}>
          <a href="https://developsg.sharepoint.com/sites/ONESEASolution" className={styles.link}>Home</a>
          <a href="https://developsg.sharepoint.com/sites/ONESEASolution" className={styles.link}>Fleet Management</a>
          <a href="https://developsg.sharepoint.com/sites/ONESEASolution" className={styles.link}>Talent Development</a>
          <a href="https://developsg.sharepoint.com/sites/ONESEASolution" className={styles.link}>Marine Standards</a>
  
          {/* Dropdown Section */}
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Administration</button>
            <div className={styles.dropdownContent}>
              <a href="https://developsg.sharepoint.com/sites/ONESEASolution">Finance & Accounting</a>
              <a href="https://developsg.sharepoint.com/sites/ONESEASolution">IT & Security</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default IntranetNavBar;
