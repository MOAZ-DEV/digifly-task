import { useDispatch } from "react-redux";
import { updateFormField } from "src/state-management/action";

export default function Input(props: any) {
  const
    dispatch = useDispatch(),
    { type, required, code } = props,
    handleUpdate = (value: String) => {
      // console.log(presentType, value);
      dispatch(updateFormField(code, value))
    };
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <p className="text-[#1A1A1A] font-medium text-sm">{type}</p>
      <input
        className="border h-[52px] py-4 px-6 rounded-sm border-black-400 text-sm font-normal w-full"
        type={code === 'Phone'? "number":"text"} placeholder={type} required onChange={e => handleUpdate(e.target.value)} />
    </div>
  )
};
