// Quiz configuration from environment variables
export const quizConfig = {
  title: process.env.NEXT_PUBLIC_QUIZ_TITLE || "Retro PC Monitor Quiz",
  description:
    process.env.NEXT_PUBLIC_QUIZ_DESCRIPTION || "A philosophical quiz with typewriter-style text on an old PC monitor",
  typingSpeed: Number(process.env.NEXT_PUBLIC_TYPING_SPEED) || 50,
  primaryColorStart: process.env.NEXT_PUBLIC_PRIMARY_COLOR_START || "#4d2600",
  primaryColorMid: process.env.NEXT_PUBLIC_PRIMARY_COLOR_MID || "#b36200",
  primaryColorEnd: process.env.NEXT_PUBLIC_PRIMARY_COLOR_END || "#ffd700",
}

// Generate CSS variables for the primary gradient
export const getPrimaryGradient = () => {
  return `linear-gradient(to right, ${quizConfig.primaryColorStart}, ${quizConfig.primaryColorMid}, ${quizConfig.primaryColorEnd})`
}

