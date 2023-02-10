import Collapsible from 'react-collapsible';
import './CollapsibleBox.css';

function CollapseHridayaYoga (props) {

  return(

  <Collapsible className='collapsible-button' trigger={props.label}>
    <p>
      This is the collapsible content. It can be any element or React
      component you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next
      section!
    </p>
  </Collapsible>

  );
};

export default CollapseHridayaYoga;