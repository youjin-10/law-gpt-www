import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function KakaoChannel() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, once: true }}
        className="h-60 mt-16 mb-36"
      >
        <p className="hidden sm:block text-xl sm:text-3xl font-medium mb-6">
          카카오톡에서{" "}
          <strong className="text-[#7e22ce] animate-blink">law-GPT</strong>를
          검색해 보세요!
        </p>

        <p className="block sm:hidden text-xl sm:text-3xl font-medium mb-6">
          카카오톡에서 <strong className="text-[#7e22ce]">law-GPT</strong>를
          <br />
          검색해 보세요!
        </p>
      </motion.div>
    </div>
  );
}
