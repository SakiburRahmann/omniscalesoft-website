"use client"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "row-span-1 rounded-[32px] group/bento hover:shadow-2xl transition-all duration-300 p-6 justify-between flex flex-col space-y-4 glass-card-master",
                className
            )}
        >
            <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-2xl overflow-hidden mb-2">
                {header}
            </div>
            <div className="group-hover/bento:translate-x-1 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <div className="font-bold text-foreground text-xl tracking-tighter leading-none">
                        {title}
                    </div>
                </div>
                <div className="text-body-premium text-sm font-medium">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
