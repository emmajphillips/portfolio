function init() {

  const projects = [
    {
      name: 'Tiger King: Murder, Mayhem and Minesweeper',
      description: 'Individual project across one week, tasked with building a Tiger King-themed Minesweeper using HTML, CSS and vanillaJS',
      link: 'https://emmajphillips.github.io/sei-project-one/',
      readme: 'https://github.com/emmajphillips/sei-project-one'
    },
    {
      name: 'What do you meme?',
      description: '48-hour hackathon to create a GIF generator using the GIPHY API using React, SASS and Bulma. Completed through paired programming',
      link: 'https://what-do-you-meme.netlify.app/',
      readme: 'https://github.com/emmajphillips/sei-project-two'
    },
    {
      name: 'Accountable',
      description: 'Group project to produce a full-stack application within one week using MongoDB, Node, Express.js and React. We assembled an expense sharing app similar to Splitwise that enabled more social interaction between users and allowed them to transfer funds directly between accounts. Oversaw user models in back-end and account pages in front-end application',
      link: 'https://splitexpenses.herokuapp.com/',
      readme: 'https://github.com/emmajphillips/sei-group-project-3'
    },
    {
      name: 'JOBR',
      description: 'Week-long group project utilising React, Django, Python and Semantic UI to create a job application tracker, implementing a kanban board through HTML5 Drag and Drop along with tasks, resources and contacts pages to better organise the job search. Handled CRUD actions for jobs and job status in database as well as front-end',
      link: 'https://jobeur.herokuapp.com',
      readme: 'https://github.com/emmajphillips/sei-project-4'
    }
  ]

  const projectsContainer = document.querySelector('.projects-wrapper')


  projects.map(proj => {
    const project = document.createElement('div')
    const title = document.createElement('h3')
    const description = document.createElement('p')
    const website = document.createElement('a')
    const readme = document.createElement('a')
    const button = document.createElement('button')

    title.textContent = proj.name
    description.textContent = proj.description
    website.href = proj.link
    website.textContent = 'Visit website'
    readme.href = proj.readme
    readme.textContent = 'ReadMe'
    button.textContent = 'Read more'

    project.classList.add('project')
    project.appendChild(title)
    project.appendChild(website)
    project.appendChild(readme)
    project.appendChild(button)
    project.appendChild(description)

    projectsContainer.appendChild(project)
    button.
  })

  
}

window.addEventListener('DOMContentLoaded', init)