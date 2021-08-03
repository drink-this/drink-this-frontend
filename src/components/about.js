const About = () => {

  const info = [
    {
      name: 'Molly Krumholz',
      avatar: 'https://avatars.githubusercontent.com/u/26797256?v=4',
      url: 'https://github.com/mkrumholz'
    },
    {
      name: 'Mark Yen',
      avatar: 'https://avatars.githubusercontent.com/u/77414433?v=4',
      url: 'https://github.com/markcyen'
    },
    {
      name: 'Jermaine Braumuller',
      avatar: 'https://avatars.githubusercontent.com/u/76916134?v=4',
      url: 'https://github.com/Jaybraum'
    },
    {
      name: 'Taija W',
      avatar: 'https://avatars.githubusercontent.com/u/10294841?v=4',
      url: 'https://github.com/twarbelow'
    },
    {
      name: 'Richard DeSilvey',
      avatar: 'https://avatars.githubusercontent.com/u/18402261?v=4',
      url: 'https://github.com/redferret'
    },
    {
      name: 'Zachary Green',
      avatar: 'https://avatars.githubusercontent.com/u/7896916?v=4',
      url: 'https://github.com/zachjamesgreen'
    },
  ]


  return (
    <div className="about font-playfair text-center">
      <h1 className="text-4xl mb-4">About <span className="italic">'drink this'</span></h1>
      <div className="grid grid-cols-6 mb-4">
        <div className="col-start-3 row-span-1">
          <a className="hover:underline" href="https://github.com/drink-this/drink-this-frontend">Front-End</a>
        </div>
        <div>
          <a className="hover:underline" href="https://github.com/drink-this/drink-this-backend">Back-End</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <p className="text-left ml-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, obcaecati? Cumque et reprehenderit hic voluptates laudantium cupiditate, iure quas aliquid autem sequi, commodi culpa illo ad fugit. Itaque, quasi voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur quo accusantium suscipit quibusdam accusamus dolores repudiandae? Necessitatibus, repellat vel, voluptatum minima fugiat blanditiis earum est, ipsam impedit rerum sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam blanditiis a dignissimos id hic nemo accusantium, corporis harum. Sequi, aliquam ipsam adipisci ipsa nesciunt illo nobis voluptas reprehenderit libero!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa facere officia eveniet nam exercitationem nobis? Voluptate fuga distinctio nobis veniam beatae delectus facilis doloremque hic dicta. Dolores, quaerat est!
        </p>
        <div className="grid grid-cols-3">
          {info.map((obj) => {
             return (
              <div className="w-48 mb-4">
                <div className="h-48 bg-cover" style={{ backgroundImage: `url("${obj.avatar}")`}}></div>
                <a className="mt-2 hover:underline" href={obj.url}>{ obj.name }</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default About;