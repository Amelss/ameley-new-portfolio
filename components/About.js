import React from 'react'


export default function About({ myInfo }) {
    
    const {
        aboutTitle, aboutName, aboutMeDescription, githubButton
    } = myInfo.fields;
  return (
      <div className='py-20' id='about'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum perferendis qui facere odio exercitationem illo dicta. Harum deleniti atque rem. Placeat nam assumenda alias repudiandae nostrum corporis, magni dolorem nobis itaque vel aspernatur facilis similique asperiores maiores ut sit, eligendi doloremque? Eaque maiores fugit quia corporis sint repellat, ducimus eum dolores rem illo aut excepturi maxime? Nostrum a id suscipit, qui architecto maxime nobis, asperiores omnis aspernatur exercitationem similique cum ipsa reiciendis, quisquam voluptatem culpa! Quaerat totam vitae assumenda amet. Exercitationem sapiente officiis nesciunt ipsa totam voluptates error non!</p>
          About
          
          <h1>{aboutTitle}</h1>
          <h3>{aboutName}</h3>
          <button><a href={githubButton }>Click ME</a></button>

    </div>
  )
}
