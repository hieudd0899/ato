import { PlatformDefaultLayout } from '~/components/layouts/platform-default-layout';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export default function PlatformLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <PlatformDefaultLayout>{children}</PlatformDefaultLayout>;
}
