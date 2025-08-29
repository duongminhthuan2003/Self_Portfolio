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
		
		// Ensure clean state before transition
		container?.classList.remove("page-transition");
		
		// Add transition class
		container?.classList.add("page-transition");
		await sleep(300); // Reduced timing

		router.push(href);

		// Wait for navigation to complete, then clean up
		await sleep(100);
		
		// Force cleanup
		requestAnimationFrame(() => {
			container?.classList.remove("page-transition");
			// Force a repaint
			(container as HTMLElement)?.offsetHeight;
		});
	}
	
	return <Link
		onClick={handleTransiton}
		href={href} className={className} {...props}>
		{children}
	</Link>
}

export default TransitionLink;
