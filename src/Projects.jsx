import React from 'react'

const Projects = () => {

  const ProjectsData = [
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    },
    {
      projectName : 'Movie Website',
      completion : 'Live Link',
      about : 'sdfjsbdf sndfvbkjs dfsbdfjk sf skjfbjs fdms dfsdjkf sdf jsbdf ',
      tech : 'React , HTML/CSS , Material-UI , React-Router-Dom',
      company : 'my own website',
      id : 1,
      skill : 'Featured Skills : '
    }
  ]
  return (
    <div className='projects__Container'>
        
        <div>
        <h1>Projects</h1>
        </div>
        <div className="grid__Projects">
           {
            ProjectsData?.map((item) => (
            <div key={item?.id} className='proj'>
                <div className="headings">
                  <div className="first">
                    {item?.projectName}
                  </div>
                  <div className="second">
                    {item?.completion}
                  </div>
                </div>

                <div className="skills">
                  <p><span className='heads'>{item?.skill}</span>{item?.tech}</p>
                </div>

                <div className="company">
                <p><span className='heads'>Company : </span>{item?.company}</p>
                </div>
            </div>
            ))
           }
        </div>
    </div>
  )
}

export default Projects