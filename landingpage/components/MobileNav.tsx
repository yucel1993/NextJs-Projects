import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
const NavContent = () => {
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {NAV_LINKS.map((item) => {
        return (
          <SheetClose key={item.label}>
            <Link href="/">
              <p className="text-3xl font-semibold text-yellow-50 mt-5">
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <div className="inline-block cursor-pointer lg:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
