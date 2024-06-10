import { StaticImageData } from "next/image";
import React from "react";

export interface IHome {
    title: string;
    href: string;
    mainImage: {
        src: string;
        alt: string;
    };
    description: React.ReactNode;
    price: string | React.ReactNode;
    advantages: {
        title: React.ReactNode;
        icon: React.ReactNode;
    }[];
    slider: StaticImageData[];
}


export type homeItemName = 'double' | 'triple';

export type homesType = Record<homeItemName, IHome>