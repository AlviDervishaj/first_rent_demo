import { useEffect, useState } from "react";

type Props = {
  currentStep: number,
  totalSteps: number,
}
export function StepDots({ currentStep, totalSteps }: Props) {
  const [steps, setSteps] = useState<Array<number>>([]);

  useEffect(() => {
    if (!totalSteps || totalSteps <= 0) return;
    setSteps(Array.from({ length: totalSteps }, (_, index) => index + 1));
  }, [totalSteps]);

  console.log({ steps });
  return (
    <div className="w-full h-fit p-2 flex flex-row items-center content-center justify-center gap-8">
      {steps.length >= 2 ? steps.map((step) => {
        return (
          <div
            className={`w-4 h-4 rounded-full p-2 border-2 border-orange-500 ${step <= currentStep ? "bg-orange-500" : "bg-transparent"}`}
            key={`${step}__${currentStep}`}>
          </div>
        );
      }) : null}
    </div>
  )
}
