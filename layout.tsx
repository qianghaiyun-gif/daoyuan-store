/** Root layout with persistent storefront chrome. */
import './globals.css'; import { SiteShell } from '@/components/site-shell';
export const metadata={title:'DAOYUAN | The 11:11 Field',description:'The Lattice Field'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
