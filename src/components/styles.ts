import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 1rem;
    color: #ffffff;

    &:hover {
        background-color: var(--background);
        color: var(--primary-light);
        border-left: 5px solid --var(--green-light);
    }
`;

export const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    
    color: #ffffff;

    &:hover {
        background-color: --var(--green-light);
    }
`;

export const SidebarWrap = styled.div``;

export const SidebarMenuItem = styled.div`
    display: flex;
`;

export const SidebarLabel = styled.div`
    margin-left: 1rem;
    text-decoration: none;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: var(--background);
`;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: ${({ sidebar }) => (sidebar ? '250px' : '80px')};
    height: 100%;
    background-color: var(--primary);
    transition: 300ms;
    align-items: center;
    a {
        text-decoration: none;
    }
`;

export const NavIcon = styled(Link)`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin: 0 25px; 
`;
