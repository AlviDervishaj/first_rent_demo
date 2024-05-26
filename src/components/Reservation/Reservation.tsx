import { AnimatePresence, motion } from "framer-motion";
import Calendar from "../Calendar";
import { useState } from "react";
import { StepDots } from "../StepsDots";
/**
 * Home Page Reservation Component
 * */
export function Reservation() {
  const maxSteps = 7;
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <motion.section
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        type: "spring",
        duration: 1.3,
        delay: 0.3,
      }}
      className="pt-4"
    >
      <h1 className="text-2xl p-2 tracking-wide">Reserve a Car</h1>
      <AnimatePresence mode="wait">
        {currentStep === 1 ? <Calendar key="CALENDAR_UNIQUE" value={new Date()} onChangeHandler={() => { }} /> : null}
        {currentStep === 2 ? <Calendar key="CALENDAR_UNIQUE_2" value={new Date()} onChangeHandler={() => { }} /> : null}
      </AnimatePresence>
      <div className="w-full h-fit flex flex-row items-center content-center justify-between px-10 py-6">
        <button
          onClick={() => setCurrentStep(previousValue => --previousValue)}
          className="w-fit h-fit py-2 px-5 text-center font-xl bg-orange-500 font-slate-100"
        >
          Previous Step
        </button>
        <button
          onClick={() => setCurrentStep(previousValue => ++previousValue)}
          className="w-fit h-fit py-2 px-5 text-center font-xl bg-orange-500 font-slate-100"
        >
          Next Step
        </button>
      </div>
      <StepDots totalSteps={maxSteps} currentStep={currentStep} />

    </motion.section>
  )
}
