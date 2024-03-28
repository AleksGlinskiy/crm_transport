import React, { ReactNode } from 'react';

export interface SidebarMenuList {
    name: string;
    path: string;
}

export interface SidebarMenuScheme {
    name: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    path?: string;
    list?: SidebarMenuList[];
}
