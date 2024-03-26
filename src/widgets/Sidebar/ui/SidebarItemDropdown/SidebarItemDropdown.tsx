import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import cls from './SidebarItemDropdown.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import IconArrow from '@/shared/assets/icons/arrow-down.svg';
import Icon from '@/shared/assets/icons/routing.svg';
import { SidebarMenuList, SidebarMenuScheme } from '@/widgets/Sidebar/model/types/sidebarList';
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

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classNames(cls.SidebarItemDropdown, className)}>
            <div
                className={classNames(cls.SidebarItemDropdown__top, {
                    [cls.SidebarItemDropdown__top_active]: isActive,
                })}
                onClick={() => setIsActive(!isActive)}
            >
                <SidebarItem name={name} isActive={isActive} />

                {list && list.length && (
                    <IconArrow
                        className={classNames(cls.SidebarItemDropdown__arrow, {
                            [cls.SidebarItemDropdown__arrow_active]: isActive,
                        })}
                    />
                )}
            </div>

            {isActive && (
                <div className={cls.SidebarItemDropdown__list}>
                    {list && list.length && list.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cls.SidebarItemDropdown__listItem}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
