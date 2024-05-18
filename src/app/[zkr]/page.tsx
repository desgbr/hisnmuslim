import React from "react";
import SingleZkr from "@/components/cards/SingleZkr";
import { getSingleZkr } from "@/services/api";
import { zkrListItem } from "@/types";

interface PageProps {
  searchParams?: {
    id?: string;
  };
  params: {
    zkr: string;
  };
}

const Page: React.FC<PageProps> = async ({ searchParams, params }) => {
  const title: any = decodeURIComponent(params.zkr);
  const data: any = (await getSingleZkr("ar", searchParams?.id)) || [];

  return (
    <div>
      <h2 className="font-bold text-sky-900 text-2xl">{title}</h2>
      <div>
        {data[title]?.map((item: zkrListItem, index: number) => (
          <SingleZkr
            key={index}
            text={item.ARABIC_TEXT}
            count={item.REPEAT}
            audio={item.AUDIO}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
