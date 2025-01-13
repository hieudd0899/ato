import { Toaster } from 'sonner';
import { Provider } from 'common/provider';

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ATO',
    description:
        'Nền tảng du lịch nông nghiệp kết hợp giới thiệu sản phẩm OCOP địa phương.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider>
            <html lang="en">
                <body>
                    {children}
                    <Toaster />
                </body>
            </html>
        </Provider>
    );
}
