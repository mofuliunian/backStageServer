import express from 'express';
import factoryData from '../mock/factoryData';
import url from 'url';

const router = express.Router();

router.get('/factory', (req, res) => {
  const query = url.parse(req.url, true).query;
  console.log(query);
  const data = factoryData.slice((query.page-1) * query.pageNum, query.page * query.pageNum)
  res.json({
    code: 1,
    massage: '请求成功',
    data,
    sum: factoryData.length
  })
});

export default router