import prisma from '../lib/prisma'

async function main() {
  await seedUsers();
  await seedCategories();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
async function seedUsers() {
  if (!await prisma.user.findFirst({ where: { email: 'dhananjayak@yahoo.com' } })) {
    await prisma.user.create({
      data: {
        email: 'dhananjayak@yahoo.com',
        name: 'Dhananjaya',
        mobile: '1234567890',
      }
    });
  }
}

async function seedCategories() {
  if (!await prisma.category.findFirst({ where: { name: 'Medicine Supplies' } })) {
    await prisma.category.create({
      data: {
        name: 'Medicine Supplies',
      }
    });
  }

  if (!await prisma.category.findFirst({ where: { name: 'Medicine' } })) {
    await prisma.category.create({
      data: {
        name: 'Medicine',
      }
    });
  }
}

