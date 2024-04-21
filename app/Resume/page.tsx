"use client";
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
import Header from "../components/ui/Header";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"


export default function Resume(){
    function MenubarDemo() {
        return (
          <Menubar>
           <MenubarMenu>
              <MenubarTrigger>
                <GridIcon/> <p className="pl-2 pr-2">Grid</p>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <ListBulletIcon/> <p className="pl-2 pr-2">List</p>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        )
      }
    function Heading(){
        return (
            <>
             <div className="flex justify-between content-center">
            <div>
            <h2 className="scroll-m-20 text-3xl tracking-tight">
            RESUME<br/></h2>
            </div>
            <div className="flex items-center justify-center">
            <div className="flex items-center justify-between">
                <MenubarDemo/>
            </div>
            </div>
            </div>
            </>
        )
    }

    
    return(
        <>
        <Header/>
        <div className="mx-8 mt-3">
        <Heading/>
        </div>
        </>
    )
}