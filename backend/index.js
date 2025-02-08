const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mspData = {
  wheat: 2125,
  rice: 1940,
  maize: 1870,
  barley: 1600
};

app.get('/msp/:crop', (req, res) => {
  const crop = req.params.crop.toLowerCase();
  const msp = mspData[crop];
  if (msp) {
    res.json({ crop, msp });
  } else {
    res.json({ error: 'MSP not found for this crop' });
  }
});

const PORT = 5501;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});