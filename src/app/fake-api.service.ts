import { Injectable, SimpleChange } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {
  public skills:any = [];
  constructor() { }

  createDb() {

    // let skills = [
    //   { id: 1, name: 'Comunicação', description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', pic: 'https://cdn.pixabay.com/photo/2016/10/25/18/41/design-1769698_960_720.png', likes: 1 },
    //   { id: 2, name: 'Codificação', description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', pic: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg', likes: 1 },
    //   { id: 3, name: 'Gestão de Tempo', description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', pic: 'https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png', likes: 1 },
    //   { id: 4, name: 'Solução de Problemas', description: 'Distintas autuações no sentido de aprovar as atribuições.', pic: 'https://cdn.pixabay.com/photo/2017/02/01/20/14/retro-2031321_960_720.png', likes: 1 },
    //   { id: 5, name: 'Design UX', description: 'Um profissional de TI deve ser capaz de avaliar com precisão quanto tempo um projeto deve levar e, em seguida, ser capaz de cumprir esses cronogramas. Ele ou ela também deve ser capaz de ajudar uma equipe inteira a gerenciar seu tempo, diariamente, semanalmente, mensalmente e em projetos.', pic: 'https://cdn.pixabay.com/photo/2014/12/11/22/10/board-564815_960_720.jpg', likes: 1 },
    //   { id: 6, name: 'Colaboração', description: 'Os profissionais de TI geralmente precisam fornecer soluções de tecnologia para pessoas que não são tão experientes. Eles precisam demonstrar liderança em todos os níveis dos projetos e com muitos grupos diferentes.', pic: 'https://cdn.pixabay.com/photo/2018/10/04/13/55/note-3723689_960_720.jpg', likes: 1 }
    // ];
    let skills = [
      { id: 1, name: 'Comunicação', description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', pic: '/assets/images/01.jpg', likes: 1 },
      { id: 2, name: 'Codificação', description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', pic: '/assets/images/02.jpg', likes: 1 },
      { id: 3, name: 'Gestão de Tempo', description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', pic: '/assets/images/03.jpg', likes: 1 },
      { id: 4, name: 'Solução de Problemas', description: 'Solucionar problemas complexos vai muito além da decisão sobre empecilhos simples do dia a dia no trabalho. Envolve a capacidade de criar soluções fora dos métodos tradicionais, por meio de processos bem definidos para responder a questões nem sempre determinadas.', pic: '/assets/images/04.jpg', likes: 1 },
      { id: 5, name: 'Design UX', description: 'Um profissional de TI deve ser capaz de avaliar com precisão quanto tempo um projeto deve levar e, em seguida, ser capaz de cumprir esses cronogramas. Ele ou ela também deve ser capaz de ajudar uma equipe inteira a gerenciar seu tempo, diariamente, semanalmente, mensalmente e em projetos.', pic: '/assets/images/05.jpg', likes: 1 },
      { id: 6, name: 'Colaboração', description: 'Os profissionais de TI geralmente precisam fornecer soluções de tecnologia para pessoas que não são tão experientes. Eles precisam demonstrar liderança em todos os níveis dos projetos e com muitos grupos diferentes.', pic: '/assets/images/06.jpg', likes: 1 }
    ];
    this.skills = skills;
    return { skills };
  }

  setLike(skill: any){
    console.log(this.skills);
  }
}
