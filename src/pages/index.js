// Importez la balise Head depuis next/head
import Head from 'next/head';

// Importez vos composants nécessaires
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projets from '../components/Projets';
import Contact from '../components/Contact';

export default function IndexPage() {
  return (
    <div>
  
      <Head>
        <title>David Gagnon | WebDeveloper</title>
        <link rel="icon" href="/Favicon/android-chrome-512x512.png" />
      </Head>

 
      <Home />
      <About />
      <Skills />
      <Projets />
      <Contact />
    </div>
  );
}
