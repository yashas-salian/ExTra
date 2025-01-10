import { useNavigate } from "react-router-dom"
import { TypingAnimation } from "../components/animation"
import { Card } from "../components/card"
import { Card2 } from "../components/descriptionCard"
import { Navbar } from "../components/navBar"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
  export const Dashboard = () => {
    const navigate = useNavigate();
    return (
      <div className="bg-stone-900 min-h-screen">
        <div>
          <Navbar />
          {/* <hr className="bg-cyan-500"></hr> */}
        </div>
        <div className="flex justify-center pt-2">
          <TypingAnimation text={"Let's get started! Track your expenses easily here..."} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="grid-cols-1 pl-4 pt-6 md:pl-20">
            <div className="col-span-2 pl-4 pt-6 md:pl-8 md:pt-10">
              <Card
                label={"About us"}
                text={"ExTra simplifies expense tracking, empowering users with insights, financial control, and secure, user-friendly tools."}
              />
            </div>
            <div className="col-span-2 pl-4 pt-6 md:pl-8 md:pt-10">
              <Card
                label={"Real Time Analysis"}
                text={"Providing the user graphical representation to understand their savings and expenditure."}
                link={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjaR73r1tPt5BniqWnQH3dgj6YAwb1kwyng&s"
                }
              />
            </div>
          </div>
          <div className="grid-cols-1 pl-4 pt-6 md:pl-6">
            <Card2 />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <Drawer>
            <DrawerTrigger className="p-4 w-1/3 flex justify-center bg-cyan-500 border border-cyan-500 rounded-xl transition-all duration-200 hover:bg-cyan-600 hover:scale-105">
              Get Started
            </DrawerTrigger>
            <DrawerContent className="bg-stone-900">
              <DrawerHeader>
                <DrawerTitle className="flex justify-center font-bold text-2xl text-white">
                  Welcome to ExTra – Where managing your expenses becomes effortless!
                </DrawerTitle>
                {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
              </DrawerHeader>
              <DrawerFooter>
                <button
                  className="text-cyan-500"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </button>
                <button
                  className="text-cyan-500"
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Login
                </button>
                <DrawerClose>
                  <button className="text-cyan-500">Cancel</button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    );
  };
  