/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, PercentBadgeIcon } from "@heroicons/react/20/solid";
import { tiers, frequencies } from "../utils/pricingData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingPlan() {
  const [frequency, setFrequency] = useState(frequencies[0].value); // manage the state for switch the buttons between monthly and annually

  const handleChange = (e) => {
    setFrequency(e);
  };

  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <div className="mt-4 flex justify-center">
          <fieldset aria-label="Payment frequency">
            {/* // RadioGroup component from headlessui */}
            <RadioGroup
              value={frequency}
              onChange={handleChange}
              className="grid grid-cols-2 gap-x-1 rounded-[8px] p-1 bg-blue-100 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
              {frequencies.map((option) => (
                <Radio
                  key={option.id}
                  value={option.value}
                  className="cursor-pointer leading-7 rounded-[8px] px-3 py-1 font-medium text-gray-900 data-[checked]:bg-white data-[checked]:text-gray-800"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate rounded-none mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {/* separate map for card data */}
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                "flex flex-col justify-between rounded-[8px] border-r-1 bg-white p-4 shadow-xl ring-1 ring-gray-900/10 sm:p-6",
                tier.mostPopular && "most-popular"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-white" : "text-gray-800",
                      "text-lg font-normal leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p
                      className="rounded-full px-2.5 py-1 text-xs font-semibold leading-4 "
                      style={{ backgroundColor: "#CEE0FF", color: "#053D99" }}
                    >
                      Popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-1 flex items-baseline gap-x-1">
                  <span
                    className={classNames(
                      "text-4xl font-bold tracking-tight",
                      tier.mostPopular ? "text-white" : "text-gray-900"
                    )}
                  >
                    {tier.price[frequency] ?? tier.price}
                  </span>
                  <span
                    className={classNames(
                      "text-sm font-medium leading-6",
                      tier.mostPopular ? "text-white" : "text-gray-500"
                    )}
                  >
                    {typeof tier.price === "object"
                      ? frequencies?.find((f) => f.value === frequency)
                          .priceSuffix
                      : null}
                  </span>
                </p>

                {tier.description.length > 0 ? (
                  <p
                    className={classNames(
                      "mt-1 text-xs font-light leading-6",
                      tier.mostPopular ? "text-white" : "text-gray-500"
                    )}
                  >
                    {tier.description}
                  </p>
                ) : (
                  <div className="flex gap-2 mt-1">
                    <div
                      className="rounded-full  px-2.5 border border-transparent text-sm transition-all shadow-sm"
                      style={{
                        width: "90px",
                        backgroundColor: "#ECFDF3",
                        color: "#027A48",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "12px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <PercentBadgeIcon className="h-3 w-4 flex-none" />
                      50% off
                    </div>
                    <h2
                      className={classNames(
                        "line-through font-sans text-gray-500 text-lg font-bold",
                        tier.mostPopular ? "text-white" : "text-gray-600"
                      )}
                    >
                      {tier?.off}
                    </h2>
                  </div>
                )}
                <ul
                  role="list"
                  className={classNames(
                    "mt-6 space-y-3 text-sm font-light leading-6",
                    tier.mostPopular ? "text-white" : "text-gray-500"
                  )}
                >
                  {tier.features.map((feature, idx) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className={classNames(
                          "h-6 w-5 flex-none",
                          tier.mostPopular ? "text-white" : "text-gray-700",
                          index === 1 && idx === 0 ? "text-blue-700" : ""
                        )}
                      />
                      <span
                        className={
                          index === 1 && idx === 0
                            ? "text-blue-700 font-semibold"
                            : ""
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <hr className="border-t border-blue-400 pb-6" />
                <ul className="list-disc space-y-[14px] ml-4">
                  {tier.footer.map((footer) => (
                    <li
                      key={footer}
                      className={classNames(
                        "font-medium text-sm",
                        tier.mostPopular ? "text-white" : "text-gray-500"
                      )}
                    >
                      <div className="flex items-center gap-x-2">{footer}</div>
                    </li>
                  ))}
                </ul>
                <button
                  className={classNames(
                    "mt-8 block w-full rounded-md  px-3.5 py-2 text-center text-sm font-light leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                    tier.mostPopular
                      ? "bg-white text-gray-800"
                      : "bg-customBlue text-white"
                  )}
                >
                  {tier.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
