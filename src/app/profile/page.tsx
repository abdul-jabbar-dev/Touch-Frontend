import ProfileBio from "@/components/sections/profile/ProfileBio";
import ProfileFeed from "@/components/sections/profile/ProfileFeed";
export default function page() {
    return (
        <div className="w-full lg:w-[80%] my-auto ">
        {/* <div className="w-full flex xl:flex-row flex-col gap-x-4  "> */}

            <ProfileBio />
            <ProfileFeed />

        </div>
    )
}
