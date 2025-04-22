import { Button } from "@heroui/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { button } from "@heroui/theme";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo2 } from "../images";


export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MyNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const islogin = !!localStorage.getItem("token")
  const navigate =useNavigate()


  const menuItems = [
    "Integrations",
    "Customers",
    "Features",
    "Log Out",
  ];

  const login = ()=>{
    localStorage.removeItem("token")
    navigate("/signin")
  }


  return (
    <Navbar className="bg-red-600" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img width={130} src={logo2} alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
        <NavbarItem>
          <Link color="" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          {/* <Link href="#">Login</Link> */}
          {
            islogin ? <Button onPress={login}>Logout</Button> : <Button className="hidden lg:flex text-black border-2 border-[#B93246] px-4 py-1 rounded-lg bg-[#B93246]">Login</Button>
          }
        </NavbarItem>
        <NavbarItem>
          <Button className="border-2 border-[#B93246] px-4 py-1 rounded-lg bg-[#B93246]" as={Link} color="black" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

