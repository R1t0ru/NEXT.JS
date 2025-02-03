
import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';

//Création du composant RootLayout qui prend en parametre children
//On destructure pour déclarer children
//Tous les composants React possèdent des props (props)
//Exemples :
//const props = {children : "", autreProps : 0}
//const children = props.children
//const autreProps = props.autreProps

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}