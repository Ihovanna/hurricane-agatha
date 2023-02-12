import Collapsible from "react-collapsible";
import "./CollapsibleBox.css";

function CollapseProject(props) {
  return (
    <Collapsible
      className="collapsible-button"
      trigger={props.label}
      triggerStyle={{
        color: "rgb(108, 119, 185)",
        fontSize: 20,
        textTransform: "initial"
      }}
      open={false}
      transitionTime={350}
    >
      <p>
        This project was led by Hridaya Yoga's Community team. Employees and
        volunteers of the center gathered to visit several remote communities
        and assess the damage left behind by the hurricane and gauge the
        assistance received by different sources.
      </p>
      <p>
        Though the Federal government and several other organizations provided
        assistance to aid with recovery, many remote communities did not benefit
        from such efforts. This project was organized to disburse funds gathered
        by the Hridaya Yoga community's fundraising efforts.
      </p>
      <p>
        After the assessment, the Community team decided to partner up with one
        of these remote communities and use this funding for a long term
        community development project, instead of using the funds for temporary
        relief. This is an on-going project, where community leaders of Agua
        Dulce and Hridaya Yoga are working hand in hand to nurture new sources
        of income for their community, investing in infrastructure, agriculture,
        pottery, and schooling, among other potential future plans.
      </p>
    </Collapsible>
  );
}

export default CollapseProject;
