// Component/Stars.js
import { motion } from "framer-motion";

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 10 + 8; // Size: 8px to 18px
    stars.push({
      id: i,
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size,
      delay: Math.random() * 5,
    });
  }
  return stars;
};

const Stars = () => {
  const stars = generateStars(40);

  return (
    <div className="absolute top-0 left-0 w-full h-full md:w-1/2 z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.svg
          key={star.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="white"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            filter: "drop-shadow(0 0 6px white)",
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <polygon points="50,0 61,35 98,35 68,57 78,91 50,70 22,91 32,57 2,35 39,35" />
        </motion.svg>
      ))}
    </div>
  );
};

export default Stars;
