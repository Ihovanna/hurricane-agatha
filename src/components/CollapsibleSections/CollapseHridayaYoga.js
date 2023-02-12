import Collapsible from 'react-collapsible';
import './CollapsibleBox.css';

function CollapseHridayaYoga (props) {

  return(

    <Collapsible 
    className='collapsible-button' 
    trigger={props.label}
    triggerStyle= {{
      color: "rgb(108, 119, 185)",
      fontSize: 20,
      textTransform: "capitalize"
    }}
    open={false}
    transitionTime={350}>
    <p>
      Hridaya Yoga is a non-profit organization dedicated to the teachings of yoga and meditation 
      through non-dual spiritual philosophies. It currently counts with two centers; one in 
      Oaxaca, Mexico, and another one in Longeval, France. 
    </p>
    <p>
      Most recently, Mexico's center has been in the process of developing its Community development
      Department, as the center is located in the heart of Mazunte. This community has been very 
      welcoming and nurtutring to the schools and its visitors from all over the world.
    </p>
    <p>
      For more information about Hridaya Yoga, you can visit <a href="https://hridaya-yoga.com/">hridaya-yoga.com</a>,
      for further information about the Community Development Department, you can visit 
      <a href="https://hridaya-yoga.com/community-development/">hridaya-yoga.com/community-development</a>, 
      and for more information about Hridaya Yoga's United for Oaxaca relief campain, please visit 
      <a href="https://hridaya-yoga.com/hurricane-agatha/"> hridaya-yoga.com/hurricane-agatha</a>.
    </p>
  </Collapsible>

  );
};

export default CollapseHridayaYoga;