console.log("Running test-db.js...");

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // 1. Create a test user
    const user =  await prisma.user.create({
        data: {
            email: "testuser@example.com",
            name: "Test User",
        },
    })

    // 2. Create a test exam
    const exam =  await prisma.exam.create({
        data: {
            name: "SSC CGL 2024",
            code: "CGL-2024",
        },
    })

    // 3. Create a test question
    const question = await prisma.question.create({
        data: {
            text: "What is 2 + 2?",
            correctOption: "B",
            examId: exam.id,
        },
    })

    // 4. Create an answer for the user
  const answer = await prisma.answer.create({
    data: {
      userId: user.id,
      questionId: question.id,
      selectedOption: "B",
      isCorrect: true, // manually set for now
    },
  })

  console.log("✅ User created:", user)
  console.log("✅ Exam created:", exam)
  console.log("✅ Question created:", question)
  console.log("✅ Answer created:", answer)
}

main()
  .catch((e) => {
    console.error("❌ Error running script:", e)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log("🔌 DB connection closed.")
  })