import { CircleCheck, CircleX, Layers } from "lucide-react";
import Buttons from "./button";

const prepLabFeatures = [
  "100% Free with No Quality Compromises",
  "Daily Updated Content",
  "Well-Structured Learning Resources",
  "Modern & User-Friendly Experience",
  "No Hidden Charges",
];

const otherFeatures = [
  "Expensive Subscription Fees",
  "Outdated Learning Materials",
  "Limited Free Resources",
  "Inconsistent Learning Experience",
  "Hidden Premium Restrictions",
];

function Comparison() {
  return (
    <section className="w-full py-5 select-none">
      <div className="max-w-7xl  mx-auto px-4">
        <div className="text-center mb-12">
          <Buttons>Comparison</Buttons>
          <h1 className="text-2xl md:text-4xl mt-4 max-w-3xl md:mt-6 font-mono font-semibold  mx-auto">
            Compare PrepLab with Other Platforms and See the Difference{" "}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border  p-6 ">
            <div className="text-xl font-semibold mb-6 flex gap-2 text-green-600">
              <Layers />
              <h1>PrepLab</h1>
            </div>

            <div className="space-y-4">
              {prepLabFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b pb-3 last:border-none last:pb-0"
                >
                  <CircleCheck className="text-green-600 shrink-0" size={20} />
                  <span className="text-[16px] md:text-xl font-medium font-mono">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border  p-6 ">
            <div className="text-xl font-semibold mb-6 flex gap-2 text-red-600">
              <Layers />
              <h1>Other Platforms</h1>
            </div>

            <div className="space-y-4">
              {otherFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b pb-3 last:border-none last:pb-0"
                >
                  <CircleX className="text-red-500 shrink-0" size={20} />
                  <span className="text-[16px] md:text-xl font-medium font-mono">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
