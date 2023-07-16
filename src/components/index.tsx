import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineDoubleRight } from 'react-icons/ai';
import {
    AiFillCaretDown,
    AiFillCaretUp, 
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaSolarPanel } from 'react-icons/fa';
import { ImPower, ImLeaf } from 'react-icons/im';
import { BsFillSunFill } from 'react-icons/bs';

import { NavIcon, SidebarNav, SidebarWrap, DropdownLink, SidebarLabel, SidebarLink, SidebarMenuItem } from './styles';

export interface SidebarItem {
    title: string;
    path: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    subnav?: SidebarItem[];
}

const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Usuario',
                path: '/overview/qwer1',
                icon: <AiOutlineUser />
            },
            {
                title: 'Receita',
                path: '/overview/qwer2',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Pot. ativa',
        path: '/qwer3',
        icon: <FaSolarPanel />
    },
];

export function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <NavIcon to="#" onClick={showSidebar}>
                        {sidebar ? <AiOutlineClose /> : <AiOutlineDoubleRight />}
                    </NavIcon>
                </IconContext.Provider>
                {SidebarData.map((item, index) => {
                    return <MenuItem item={item} key={index} sidebar={sidebar} />;
                })}
            </SidebarWrap>
        </SidebarNav>
    );
};

function MenuItem(props: { item: SidebarItem, sidebar: boolean }) {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const { item, sidebar } = props;

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {sidebar === false &&
                        <IconContext.Provider value={{ size: '40' }}>
                            {item.icon}
                        </IconContext.Provider>
                    }
                    {sidebar === true &&
                        <IconContext.Provider value={{}}>
                            <SidebarMenuItem>
                                {item.icon}
                                <SidebarLabel >
                                    {item.title}
                                </SidebarLabel>
                            </SidebarMenuItem>
                        </IconContext.Provider>
                    }
                </div>
                {sidebar === true &&
                    <div>
                        {item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}
                    </div>
                }
            </SidebarLink>
            {
                sidebar === true &&
                subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })
            }
        </>
    );
};
