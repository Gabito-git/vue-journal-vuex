export default () => ({
  isLoading: true,
  entries:[
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum neque quam voluptatum obcaecati. Minus reiciendis consequuntur nostrum? Deserunt vel sunt, ea tempora saepe aut nulla animi aperiam nihil delectus error.',
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.',
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.',
      picture: null
    },
  ]
})