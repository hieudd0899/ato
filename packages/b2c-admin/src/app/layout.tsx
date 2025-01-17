import { Toaster } from 'sonner';
import { Provider } from 'common/provider';
import { Metadata } from 'next';
import { PRIMARY_FONT } from 'common/utils/font';
import './globals.css';

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
                <body className={PRIMARY_FONT.className}>
                    {children}
                    <Toaster />
                </body>
            </html>
        </Provider>
    );
}
