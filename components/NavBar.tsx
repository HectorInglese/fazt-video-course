'use client'
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link'
import React, { useState } from 'react'

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
            >
                <NavbarContent className="sm:hidden" justify="stakrt">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className='hidden sm:flex gap-32' justify='end'>
                    <NavbarItem>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/posts'}>
                            Posts
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/about'}>
                            About
                        </Link>
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