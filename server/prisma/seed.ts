import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Caique Leme",
      email: "caique.leme@gmail.com",
      avatarUrl: "https://github.com/Caique24-01.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example pool",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-02T12:00:00.201Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T12:00:00.201Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
            firstTeamPoints: 2,
            secondTeamPoints: 1,

            participant: {
                connect: {
                    userId_poolId: {
                        userId: user.id,
                        poolId: pool.id
                    }
                }
            }
        }
      }
    },
  });
}

main();
