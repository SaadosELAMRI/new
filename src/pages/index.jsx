import Accueil from '@/components/Accueil';
import Head from 'next/head';

export default function Home(props) {
  const page = props.page;
  return (
  <div>
    <Head>
        <title>Saad El Amri</title>
        <meta name="description" content="Saad El Amri Official Site!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    { page == "acceuil" ? <Accueil /> : page == "cv" ? <Cv /> : page == "portfolio" ? <Portfolio setPage={props.setPage} /> : page == "propos" ? <Propos /> : page == "meetease" ? <Meetease /> : page == "gestion" ? <Gestion /> : false }
  </div>)
}
