'use client'
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                position='static'
            >
                <NavbarContent className="sm:hidden" justify="start">
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
            </Navbar>
        </>
    );
};

export default NavBar