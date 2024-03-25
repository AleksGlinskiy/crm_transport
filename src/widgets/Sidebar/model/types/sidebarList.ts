export interface SidebarMenuList {
    name: string;
    path: string;
}

export interface SidebarMenuScheme {
    name: string;
    list?: SidebarMenuList[];
}
