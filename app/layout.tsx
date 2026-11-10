import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Cristo Rei Informática | Tecnologia perto de você',description:'Manutenção de computadores, impressoras, redes e suporte remoto em Cristo Rei, Curitiba. Solicite atendimento e agende seu serviço.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
