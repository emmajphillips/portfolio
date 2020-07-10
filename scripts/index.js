function init() {

  const projects = [
    {
      name: 'Tiger King: Murder, Mayhem and Minesweeper',
      description: 'Tiger King-themed game of Minesweeper using HTML, CSS and vanillaJS',
      link: 'https://emmajphillips.github.io/sei-project-one/',
      readme: 'https://github.com/emmajphillips/sei-project-one'
    },
    {
      name: 'What do you meme?',
      description: '48-hour hackathon to create a GIF generator using the GIPHY API using React, SASS and Bulma',
      link: 'https://what-do-you-meme.netlify.app/',
      readme: 'https://github.com/emmajphillips/sei-project-two'
    },
    {
      name: 'Accountable',
      description: 'Group project to produce an \'improved Splitwise\' within one week using MongoDB, Node, Express.js and React',
      link: 'https://splitexpenses.herokuapp.com/',
      readme: 'https://github.com/emmajphillips/sei-group-project-3'
    },
    {
      name: 'JOBR',
      description: 'A job application tracker',
      link: 'https://jobeur.herokuapp.com',
      readme: 'https://github.com/emmajphillips/sei-project-4'
    }
  ]

  const projectsContainer = document.querySelector('.projects-wrapper')


  projects.map(proj => {
    const project = document.createElement('div')
    const title = document.createElement('h3')
    const links = document.createElement('div')
    const website = document.createElement('a')
    const readme = document.createElement('a')
    const button = document.createElement('button')
    const description = document.createElement('p')

    title.textContent = proj.name
    description.textContent = proj.description
    website.href = proj.link
    website.textContent = 'Visit website'
    readme.href = proj.readme
    readme.textContent = 'ReadMe'
    button.textContent = 'Read more'
    
    project.classList.add('project')
    description.classList.add('hidden')
    links.classList.add('links')

    project.appendChild(title)
    links.appendChild(website)
    links.appendChild(readme)
    project.appendChild(links)
    project.appendChild(button)
    project.appendChild(description)

    projectsContainer.appendChild(project)
    button.addEventListener('click', () => {
      description.classList.toggle('hidden')
    })
  })

  console.log(projectsContainer)
  
}

window.addEventListener('DOMContentLoaded', init)