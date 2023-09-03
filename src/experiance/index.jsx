import React from 'react';
import "./style.css";

const Experiance = () => {


  const experienceData = [
    {
      designation : 'Software Engineer - Web | Video AI Team',
      type : 'Full Time  Oct 2022 - present',
      companyName : 'Taazaa',
      aboutOne : 'lorem asnkfvn vnwdbkfn ndfbjksbdf sdnf snd fsfknsnfd smfdnskdbkjfsbfn sndf ms fnsfsn fs fdnkbskfd sn fn',
      aboutTwo : 'lorem2 sjdkbfkj fnsd fkn nksdf ns fkns fnk sknf sn fknsd fkns fn sdnf skn fknsd fkn dsknf snf sdknf nksd fknsd f',
      aboutThree : 'lorem skjf kns dfnk sdknf sdkn fkd sfk sdkjf dskjf ksd fksd fkd sfks dfkds fs dfn sfnsdf sknd fk',
      img : 'https://www.sudharsangs.in/calendly.svg'
    },
    {
      designation : 'Software Engineer - Web | Video AI Team',
      type : 'Full Time  Oct 2022 - present',
      companyName : 'Taazaa',
      aboutOne : 'lorem asnkfvn vnwdbkfn ndfbjksbdf sdnf snd fsfknsnfd smfdnskdbkjfsbfn sndf ms fnsfsn fs fdnkbskfd sn fn',
      aboutTwo : 'lorem2 sjdkbfkj fnsd fkn nksdf ns fkns fnk sknf sn fknsd fkns fn sdnf skn fknsd fkn dsknf snf sdknf nksd fknsd f',
      aboutThree : 'lorem skjf kns dfnk sdknf sdkn fkd sfk sdkjf dskjf ksd fksd fkd sfks dfkds fs dfn sfnsdf sknd fk',
      img : 'https://www.sudharsangs.in/calendly.svg'
    },
    {
      designation : 'Software Engineer - Web | Video AI Team',
      type : 'Full Time  Oct 2022 - present',
      companyName : 'Taazaa',
      aboutOne : 'lorem asnkfvn vnwdbkfn ndfbjksbdf sdnf snd fsfknsnfd smfdnskdbkjfsbfn sndf ms fnsfsn fs fdnkbskfd sn fn',
      aboutTwo : 'lorem2 sjdkbfkj fnsd fkn nksdf ns fkns fnk sknf sn fknsd fkns fn sdnf skn fknsd fkn dsknf snf sdknf nksd fknsd f',
      aboutThree : 'lorem skjf kns dfnk sdknf sdkn fkd sfk sdkjf dskjf ksd fksd fkd sfks dfkds fs dfn sfnsdf sknd fk',
      img : 'https://www.sudharsangs.in/calendly.svg'
    }
  ]

  return (
     <div className="exp__Container">
        <h1 className='heading'>Experience <span>1.2+ Years</span></h1>
        <br />
        {/* <div className="separator" style={{width : '100%'}}></div> */}
        {experienceData?.map((item) => (
          <>
           <div  className='exp__Section'>
              
              <div className="first__Section">
                <img src={item.img} alt="" className='img__Section'/>
              </div>

              <div className="mid__SubSection">

             <div>
             <h3>{item?.designation} | {item?.companyName}</h3>
             </div>

               <div>
               <li>{item?.aboutOne}</li>
              <li>{item?.aboutTwo}</li>
              <li>{item?.aboutThree}</li>
               </div>
              </div>

              <div className="end__Section">
              <h3>{item?.type}</h3>
              <h3 style={{visibility:'hidden'}}>{item?.companyName}</h3>
            </div>

          </div>
          <div className="separator"></div>
          </>
        ))}

     </div>
  )
}

export default Experiance