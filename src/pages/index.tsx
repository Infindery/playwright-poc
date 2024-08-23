import Head from 'next/head';
import { QuickNavigationPopup } from '@/components/QuickNavigationPopup/QuickNavigationPopup';
import { Header } from '@/components/Header/Header';
import { Layout } from '@/components/Layout/Layout';
import { Hero } from '@/components/Hero/Hero';
import { Cards } from '@/components/Cards/Cards';
// import { Video } from '@/components/Video/Video';
import { Form } from '@/components/Form/Form';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QuickNavigationPopup />
      <Header />
      <Layout>
        <Hero />
        <Cards />
        {/* <Video /> */}
        <Form />
      </Layout>
      <Footer />
    </>
  );
}