import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import ar from "src/locales/ar";
import en from "src/locales/en";

export default function ResultsTable(props: any) {
  interface listType {
    FirstName: String,
    LastName: String,
    Phone: String,
    Email: String,
    id: String,
  };
  const
    router = useRouter(),
    { locale } = router,
    t = locale === 'en' ? en : ar;
  const
    [list, setList] = useState<listType[]>([]);
  useEffect(() => {
    setList(props.list);
  }, [props.list]);
  return (
    <div className="flex flex-col gap-4 w-full sm:px-11 px-6 max-w-5xl">
      <p className="text-base font-bold text-accentViolet-500">{t.res}</p>
      <div className="w-full overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <th>{t.fn}</th>
              <th>{t.ln}</th>
              <th>{t.mn}</th>
              <th>{t.em}</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ FirstName, LastName, Phone, Email, id }) =>
              <tr key={String(id)}>
                <td>{FirstName}</td>
                <td>{LastName}</td>
                <td>{Phone? '0'+Phone:null}</td>
                <td>{Email}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
};
