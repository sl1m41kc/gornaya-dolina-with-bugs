import { Philosopher } from "@/app/fonts/fonts"
import clsx from "clsx"
import classes from "./Title.module.css"

export const Title = ({children}: {children: React.ReactNode}) => {
  return (
    <h2 className={clsx(Philosopher.className, classes.title)}>{children}</h2>
  )
}