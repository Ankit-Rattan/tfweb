import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Confetti } from "lucide-react";

const CelebrationButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open("https://youtube.com", "_blank"); // Replace with your link
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <motion.div
        animate={isClicked ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          onClick={handleClick}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg hover:from-purple-600 hover:to-pink-600"
        >
          Celebrate!
        </Button>
      </motion.div>

      {isClicked && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Confetti className="w-24 h-24 text-yellow-400 animate-spin" />
          <Confetti className="w-24 h-24 text-pink-400 animate-spin-slow" />
        </motion.div>
      )}
    </div>
  );
};

export default CelebrationButton;
