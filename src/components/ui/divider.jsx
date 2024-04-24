import { twMerge } from "tailwind-merge";

export default function Divider({ cls }) {
  return <div className={twMerge("w-full h-[1px] bg-slate-300", cls)} />;
}
