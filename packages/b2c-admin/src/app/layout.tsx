import { Toaster } from 'sonner';
import { Provider } from 'common/provider';

import './globals.css';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

export const metadata: Metadata = {
    title: 'ATO',
    description:
        'Nền tảng du lịch nông nghiệp kết hợp giới thiệu sản phẩm OCOP địa phương.',
};

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider>
            <html lang="en">
                <body className={openSans.className}>
                    {children}
                    <Toaster />
                </body>
            </html>
        </Provider>
    );
}
