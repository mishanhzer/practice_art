import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import { ArrowIcon } from "./ArrowIcon/ArrowIcon";

import { LinkTypes } from "./types"

import styles from '../../header.module.scss'

export const ContactMeBtn = ({ ml, fz }: LinkTypes) => {
  return (
    <Link
      to="/contact"
      className={twMerge(ml, fz, styles.contactMeBtn)}
    >
      СВЯЗАТЬСЯ СО МНОЙ
      <ArrowIcon w="w-6" h="h-6" turn="rotate-0" translateX="translate-x-1" />
    </Link>
  );
};

