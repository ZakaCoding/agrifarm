'use client';

import { Button, Navbar } from 'flowbite-react';

export function Navigation() {
  return (
    <header>

        <Navbar
        fluid
        className='container bg-transparent rounded-2xl'
        >
        <Navbar.Brand href="https://flowbite-react.com">
            <span className="text-green-600 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            AGRIFARM
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Button className='bg-green-600 mx-3'>
            Get started
            </Button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='active:text-black'>
            <Navbar.Link
            active
            href="#"
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="#">
            About
            </Navbar.Link>
            <Navbar.Link href="#">
            Services
            </Navbar.Link>
            <Navbar.Link href="#">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="#">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </header>
  )
}


