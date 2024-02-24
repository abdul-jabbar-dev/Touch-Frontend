import { IoChatboxOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import Image from "next/image";

interface ItemInterface {
  title: string;
  icon: JSX.Element;
  notifyCount?: string;
  route: string,
  isActive: boolean | undefined
}


export default function Items() {

  const thePathName = usePathname()

  const setIsActive = (path: string): boolean => {

    return (thePathName.split("/")[1] === path.split("/")[1])
  }

  const items: ItemInterface[] = [
    {

      title: "Home",
      icon: <IoHomeOutline />,
      route: '/',
      isActive: setIsActive("/")
    },
    {
      title: "Message",
      icon: <IoChatboxOutline />,
      route: "/message",
      isActive: setIsActive("/message")
    },
    {
      title: "Notification",
      icon: <IoIosNotificationsOutline />,
      notifyCount: "5",
      route: "/notification",
      isActive: setIsActive("/notification")
    },
    {
      title: "Friends",
      icon: <LiaUserFriendsSolid />,
      route: "/friends",
      isActive: setIsActive("/friends")
    },
  ]
  return (
    <ul className="mt-8 ">
      <li className={`flex w-full mb-1 justify-between cursor-pointer items-center border-transparent rounded text-cPrimary-800  hover:border-cPrimary-800 border hover:text-cPrimary-700 `}>
        <Link href={'/profile'} className="flex w-full justify-between items-center focus:outline-none py-3 rounded px-2 focus:ring-2 focus:ring-white">
          <span className="text-sm ml-2 flex gap-3 items-center " >

            <span>
              <Image width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </span>
            <span className="text-cPrimary-900 bg">Abdul Jabbar</span>
          </span>

        </Link>
      </li>
      <br />
      {items.map((item, i) =>
        <li key={i} className={`flex w-full mb-1 justify-between cursor-pointer items-center   rounded text-cPrimary-900 hover:text-white hover:bg-cPrimary-800   ${item.isActive ? "  bg-cPrimary-900 text-white " : " "}`}>
          <Link href={item.route} className="flex w-full justify-between items-center focus:outline-none py-3 rounded px-2 focus:ring-2 focus:ring-white">
            <span className="text-sm ml-2 flex gap-3 items-center" > {item.icon}
              <span >{item.title}</span></span>
            {
              item.notifyCount &&
              <div className="py-1 px-3  bg-cPrimary-900 rounded-full text-white flex items-center justify-end text-xs">{item.notifyCount}</div>
            }
          </Link>
        </li>
      )}

    </ul>
  )
}
