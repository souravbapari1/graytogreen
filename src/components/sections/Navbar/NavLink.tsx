"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string; // New optional prop for extra classes
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  exact = false,
  children,
  className,
}) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? "text-main" : null} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
