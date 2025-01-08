import { Toaster } from 'sonner';
import { Provider } from 'common/provider';

import './globals.css';

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
