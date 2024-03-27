import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './SidebarItemDropdown.module.scss';
import IconArrow from '@/shared/assets/icons/arrow-down.svg';
import { SidebarMenuList } from '@/widgets/Sidebar/model/types/sidebarList';
import { SidebarItem } from '@/widgets/Sidebar';

interface SidebarItemDropdownProps {
    className?: string;
    name: string;
    list?: SidebarMenuList[];
}

export function SidebarItemDropdown(props: SidebarItemDropdownProps) {
    const {
        className,
        name,
        list,
    } = props;

    const [isActiveList, setIsActiveList] = useState(false);

    return (
        <div className={classNames(cls.SidebarItemDropdown, className)}>
            <div
                className={classNames(cls.SidebarItemDropdown__top, {
                    [cls.SidebarItemDropdown__top_active]: isActiveList,
                })}
                onClick={() => setIsActiveList(!isActiveList)}
            >
                <SidebarItem name={name} isActive={isActiveList} />

                {list && list.length && (
                    <IconArrow
                        className={classNames(cls.SidebarItemDropdown__arrow, {
                            [cls.SidebarItemDropdown__arrow_active]: isActiveList,
                        })}
                    />
                )}
            </div>

            {isActiveList && (
                <div className={cls.SidebarItemDropdown__list}>
                    {list && list.length && list.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => (
                                isActive
                                    ? classNames(
                                        cls.SidebarItemDropdown__listItem,
                                        cls.SidebarItemDropdown__listItem_active,
                                    )
                                    : cls.SidebarItemDropdown__listItem
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}
