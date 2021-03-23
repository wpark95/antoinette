const app = require('./app.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`
	??? : 혹시 포트가 어떻게 되는지 아세요? 
	??? : 무~야~${PORT}번 포트~ 
	??? : 거기로 정하신거지~
	`);
});
