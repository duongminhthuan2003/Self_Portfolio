"use client"

import React from "react";
import Link, {LinkProps} from "next/link";
import {useRouter} from "next/navigation";

interface TransitionLinkProps extends LinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
}

function sleep(milliseconds: number) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
	const router = useRouter();

	const handleTransiton = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();

		const container = document.querySelector(".page-transition-enabled");
		container?.classList.add("page-transition");
		await sleep(250);

		router.push(href);

		await sleep(500);
		container?.classList.remove("page-transition");
	}
	return <Link
		onClick={handleTransiton}
		href={href} className={className} {...props}>
		{children}
	</Link>
}

export default TransitionLink;
