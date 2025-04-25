import server from './server';
import colors from 'colors';

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(colors.red("Server is running on "),colors.yellow( ` http://localhost:${port}`));
});