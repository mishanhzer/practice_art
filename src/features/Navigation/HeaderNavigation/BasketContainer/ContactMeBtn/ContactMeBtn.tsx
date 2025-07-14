import React from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import { ImageBtn } from "./ImageBtn";
import { LinkTypes } from "./types"

import styles from '../appHeader.module.scss'

export const LinkButton = ({ ml, fz }: LinkTypes) => {
  return (
    <Link
      to="/contact"
      className={twMerge(ml, fz, styles.contactMeBtn)}
    >
      СВЯЗАТЬСЯ СО МНОЙ
      <ImageBtn w="w-6" h="h-6" turn="rotate-0" translateX="translate-x-1" />
    </Link>
  );
};

