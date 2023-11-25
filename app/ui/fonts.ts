import { Inter, Lusitana } from 'next/font/google'; // main font type
 
export const inter = Inter({ subsets: ['latin'] }); // font subset which is to import latin from Inter
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});