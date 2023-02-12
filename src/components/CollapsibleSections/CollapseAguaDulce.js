import Collapsible from 'react-collapsible';
import './CollapsibleBox.css';

function CollapsibleBox (props) {


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
      Agua Dulce is a small community located in the lower mountains of the southern coast of Oaxaca, Mexico. 
      Its population, as of 2020, consisted of 94 total inhabitants--43 of which were children younger than 14 
      years of age. All the inhabitants of this community belong to the Zapotec indigenous group, and an 
      overwhelming majority speak their local language and Spanish.
    </p>
    <p>
      The main economic activity sustaining most inhabitants is agriculture. The community collectively farms
      in an adjacent piece of land owned by one of the inhabitants of the town. Few of the community members 
      have chosen to take jobs outside of the community, as the semi-urban localities are at least a 30-minute
      car ride down the montain. There is no public transportation going up to this locality. 
    </p>
    <p>
      The school consists of a single building where children of all ages have class one day per week, as 
      teachers are not able to access this remote community on a daily basis. There have been no teachers since
      the emergency state declared through the COVID-19 pandemic, and it is unclear when classes will be reinstated.
    </p>
    <p>
      Other public buildings consist of a local clinic and a chapel in the center of town. 
    </p>
    <small>
      source: <a href="https://mexico.pueblosamerica.com/i/agua-dulce-37/">https://mexico.pueblosamerica.com/i/agua-dulce-37/</a>
    </small>
  </Collapsible>

  );
};

export default CollapsibleBox;