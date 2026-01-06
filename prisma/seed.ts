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
    },
  });

  // --- GENERATION 1: GWADENZWA & SPOUSES ---
  const gwadenzwa = await prisma.person.create({
    data: {
      name: "Gwandezwa",
      gender: "male",
      parentId: lovoga.id,
    },
  });

  const emonyangwa = await prisma.person.create({
    data: {
      name: "Emonyangwa",
      gender: "female",
    },
  });

  const secondWifeG = await prisma.person.create({
    data: {
      name: "Mbaiza",
      gender: "female",
    },
  });
  const thirdWifeG = await prisma.person.create({
    data: {
      name: "Ajirangana",
      gender: "female",
    },
  });
  const fourthWifeG = await prisma.person.create({
    data: {
      name: "Fourth Wife",
      gender: "female",
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
  const siva = await prisma.person.create({
    data: {
      name: "Siva (Mom unknown)",
      gender: "male",
      parentId: gwadenzwa.id,
    },
  });

  // Siva's wife
  const mirehana = await prisma.person.create({
    data: {
      name: "Mirehana",
      gender: "female",
    },
  });

  await prisma.marriage.createMany({
    data: [{ spouseAId: siva.id, spouseBId: mirehana.id }],
  });

  // Siva's children
  await prisma.person.createMany({
    data: [
      { name: "Kavandara", gender: "female", parentId: siva.id },
      { name: "Unknown", gender: "female", parentId: siva.id },
    ],
  });

  const harun = await prisma.person.create({
    data: {
      name: "Harun Sugugu (Emonyangwa)",
      gender: "male",
      parentId: gwadenzwa.id,
    },
  });
  const dinah = await prisma.person.create({
    data: {
      name: "Dinah Kavuka",
      gender: "female",
    },
  });

  await prisma.marriage.createMany({
    data: [{ spouseAId: harun.id, spouseBId: dinah.id }],
  });

  // Harun children
  await prisma.person.createMany({
    data: [
      {
        name: "Jamin Sarano",
        gender: "male",
        parentId: harun.id,
        birthDate: new Date("1938-05-10"),
      },
      { name: "Peter", gender: "male", parentId: harun.id },
      {
        name: "Ezekiah",
        gender: "female",
        parentId: harun.id,
        birthDate: new Date("1946-05-10"),
        deathDate: new Date("1956-05-10"),
      },
      {
        name: "Vuguza",
        gender: "female",
        parentId: harun.id,
        birthDate: new Date("1948-05-10"),
      },
      {
        name: "Abel Ebo Onzere",
        gender: "male",
        parentId: harun.id,
        birthDate: new Date("1951-05-10"),
      },
      {
        name: "Janet",
        gender: "female",
        parentId: harun.id,
        birthDate: new Date("1953-05-10"),
      },
      {
        name: "Phanis",
        gender: "female",
        parentId: harun.id,
        birthDate: new Date("1955-05-10"),
      },
      {
        name: "Jackson Lovoga",
        gender: "male",
        parentId: harun.id,
        birthDate: new Date("1957-05-10"),
      },
    ],
  });
  await prisma.person.create({
    data: {
      name: "Chonerwa (Mom unknown)",
      gender: "male",
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Iminza (Emonyangwa)",
      gender: "female",
      parentId: gwadenzwa.id,
    },
  });
  await prisma.person.create({
    data: {
      name: "Jumba (Emonyangwa)",
      gender: "female",
      parentId: gwadenzwa.id,
    },
  });

  const robai = await prisma.person.create({
    data: {
      name: "Robai Guridala",
      gender: "female",
    },
  });
  const lenah = await prisma.person.create({
    data: {
      name: "Lenah Gimase",
      gender: "female",
      birthDate: new Date("1907-08-15"),
      deathDate: new Date("2003-04-05"),
      parentId: robai.id,
    },
  });

  const secondWifeD = await prisma.person.create({
    data: {
      name: "First Wife",
      gender: "female",
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
  const nyabera = await prisma.person.create({
    data: {
      name: "Philimona Nyabera",
      gender: "male",
      birthDate: new Date("1930-12-31"),
      parentId: daniel.id,
    },
  });
  const agnes = await prisma.person.create({
    data: {
      name: "Agnes",
      gender: "female",
    },
  });

  await prisma.marriage.create({
    data: { spouseAId: nyabera.id, spouseBId: agnes.id },
  });
  // Nyabera'S CHILDREN ---
  await prisma.person.createMany({
    data: [
      { name: "Mariko", gender: "male", parentId: nyabera.id },
      { name: "Florence Emonyangwa", gender: "female", parentId: nyabera.id },
      { name: "Imali", gender: "female", parentId: nyabera.id },
      { name: "Vijedi", gender: "female", parentId: nyabera.id },
      { name: "Kenneth Enonda", gender: "male", parentId: nyabera.id },
      { name: "Minayo", gender: "male", parentId: nyabera.id },
      { name: "Jumba", gender: "male", parentId: nyabera.id },
    ],
  });

  const rodah = await prisma.person.create({
    data: {
      name: "Rodah Mbaiza",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1932-01-01"),
      deathDate: new Date("2024-08-05"),
    },
  });
  const elias = await prisma.person.create({
    data: {
      name: "Elias Kadiori",
      gender: "male",
    },
  });

  await prisma.marriage.create({
    data: { spouseAId: rodah.id, spouseBId: elias.id },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Kidaha",
        gender: "male",
        parentId: rodah.id,
        birthDate: new Date("1946-01-01"),
        deathDate: new Date("1989-08-05"),
      },
      {
        name: "Sayo",
        gender: "female",
        parentId: rodah.id,
        birthDate: new Date("1949-01-01"),
        deathDate: new Date("1994-08-05"),
      },
      {
        name: "Phones",
        gender: "female",
        parentId: rodah.id,
        birthDate: new Date("1957-01-01"),
      },
      {
        name: "Zacheri Mzee",
        gender: "male",
        parentId: rodah.id,
        birthDate: new Date("1959-01-01"),
      },
      {
        name: "Aggrey Mugami Owinjo",
        gender: "male",
        parentId: rodah.id,
        birthDate: new Date("1960-01-01"),
        deathDate: new Date("2022-08-05"),
      },
      {
        name: "Rose",
        gender: "female",
        parentId: rodah.id,
        birthDate: new Date("1963-01-01"),
      },
      {
        name: "Margaret",
        gender: "female",
        parentId: rodah.id,
        birthDate: new Date("1973-01-01"),
      },
      {
        name: "Mudavi",
        gender: "male",
        parentId: rodah.id,
        birthDate: new Date("1976-01-01"),
      },
    ],
  });

  const rachael = await prisma.person.create({
    data: {
      name: "Rachael Kedeki",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1938-01-01"),
    },
  });
  const erastus = await prisma.person.create({
    data: {
      name: "Erastus Lwenya",
      gender: "male",
      birthDate: new Date("1935-01-01"),
      deathDate: new Date("2024-08-05"),
    },
  });

  await prisma.marriage.create({
    data: { spouseAId: rachael.id, spouseBId: erastus.id },
  });

  // Rachael'S CHILDREN ---
  await prisma.person.createMany({
    data: [
      {
        name: "Hesbon Mutira",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1952-01-01"),
        deathDate: new Date("1992-08-05"),
      },
      {
        name: "Solomon Mavare",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1956-01-01"),
        deathDate: new Date("2008-08-05"),
      },
      {
        name: "Seth Eranogwa",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1958-01-01"),
        deathDate: new Date("2023-08-05"),
      },
      {
        name: "Jane",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1960-01-01"),
      },
      {
        name: "Gladys Ingado",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1963-01-01"),
      },
      {
        name: "Adori",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1965-01-01"),
        deathDate: new Date("2009-08-05"),
      },
      {
        name: "Caroline",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1967-01-01"),
      },
      {
        name: "Rigaga",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1975-01-01"),
        deathDate: new Date("2025-11-05"),
      },
      {
        name: "Mebo",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1975-01-01"),
        deathDate: new Date("2004-11-05"),
      },
      {
        name: "Majanga",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1977-01-01"),
        deathDate: new Date("2023-11-05"),
      },
      {
        name: "David",
        gender: "male",
        parentId: rachael.id,
        birthDate: new Date("1979-01-01"),
      },
      {
        name: "Lydia",
        gender: "female",
        parentId: rachael.id,
        birthDate: new Date("1980-01-01"),
      },
    ],
  });
  const truphena = await prisma.person.create({
    data: {
      name: "Truphena Aleyo",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1936-01-01"),
    },
  });
  const chabeda = await prisma.person.create({
    data: {
      name: "David Chabeda",
      gender: "male",
      birthDate: new Date("1934-10-28"),
      deathDate: new Date("2009-02-25"),
    },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Agrey Kidiavai",
        gender: "male",
        parentId: truphena.id,
        birthDate: new Date("1957-01-01"),
      },
      {
        name: "George Sagwa",
        gender: "male",
        parentId: truphena.id,
        birthDate: new Date("1959-01-01"),
        deathDate: new Date("2018-02-25"),
      },
      {
        name: "Herbert Kidiga",
        gender: "male",
        parentId: truphena.id,
        birthDate: new Date("1960-01-01"),
      },
      {
        name: "Dorothy Imali",
        gender: "female",
        parentId: truphena.id,
        birthDate: new Date("1969-01-01"),
      },
    ],
  });

  await prisma.marriage.create({
    data: { spouseAId: truphena.id, spouseBId: chabeda.id },
  });
  const fridah = await prisma.person.create({
    data: {
      name: "Fridah Muhonja",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1949-01-01"),
    },
  });
  const kilasi = await prisma.person.create({
    data: {
      name: "Jamin Ingaiza Kilasi",
      gender: "male",
      birthDate: new Date("1936-01-01"),
      deathDate: new Date("2014-02-23"),
    },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Jane Emonyangwa",
        gender: "female",
        parentId: fridah.id,
        birthDate: new Date("1968-01-01"),
      },
      {
        name: "Benerd Ochieng",
        gender: "male",
        parentId: fridah.id,
        birthDate: new Date("1977-01-01"),
      },
      {
        name: "Corin Kahendi",
        gender: "female",
        parentId: fridah.id,
        birthDate: new Date("1983-01-01"),
      },
      {
        name: "Newton Kilaasi",
        gender: "male",
        parentId: fridah.id,
        birthDate: new Date("1987-01-01"),
      },
      {
        name: "Wycliffe Ndunganyi",
        gender: "male",
        parentId: fridah.id,
        birthDate: new Date("1985-01-01"),
      },
      {
        name: "Denis Kesesi",
        gender: "male",
        parentId: fridah.id,
        birthDate: new Date("1989-01-01"),
        deathDate: new Date("2024-01-01"),
      },
    ],
  });

  await prisma.marriage.create({
    data: { spouseAId: fridah.id, spouseBId: kilasi.id },
  });
  const laban = await prisma.person.create({
    data: {
      name: "Laban Kahi",
      gender: "male",
      parentId: daniel.id,
      birthDate: new Date("1940-01-01"),
    },
  });
  const jesica = await prisma.person.create({
    data: {
      name: "Jesica Seli",
      gender: "female",
      birthDate: new Date("1948-01-01"),
    },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Violet Imali",
        gender: "female",
        parentId: laban.id,
        birthDate: new Date("1967-01-01"),
        deathDate: new Date("1992-01-01"),
      },
      {
        name: "Anthony Avugwi",
        gender: "male",
        parentId: laban.id,
        birthDate: new Date("1967-01-01"),
        deathDate: new Date("1983-01-01"),
      },
      {
        name: "Milicent Jaika",
        gender: "female",
        parentId: laban.id,
        birthDate: new Date("1970-01-01"),
      },
      {
        name: "Beverly Jumba",
        gender: "female",
        parentId: laban.id,
        birthDate: new Date("1973-01-01"),
      },
      {
        name: "Damaris Ngirinyo",
        gender: "female",
        parentId: laban.id,
        birthDate: new Date("1976-01-01"),
      },
      {
        name: "Javan Mwakulegwa",
        gender: "male",
        parentId: laban.id,
        birthDate: new Date("1980-01-01"),
      },
      {
        name: "Maximila Iminza",
        gender: "male",
        parentId: laban.id,
        birthDate: new Date("1983-01-01"),
      },
      {
        name: "Joseph Kesesi",
        gender: "male",
        parentId: laban.id,
        birthDate: new Date("1984-01-01"),
      },
      {
        name: "Joyce Kamonya",
        gender: "male",
        parentId: laban.id,
        birthDate: new Date("1984-01-01"),
      },
    ],
  });

  await prisma.marriage.create({
    data: { spouseAId: laban.id, spouseBId: jesica.id },
  });
  const helen = await prisma.person.create({
    data: {
      name: "Helen Makungu",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1952-01-01"),
    },
  });
  const francis = await prisma.person.create({
    data: {
      name: "Francis Inganji",
      gender: "male",
      birthDate: new Date("1950-01-01"),
    },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Victoria Warona",
        gender: "female",
        parentId: helen.id,
        birthDate: new Date("1981-01-01"),
      },
      {
        name: "Victor Inganji",
        gender: "male",
        parentId: helen.id,
        birthDate: new Date("1983-01-01"),
      },
      {
        name: "Ann Gimase",
        gender: "female",
        parentId: helen.id,
        birthDate: new Date("1987-01-01"),
      },
    ],
  });

  await prisma.marriage.create({
    data: { spouseAId: helen.id, spouseBId: francis.id },
  });
  const erica = await prisma.person.create({
    data: {
      name: "Erica Kaluhi",
      gender: "female",
      parentId: daniel.id,
      birthDate: new Date("1943-01-01"),
    },
  });
  const mutongore = await prisma.person.create({
    data: {
      name: "Livingstone Mutongore",
      gender: "male",
      birthDate: new Date("1941-01-01"),
      deathDate: new Date("2021-01-01"),
    },
  });

  await prisma.person.createMany({
    data: [
      {
        name: "Irene Kenda",
        gender: "female",
        parentId: erica.id,
        birthDate: new Date("1960-01-01"),
        deathDate: new Date("2023-01-01"),
      },
      {
        name: "Joyce Iminza",
        gender: "female",
        parentId: erica.id,
        birthDate: new Date("1967-01-01"),
      },
      {
        name: "Arnold Bahati",
        gender: "male",
        parentId: erica.id,
        birthDate: new Date("1978-01-01"),
      },
    ],
  });

  await prisma.marriage.create({
    data: { spouseAId: erica.id, spouseBId: mutongore.id },
  });

  // --- GENERATION 3: DANIEL'S CHILDREN ---
  await prisma.person.createMany({
    data: [
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
      name: "Jackson Siva",
      gender: "male",
      birthDate: new Date("1945-12-31"),
      parentId: daniel.id,
    },
  });

  // --- GENERATION 4: JACKSON & SPOUSE ---
  const jane = await prisma.person.create({
    data: {
      name: "Jane Vugutsa",
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
      name: "Hillary Lovoga",
      gender: "male",
      parentId: jackson.id,
      birthDate: new Date("1981-05-01"),
    },
  });
  const olive = await prisma.person.create({
    data: {
      name: "Olive Andisi",
      gender: "female",
      parentId: jackson.id,
      birthDate: new Date("1983-01-08"),
    },
  });
  const edwin = await prisma.person.create({
    data: {
      name: "Edwin Kesesi",
      gender: "male",
      parentId: jackson.id,
      birthDate: new Date("1984-12-08"),
    },
  });
  const nelly = await prisma.person.create({
    data: {
      name: "Nelly Gimase",
      gender: "female",
      parentId: jackson.id,
      birthDate: new Date("1987-05-25"),
    },
  });
  const faith = await prisma.person.create({
    data: {
      name: "Faith Iminza",
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
        name: "Bravyn Ricky Rotah",
        gender: "male",
        parentId: nelly.id,
        birthDate: new Date("2017-04-04"),
      },
      {
        name: "Reilly Jackson Rotah",
        gender: "male",
        parentId: nelly.id,
        birthDate: new Date("2022-07-03"),
      },
      // Children of Faith
      {
        name: "Nolan George Oluoch",
        gender: "male",
        parentId: faith.id,
        birthDate: new Date("2019-07-04"),
      },
      {
        name: "Aziel Jackson Oluoch",
        gender: "male",
        parentId: faith.id,
        birthDate: new Date("2021-04-04"),
      },
      {
        name: "Derian Yishai Oluoch",
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
