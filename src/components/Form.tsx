import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { pushUser } from "src/state-management/action";
import { useRouter } from "next/router";
import ar from "src/locales/ar";
import en from "src/locales/en";

export default function Form(props: any) {
    const
        dispatch = useDispatch(),
        formData = useSelector((state: any) => state.formData);
    const
        router = useRouter(),
        { locale } = router,
        t = locale === 'en' ? en : ar;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            console.log(formData);
            dispatch(pushUser());
        }}
            className="flex flex-col gap-6 w-full sm:px-11 px-6 max-w-5xl md:min-w-[465px]">
            <div className="flex flex-row gap-4 w-full">
                <Input type={t.fn} code="FirstName" required />
                <Input type={t.ln} code="LastName" required />
            </div>
            <Input type={t.mn} code="Phone" required />
            <Input type={t.em} code="Email" required />
            <button type="submit"
                className="flex items-center justify-center h-[52px] w-full p-2 rounded-sm bg-accentEmerald-500 text-[white]">
                {t.snd}
            </button>
        </form>
    );
}