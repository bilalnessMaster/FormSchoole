import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { User, type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    user?: User ,
    breadcrumbs?: BreadcrumbItem[];
}

export default ({user,  children, breadcrumbs, ...props  }: AppLayoutProps) => {

    return (
    <AppLayoutTemplate user={user} breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
)};
