import SingleZkr from "@/components/cards/SingleZkr";
import { getSingleZkr } from "@/services/api";
import { zkrListItem } from "@/types";
import React from "react";

const page = async ({
  searchParams,
  params
}: {
  searchParams?: {
    id?: string;
  },
  params:{zkr:string}
  
}) => {
  const title: string = decodeURIComponent(params?.zkr)
  const data =  await getSingleZkr('ar', searchParams?.id) || []
  return <div>
    <h2 className="font-bold text-sky-900 text-2xl">{title}</h2>
    <div className="">
      {
        data[title]?.map((item: zkrListItem) => <>
          <SingleZkr {...{ text: item.ARABIC_TEXT, count:item.REPEAT, audio: item.AUDIO}} />
        </>)
      }
    </div>
  </div>;
};

export default page;
