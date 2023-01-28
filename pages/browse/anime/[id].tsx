import { GetServerSideProps } from "next";

export default function AnimeId({ anime }: any) {
   console.log(anime);

   return <div>AnimeId</div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;
   const res = await fetch(`https://api.consumet.org/meta/anilist/info/${id}`);
   const data = await res.json();

   return {
      props: { anime: data },
   };
};
