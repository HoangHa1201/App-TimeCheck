const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

// Get all users infor
router.get('/users', async (req, res, next) => {
  try{
    const user = await prisma.user.findMany({
      include: {checkings: true},
    });
    res.json({user});
  }catch (error){
    next(error);
  }
});

// Get infor user by id
router.get('/user/:id', async (req, res, next) => {
  try{
    const {id} = req.params;
    const user = await prisma.user.findUnique({
      where: {id: Number(id)},
      include: {checkings: true},
    });
    res.json({user});
  }catch (error){
    next(error);
  }
})
module.exports = router;

// Create timeChecking 
router.post('/checked', async (req, res, next) => {
  try{
    const checked = await prisma.checking.create({
      data: {
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        userId: req.body.userId,
        
      }
    });
    res.json({checked});
  }catch (error){
    next(error);
  }
})
