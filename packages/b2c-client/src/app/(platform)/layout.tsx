import { PlatformDefaultLayout } from '~/components/layouts/platform-default-layout';

export default function PlatformLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PlatformDefaultLayout>{children}</PlatformDefaultLayout>;
}
