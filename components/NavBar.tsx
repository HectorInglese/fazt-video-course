'use client'
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitcher from './themeSwitch';

const menuItems = [
    "Home",
    "Posts",
    "About"
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                isBlurred={false}
                maxWidth='full'
                className='absolute'
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className='hidden sm:flex gap-24 w-full' justify="end" >
                    <NavbarItem>
                        <Link href={'/'}>
                            HOME
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/posts'}>
                            POSTS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/about'}>
                            ABOUT
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href={item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`}
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar >
        </>
    );
};

export default NavBar