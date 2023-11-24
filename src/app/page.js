import { SectionWork } from "@/components/section5"
import { NavBar } from "../components/navbar"
import { Header } from "../components/section1"
import { SectionAbout } from "../components/section2"
import { SectionSkills } from "@/components/section3"
import { SectionExperience } from "@/components/section4"
import { SectionInformation } from "@/components/section6"
import { Last } from "@/components/section7"


export default function Home() {



  return (
    <>

      <div className="w-screen flex justify-center p-4">

        <div className=" w-full max-w-6xl flex flex-col">

          <NavBar></NavBar>
          <Header></Header>
          <SectionAbout></SectionAbout>
          <SectionSkills></SectionSkills>
          <SectionExperience></SectionExperience>
          <SectionWork></SectionWork>
          <SectionInformation></SectionInformation>
          <Last></Last>

        </div>

      </div>

    </>
  )

}
