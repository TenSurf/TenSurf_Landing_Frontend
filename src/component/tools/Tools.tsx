import {useRouter} from "next/router";
import {TOOLS} from "@/constatns/tools.constants";


const Tools = (
  {
    params,
    searchParams,
  }: {
    params: { tool: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {



  return (
    <div className=' flex flex-col gap-10  my-[120px] max-w-[1200px] px-8'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='pageTitle w-full'>
            <h1 className={'text-3xl md:text-4xl 2xl:text-5xl text-center'}>{TOOLS[params.tool]?.title}</h1>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className={'text-xl'}>{TOOLS[params.tool]?.description}</p>
      </div>
    </div>
  );
};

export default Tools;