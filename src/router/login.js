import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    const body = req.body;
    res.json({
      code: 1,
      massage: '登陆成功',
      url: 'http://localhost:8080'
    })
});

export default router