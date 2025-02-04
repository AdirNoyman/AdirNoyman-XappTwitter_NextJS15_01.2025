import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen flex flex-col justify-between sticky top-0 pt-2 pb-8">
      {/* LOGO & MENU BUTTONS */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className='p-2 rounded-full hover:bg-[#181818]'>
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map(menuItem => (
            <Link className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" href={menuItem.link} key={menuItem.id}>
                <Image src={`icons/${menuItem.icon}`} alt={menuItem.name} width={24} height={24} />
                <span className='hidden xxl:inline'>{menuItem.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* USER BUTTON */}
      <div className="">user</div>
    </div>
  );
};

export default LeftBar;
