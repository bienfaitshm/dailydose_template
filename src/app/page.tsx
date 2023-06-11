import MainContainer from "@/components/MainContainer";
import MainImage from "@/components/NowPlayingCard";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import TopCharts from "@/components/TopCharts";
import PlayListCard from "@/components/PlayListCard";
import Albums from "@/components/Albums";
import PodCast from "@/components/PodCast";
import Player from "@/components/Player";

export default function Home() {
    return (
        <main>
            <div className="">
                <div className="bg-slate-50 max-h-screen fixed left-0 top-0 bottom-0 w-[250px]">
                    <SideBar />
                </div>
                <div className=" relative ml-[250px]">
                    <Navbar />
                    <MainContainer
                        mainContent={<MainImage />}
                        subContent={
                            <>
                                <PlayListCard
                                    title="CHART"
                                    src="/images/img1.jpg"
                                />
                                <PlayListCard
                                    title="New Release"
                                    src="/images/img2.jpg"
                                />
                                <PlayListCard
                                    title="Discover"
                                    src="/images/img1.jpg"
                                />
                            </>
                        }
                        topCharts={<TopCharts />}
                        album={<Albums />}
                        podcast={<PodCast />}
                    />
                    <div className="mb-20" />
                    <div className=" ml-[250px] fixed bottom-0 right-0 left-0 p-4 bg-white/50 backdrop-blur-md">
                        <Player />
                    </div>
                </div>
            </div>
        </main>
    );
}
