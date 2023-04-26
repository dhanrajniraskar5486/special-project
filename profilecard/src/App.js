import { Fragment } from 'react';
import './App.css';
import { Profilecard } from './cardsdetail/newprofile';

function App(props) {

  function register(input) {
    alert('Prajwal Gaulkar')
  }

  function login() {
    alert('Dhanraj Niraskar')
  }



  return (

    <Fragment>
      <div className='div1'>
      <Profilecard
        name='Dhanraj Niraskar'
        designation='FrontEnd Developer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1682392000~exp=1682392600~hmac=702bd907faf7cafcff9ac42990dfd96abd021f0cdfb74be189cb71b00b92ef63' />
      <Profilecard
        name='Prajwal Gaulkar'
        designation='Backend Developer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?w=740&t=st=1682392307~exp=1682392907~hmac=0d8dbc3da5490b2a48619e503777e3b7279be311c8a0549a451b7b61a2f218e3'
        onClickFunction={register}
      />
      <Profilecard
       name='Kaustubh Zade'
        designation='Full Stack Developer'
        jobDiscription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet odio ut enim auctor, at aliquam dolor vestibulum. Suspendisse potenti. Cras consectetur aliquet neque fringilla lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet erat ac ligula aliquet elementum.'
        image='https://img.freepik.com/premium-photo/business-education-office-concept-portrait-smiling-businessman_380164-65299.jpg?w=740' 
        onClickFunction={login} />
</div>
</Fragment>

  );
}

export default App;
