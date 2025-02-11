const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "E-commerce Platform",
        description: "Full-stack shopping platform with Next.js",
        image: "/images/project1.jpg",
        url: "https://example.com",
        github: "https://github.com/example",
        tags: ["React", "Next.js", "Node.js"]
      },
      // 添加更多示例项目
    ]
  })
}