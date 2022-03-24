// extension: Tailwind CSS by Tailwind Labs
// extension: react Redux by dsznajder
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Widgets from "../components/Widgets";
export default function Home({ trendingResults, followResults, providers}){
    const { data: session } = useSession();
    const[isOpen, setIsopen] = useRecoilState(modalState);

    if(!session) return <Login providers={providers}/>
    return (
        <div className="">
        <Head>
            <title> Twitter</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-black min-h-screen flex max-w-[1500px] mx-auto">
            <Sidebar/>
            <Feed />
            <Widgets
            trendingResults={trendingResults}
            followResults={followResults}
          />
           {isOpen && <Modal /> } 
        </main>
        
        </div>
    )
}
//02:45:00
export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
        (res) => res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
        (res) => res.json()
    );
    const providers = await getProviders();
    const session = await getSession(context);
    
    return {
        props: {
        trendingResults,
        followResults,
        providers,
        session,
        },
    };
    }