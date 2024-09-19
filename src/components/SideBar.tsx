import React, { useState, useEffect } from 'react';
import Logo from "../assets/bell.svg"
import { CaretDownOutlined } from '@ant-design/icons';
import { menuItem2, menuItems } from './MenuItems';
import SubMenu from './Submenu';

// types of menuitems and submenus
interface Submenu {
  title: string;
  href: string;
  icon: string;
  hoverIcon: string;
}

interface MenuItem {
  title: string;
  submenus: Submenu[];
}

interface menuItem2 {
  title: string;
  href: string;
  icon: string;
  hoverIcon: string;
}

const SideBar: React.FC = () => {

    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
    const [user] = useState('admin')

  // State to set default expanded section
  useEffect(() => {
    const currentPath = window.location.pathname;
    const defaultExpanded = menuItems.reduce((acc: Record<string, boolean>, item: MenuItem) => {
      const hasActiveSubmenu = item.submenus.some(submenu => submenu.href === currentPath);
      if (hasActiveSubmenu) {
        acc[item.title] = true;
      }
      return acc;
    }, {});
    setExpandedSections(defaultExpanded);
  }, []);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className='justify-between relative h-full'>
    <div className="flex flex-col w-full h-full space-y-[32px]  ">
      <div>
        <img src={Logo} alt="Logo"  />
       
      </div>
      <section className='space-y-[24px]'>
        {user === 'user'? 
        <div className='w-full'>
          {menuItem2.map((item, index) => {
             return (
                <div key={index}>
                    {/* section header */}
                <div className='' onClick={() => toggleSection(item.title)}>
                <SubMenu
                    href={item.href}
                    img={item.icon}
                    hoverImg={item.hoverIcon}
                    isSelected={window.location.pathname === item.href}
                    onSelect={() => setExpandedSections({ ...expandedSections, [item.title]: true })}
                  >
                    {item.title}
                  </SubMenu>
                 
                </div>
              </div>

             )
        }
         
        )}
        </div> :  
       <div>
         {menuItems.map((item, index) => {
             const hasActiveSubmenu = item.submenus.some(submenu => window.location.pathname === submenu.href)
             return (
                <div key={index}>
                    {/* section header */}
                <div className='flex justify-between mb-2' onClick={() => toggleSection(item.title)}>
                  <span className={`text-[12px] font-semibold ${hasActiveSubmenu ? '' : 'text-[#728075]'}`}>{item.title.toUpperCase()}</span>
                  <CaretDownOutlined  className={`text-[12px]  transform ${expandedSections[item.title] ? 'rotate-180 ' : ''}  ${hasActiveSubmenu ? '' : 'text-[#777777]'}`} />
                </div>
                {/* submenu List */}
                {expandedSections[item.title] && item.submenus.map((submenu, idx) => (
                  <SubMenu
                    key={idx}
                    href={submenu.href}
                    img={submenu.icon}
                    hoverImg={submenu.hoverIcon}
                    isSelected={window.location.pathname === submenu.href}
                    onSelect={() => setExpandedSections({ ...expandedSections, [item.title]: true })}
                  >
                    {submenu.title}
                  </SubMenu>
                ))}
              </div>

             )
        }
         
        )} 
        </div>}
       
      </section>
    </div>
    </div>
  );
};

export default SideBar;
