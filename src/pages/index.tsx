import Image from "next/image";
import TextWrap from "components/TextWrap";
import ResultsTable from "components/ResultsTable";
import Form from "components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ar from "src/locales/ar";
import en from "src/locales/en";
import TiptapEditor from "src/components/TiptapEditor";

export default function Home() {

  const
    router = useRouter(),
    { locale } = router,
    t = locale === 'en' ? en : ar;
  const
    LeafletMapSafe = dynamic(() => import("components/LeafletMap"), {
      ssr: false
    });
  const
    [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:1337/user-informations')
      .then(Response => setUsersList(Response.data));
  }, []);

  return (
    <main lang={locale}
      className="flex flex-col gap-24 h-screen w-screen font-poppins max-w-screen-2xl" style={{ direction: (locale === 'en' ? 'ltr' : 'rtl') }}>
      <nav className="flex flex-row gap-4 items-center justify-between w-full py-6 sm:px-11 px-6">
        <a href="/"><Image className="w-auto" src="/digifly-logo.svg" height={45} width={65} alt="digifly logo" /></a>
        <ul className="md:flex flex-row gap-2 hidden">
          {[
            { title: t.home, url: '/home', state: true },
            { title: t.categories, url: '/categories' },
            { title: t.contact, url: '/contact-us' },
            { title: t.about, url: '/about' }
          ].map(({ title, url, state }) =>
            <li key={title}><a className={`${state ? 'text-accentEmerald-500' : null} hover:text-accentEmerald-500 p-4 text-bases font-normal`} href={url}>{title}</a></li>
          )}
        </ul>
        <a href={locale === 'en' ? '/ar' : '/en'} className="flex flex-row gap-2 items-center">
          <p className="hover:text-accentEmerald-500 font-medium">{t.lang}</p>
          <Image src={locale === 'en' ? "/egypt.png" : "/united-kingdom.png"} height={25} width={25} alt="egypt flag" />
        </a>
      </nav>
      <section className="flex flex-col gap-16">
        <TextWrap title={t.part + '1'} body={t.sp1} />
        <div className="flex xl:flex-row flex-col w-full xl:gap-0 gap-12">
          <Form />
          <ResultsTable list={usersList} />
        </div>
      </section>
      <section className="flex flex-col gap-16">
        <TextWrap title={t.part + ' 2'} body={t.sp2} />
        <div className="h-[645px] w-full overflow-hidden map">
          <LeafletMapSafe location={[30.061625, 31.336861]} zoom={19} />
        </div>
      </section>
      <section className="flex flex-col gap-16">
        <TextWrap title={t.part + ' 3'} body={t.sp3} />
        <TiptapEditor />
      </section>
      <div className="flex flex-row items-center justify-center gap-2 min-h-16 w-full *:opacity-60 *:text-[white] *:text-sm *:font-medium bg-accentViolet-500">
        <p>{t.footerp1}</p>
        <Image src="/copyrights.svg" height={20} width={20} alt="copyrights" />
        <p>{t.footerp2}</p>
      </div>
    </main>
  );
}
