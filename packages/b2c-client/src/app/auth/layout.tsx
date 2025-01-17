import { AuthBackground } from '~/components/common/auth-background';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AuthBackground>{children}</AuthBackground>;
}
