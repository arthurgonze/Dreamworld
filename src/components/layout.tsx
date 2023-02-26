import React from 'react'
import { Link } from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css'

interface LayoutProps {
    pageTitle: string,
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/public/index.html" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/public/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;