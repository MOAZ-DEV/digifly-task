import { useRouter } from "next/router";
import ar from "src/locales/ar";
import en from "src/locales/en";

export default function TextWrap(props: any) {
  const
    router = useRouter(),
    { locale } = router,
    t = locale === 'en' ? en : ar;
  const
    { title, body } = props;
  return (
    <div className="flex flex-col items-start gap-2 sm:px-11 px-6 max-w-5xl">
      <h2 className={`relative text-3xl font-bold before:absolute before:top-1/2
       ${ locale === 'en'? 'ml-16 before:-left-3/4':'mr-16 before:-right-[47%]'} before:-translate-y-1/2 before:flex before:min-h-1 before:min-w-12 before:rounded-full before:bg-accentViolet-400`}>{title}</h2>
      <p className="text-lg font-normal text-black-500 opacity-60">{body}</p>
    </div>
  )
};