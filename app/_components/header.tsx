import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { Icon, Menu } from 'lucide-react';

const Header = () => {
    return (
        <Card>
            <CardContent className="flex justify-between items-center p-5">
                <Image src={'/logo.png'} alt="logo barbershop" height={22} width={120} />
                <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                    <Menu size={16}/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;