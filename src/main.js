import axios from 'axios';

// função delay aciona o .then após 1s
const delay = (msgCont) => new Promise(
  resolve => {
      setTimeout(() => { resolve(`${msgCont} seg`) }, 1000);
  }
);

const umPorSegundo = async(sec) => {
  let cont = 1;
  while (cont <= sec) {
    console.log(await delay(cont));
    cont++;
  }
};

class Github {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);

      console.log(response.data);
    }
    catch(err) {
      console.warn('Usuário não existe');
    }
  };

  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    }
    catch(err) {
      console.warn('Repositório não existe');
    }
  };
}

umPorSegundo(3);

Github.getUserFromGithub('joaogdcarvalho');
Github.getUserFromGithub('joaogdcarvalh0');

Github.getRepositories('rocketseat/awesome');
Github.getRepositories('rocketseat/dslkvmskv');

Github.getRepositories('joaogdcarvalho/joaogdcarvalho');
Github.getRepositories('joaogdcarvalho');
