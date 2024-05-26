'use client';
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
  value: Value,
  onChangeHandler: Dispatch<SetStateAction<Value>>
}
export default function ReserveCalendar({ }: Props) {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -200 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 200 }}
      className="w-full h-fit p-2">
      <Calendar locale="en" className={"text-black mx-auto lg:mx-0 p-3 rounded-md"} onChange={onChange} value={value} />
    </motion.div>
  )
}
