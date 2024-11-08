import Navbarminimal from "@/components/Navbarminimal";
import Eastside from "@/components/Eastside";
import Westside from "@/components/Westside";
import Scroolbox from "@/components/Scroolbox"

export default function Home() {
  return (
    <>
    <div className="bg-[#535353] w-full h-svh">
    <Navbarminimal/>
    <div className="w-full h-svh flex justify-between">
      <Westside/>
      <Scroolbox/>
      <Eastside/>

    </div>
    </div>
    </>
  );
}
