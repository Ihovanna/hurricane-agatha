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
      welcoming and nurtutring to the school and its visitors from all over the world.
    </p>
    <p>
      For more information about Hridaya Yoga visit the links at the bottom of the page.
    </p>
  </Collapsible>

  );
};

export default CollapseHridayaYoga;