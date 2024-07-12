import HomeArea from "@/components/homePage/HomeArea";

export default async function Home({ params: { lang } }) {
  return (
    <>
      <HomeArea lang={lang} />
    </>
  );
}
