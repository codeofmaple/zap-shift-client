import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button";

const data = [
    {
        q: "How does this posture corrector work?",
        a: `A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps with muscle memory and reminds you to sit/stand straighter without forcing unnatural positions.`,
    },
    {
        q: "Is it suitable for all ages and body types?",
        a: `Yes — most posture correctors come with adjustable straps and flexible sizing to fit a wide range of body types. Always check the product sizing chart and consult with a healthcare professional if you have specific medical concerns.`,
    },
    {
        q: "Does it really help with back pain and posture improvement?",
        a: `When used properly in combination with exercises and awareness, a posture corrector can reduce strain and help alleviate mild back pain by supporting proper alignment. It is not a replacement for medical care for severe issues.`,
    },
    {
        q: "Does it have smart features like vibration alerts?",
        a: `Some models include gentle vibration alerts to remind wearers to correct their posture; others are simple passive supports. Check the product specs for "smart" or "vibration" features.`,
    },
    {
        q: "How will I be notified when the product is back in stock?",
        a: `You will be notified via the email or phone number you provide on the product page (if “notify me” is enabled). Alternatively, enable push notifications or follow our mailing list for restock updates.`,
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0); // first open by default

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

    return (
        <section className="mb-20">
            <div className="max-w-4xl mx-auto px-6">
                <header className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3b37]">Frequently Asked Question (FAQ)</h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </header>

                {/* Accordion container */}
                <div className="space-y-4">
                    {data.map((item, i) => {
                        const open = i === openIndex;
                        const outerBg = open ? "bg-[#e9f7f6] border-[2px] border-[#1aa7a0]" : "bg-white border border-transparent shadow-sm";
                        return (
                            <div
                                key={i}
                                className={`overflow-hidden rounded-lg ${outerBg}`}
                                role="region"
                                aria-labelledby={`faq-${i}`}
                            >
                                <button
                                    id={`faq-${i}`}
                                    aria-expanded={open}
                                    className={`w-full text-left px-6 py-4 flex items-center justify-between ${open ? "" : ""}`}
                                    onClick={() => toggle(i)}
                                >
                                    <span className="font-semibold text-sm text-[#0b3b37]">{item.q}</span>

                                    <span className="ml-4">
                                        {open ? <FiChevronUp className="text-[#0b3b37]" /> : <FiChevronDown className="text-gray-500" />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: "easeInOut" }}
                                            className="px-6 pb-5"
                                        >
                                            <div className="text-gray-600 text-sm leading-relaxed">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center mt-10">
                    <Button text="See More FAQ's"></Button>
                </div>
            </div>
        </section>
    );
}
