import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data in correct order
  // Delete Marriages first because they depend on Persons
  await prisma.marriage.deleteMany();
  await prisma.person.deleteMany();

  // --- GENERATION 0 ---
  const lovoga = await prisma.person.create({
    data: {
      name: "Lovoga",
      gender: "male",
      birthDate: new Date("1860-01-01"),
      deathDate: new Date("1930-01-01"),
    },
  });

  // --- GENERATION 1: GWADENZWA & SPOUSES ---
  const gwadenzwa = await prisma.person.create({
    data: {
      name: "Gwadenzwa",
      gender: "male",
      birthDate: new Date("1860-01-01"),
      deathDate: new Date("1930-01-01"),
      parentId: lovoga.id,
    },
  });

  const emonyangwa = await prisma.person.create({
    data: {
      name: "Emonyangwa",
      gender: "female",
      birthDate: new Date("1860-01-01"),
      deathDate: new Date("1930-01-01"),
    },
  });

  const secondWifeG = await prisma.person.create({
    data: {
      name: "Mbaiza",
      gender: "female",
      birthDate: new Date("1865-01-01"),
      deathDate: new Date("1930-01-01"),
    },
  });
  const thirdWifeG = await prisma.person.create({
    data: {
      name: "Ajirangana",
      gender: "female",
      birthDate: new Date("1865-01-01"),
      deathDate: new Date("1930-01-01"),
    },
  });
  const fourthWifeG = await prisma.person.create({
    data: {
      name: "Fourth Wife",
      gender: "female",
      birthDate: new Date("1865-01-01"),
      deathDate: new Date("1930-01-01"),
    },
  });

  // Link Gwadenzwa's marriages
  await prisma.marriage.createMany({
    data: [
      { spouseAId: gwadenzwa.id, spouseBId: emonyangwa.id },
      { spouseAId: gwadenzwa.id, spouseBId: secondWifeG.id },
      { spouseAId: gwadenzwa.id, spouseBId: thirdWifeG.id },
      { spouseAId: gwadenzwa.id, spouseBId: fourthWifeG.id },
    ],
  });

  // --- GENERATION 2: DANIEL & SPOUSES ---
  const daniel = await prisma.person.create({
    data: {
      name: "Daniel Imire",
      gender: "male",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Siva (Mom unknown)",
      gender: "male",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Harun Suguhu (Emonyangwa)",
      gender: "male",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Chonerwa (Mom unknown)",
      gender: "male",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Iminza (Emonyangwa)",
      gender: "female",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Jumba (Emonyangwa)",
      gender: "female",
      birthDate: new Date("1905-05-10"),
      deathDate: new Date("2002-11-20"),
      parentId: gwadenzwa.id,
    },
  });

  const lenah = await prisma.person.create({
    data: {
      name: "Lenah Gimase",
      gender: "female",
      birthDate: new Date("1907-08-15"),
      deathDate: new Date("2003-04-05"),
    },
  });

  const secondWifeD = await prisma.person.create({
    data: {
      name: "First Wife",
      gender: "female",
      birthDate: new Date("1910-01-01"),
      deathDate: new Date("1995-01-01"),
    },
  });

  // Link Daniel's marriages
  await prisma.marriage.createMany({
    data: [
      { spouseAId: daniel.id, spouseBId: secondWifeD.id },
      { spouseAId: daniel.id, spouseBId: lenah.id },
    ],
  });

  // Nyabera belongs to Daniel (Father)
  await prisma.person.create({
    data: {
      name: "Nyabera",
      gender: "male",
      birthDate: new Date("1930-12-31"),
      parentId: daniel.id, // Fixed: Point to Daniel, not the wife
    },
  });

  // --- GENERATION 3: DANIEL'S CHILDREN ---
  await prisma.person.createMany({
    data: [
      {
        name: "Rodah Imire",
        gender: "female",
        parentId: daniel.id,
        birthDate: new Date("1932-01-01"),
        deathDate: new Date("2023-04-05"),
      },
      {
        name: "Truphena Imire",
        gender: "female",
        parentId: daniel.id,
        birthDate: new Date("1936-01-01"),
      },
      {
        name: "Rachael Kedeki Imire",
        gender: "female",
        parentId: daniel.id,
        birthDate: new Date("1938-01-01"),
      },
      {
        name: "Laban Imire",
        gender: "male",
        parentId: daniel.id,
        birthDate: new Date("1940-01-01"),
      },
      {
        name: "Feridah Muhonja Imire",
        gender: "female",
        parentId: daniel.id,
        birthDate: new Date("1949-01-01"),
      },
      {
        name: "Helen Makungu Imire",
        gender: "female",
        parentId: daniel.id,
        birthDate: new Date("1952-01-01"),
      },
      {
        name: "Loseno Imire",
        gender: "male",
        parentId: daniel.id,
        birthDate: new Date("1954-01-01"),
        deathDate: new Date("1960-04-05"),
      },
    ],
  });

  const jackson = await prisma.person.create({
    data: {
      name: "Jackson Siva Imire",
      gender: "male",
      birthDate: new Date("1945-12-31"),
      parentId: daniel.id,
    },
  });

  // --- GENERATION 4: JACKSON & SPOUSE ---
  const jane = await prisma.person.create({
    data: {
      name: "Jane Vugutsa Imire",
      gender: "female",
      birthDate: new Date("1954-12-25"),
    },
  });

  await prisma.marriage.create({
    data: { spouseAId: jackson.id, spouseBId: jane.id },
  });

  // Jackson's Children
  const hillary = await prisma.person.create({
    data: {
      name: "Hillary Lovoga Imire",
      gender: "male",
      parentId: jackson.id,
      birthDate: new Date("1981-05-01"),
    },
  });
  const olive = await prisma.person.create({
    data: {
      name: "Olive Andisi Imire",
      gender: "female",
      parentId: jackson.id,
      birthDate: new Date("1983-01-08"),
    },
  });
  const nelly = await prisma.person.create({
    data: {
      name: "Nelly Gimase Imire",
      gender: "female",
      parentId: jackson.id,
      birthDate: new Date("1987-05-25"),
    },
  });
  const faith = await prisma.person.create({
    data: {
      name: "Faith Iminza Imire",
      gender: "female",
      parentId: jackson.id,
      birthDate: new Date("1990-04-16"),
    },
  });
  const allan = await prisma.person.create({
    data: {
      name: "Allan Imire",
      gender: "male",
      parentId: jackson.id,
      birthDate: new Date("1992-01-03"),
    },
  });

  // --- GENERATION 5: SPOUSES OF GRANDCHILDREN ---
  const nancy = await prisma.person.create({
    data: {
      name: "Nancy Bridgit Lukorito",
      gender: "female",
      birthDate: new Date("1986-01-30"),
    },
  });
  const ricky = await prisma.person.create({
    data: {
      name: "Ricky Omondi Rotah",
      gender: "male",
      birthDate: new Date("1984-02-30"),
    },
  });
  const victor = await prisma.person.create({
    data: {
      name: "Victor Othiambo Appopa",
      gender: "male",
      birthDate: new Date("1988-02-30"),
    },
  });
  const margaret = await prisma.person.create({
    data: {
      name: "Margaret Muthoni Watetu",
      gender: "female",
      birthDate: new Date("1993-03-04"),
    },
  });

  await prisma.marriage.createMany({
    data: [
      { spouseAId: hillary.id, spouseBId: nancy.id },
      { spouseAId: nelly.id, spouseBId: ricky.id },
      { spouseAId: faith.id, spouseBId: victor.id },
      { spouseAId: allan.id, spouseBId: margaret.id },
    ],
  });

  // --- GENERATION 6: GREAT-GRANDCHILDREN ---
  await prisma.person.createMany({
    data: [
      // Children of Hillary
      {
        name: "Jayden Lovoga Siva",
        gender: "male",
        parentId: hillary.id,
        birthDate: new Date("2014-07-04"),
      },
      {
        name: "Jason Joseph Lovoga",
        gender: "male",
        parentId: hillary.id,
        birthDate: new Date("2018-07-03"),
      },
      {
        name: "Nylah Lovoga Vugutsa",
        gender: "female",
        parentId: hillary.id,
        birthDate: new Date("2021-07-04"),
      },
      // Child of Olive
      {
        name: "Tanesha Afandi Jang'aya",
        gender: "female",
        parentId: olive.id,
        birthDate: new Date("2010-10-20"),
      },
      // Children of Nelly
      {
        name: "Brianna Rotah Tashia",
        gender: "female",
        parentId: nelly.id,
        birthDate: new Date("2014-07-04"),
      },
      {
        name: "Bravin Ricky Rotah",
        gender: "male",
        parentId: nelly.id,
        birthDate: new Date("2017-04-04"),
      },
      {
        name: "Railey Rotah",
        gender: "male",
        parentId: nelly.id,
        birthDate: new Date("2022-07-03"),
      },
      // Children of Faith
      {
        name: "Nolan Odhiambo",
        gender: "male",
        parentId: faith.id,
        birthDate: new Date("2019-07-04"),
      },
      {
        name: "Aziel Odthiambo",
        gender: "male",
        parentId: faith.id,
        birthDate: new Date("2021-04-04"),
      },
      {
        name: "Derian Odthiambo",
        gender: "male",
        parentId: faith.id,
        birthDate: new Date("2025-07-03"),
      },
      // Children of Allan
      {
        name: "Reign Siva Imire",
        gender: "male",
        parentId: allan.id,
        birthDate: new Date("2021-06-13"),
      },
      {
        name: "Lenani Vugutsa Imire",
        gender: "female",
        parentId: allan.id,
        birthDate: new Date("2024-08-10"),
      },
    ],
  });

  console.log("✅ Seeding completed");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
