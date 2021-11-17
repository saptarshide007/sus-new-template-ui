import {
  Button,
  CloseButton,
  Stack,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

export const ToolTipButton = (props) => {
  
  const handleClick = () => {
    props.onClick(props.msg);
  }
  if (props.active)
    return (
      <OverlayTrigger
        key={props.placement}
        placement={props.placement}
        overlay={
          <Tooltip id={`tooltip-${props.placement}`}>{props.msg}</Tooltip>
        }
      >
        <Button
          variant={props.variant}
          size={props.size}
          onClick={handleClick}
        >
          {props.btnname}
        </Button>
      </OverlayTrigger>
    );
  else
    return (
      <Button
        variant={props.variant}
        size={props.size}
        disabled
      >
        {props.btnname}
      </Button>
    );
};
