/* eslint-disable no-debugger, no-console */
import styles from '../../../resources/css/modules/ListSelector.module.css';
import { Fade } from 'react-reveal';
import Checkbox from '@mui/material/Checkbox';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Grid } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Box = ({ value, propertyChangeHandler }) => {
const [isMandatory,setMandatory]=useState(propertyChangeHandler.get(value).mandatory);
const [weight,setWeight]=useState(propertyChangeHandler.get(value).weight);
    const weightChangeHandler = (weight) => {
        setWeight(weight);
        propertyChangeHandler.get(value).weight=weight;
    };
    const mandatoryChangeHandler = (flag) => {
        setMandatory(flag);
        propertyChangeHandler.get(value).mandatory=flag;
    };
    return (
        <Fade left>
            <div className={`${styles['box']}`}>
                <div className={`${styles['box__inner']}`}>
                    <Grid container spacing={1}>
                        <Grid item xs={7}>
                            <div className={`${styles['title']}`}>
                                <p>{value}</p>
                            </div>
                        </Grid>
                        <Grid item xs={1} sx={{ marginRight: 1 }}>
                            <Checkbox
                                
                                icon={<PriorityHighIcon />}
                                checkedIcon={<PriorityHighIcon />}
                                onChange={(event) => mandatoryChangeHandler(event.target.checked)}
                                color="error"
                                checked={isMandatory}
                            />
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 0.5 }}>
                            <Slider
                                aria-label="Temperature"
                                
                                value={weight}
                                getAriaValueText={(value) => value}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={10}
                                onChange={(event) => weightChangeHandler(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fade>
    );
};
const ListSelector = (props) => {
    console.log(props.propertyChangeHandler);
    return (
        <div className={`${styles['skill-list-wrapper']}`}>
            {props.list.map((k) => (
                <Box value={k.label} propertyChangeHandler={props.propertyChangeHandler} />
            ))}
        </div>
    );
};
export default ListSelector;
