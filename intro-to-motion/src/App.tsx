import { Button } from "./components/ui/8bit/button"
import { motion } from "motion/react"

function App() {

  return (
    <div
      className="dark bg-background h-screen w-full flex items-center justify-center gap-5"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.1) 0.5px, transparent 0px)`,
        backgroundSize: "8px 8px"
      }}
    >
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 100
      }}
      whileHover={{
        rotate: [0,5,0]
      }}
      transition={{
        duration: 1
      }}>
        <Button variant={"secondary"} className="cursor-pointer">
          Subscribe!
        </Button>
      </motion.div>
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 100
      }}
      whileHover={{
        rotate: [0,5,0]
      }}
      transition={{
        duration: 1
      }}>
        <Button variant={"secondary"} className="cursor-pointer">
          NO!!
        </Button>
      </motion.div>
    </div>
  )
}

export default App