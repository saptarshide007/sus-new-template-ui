/* eslint-disable no-debugger, no-console */
import styles from '../../../resources/css/modules/ListSelector.module.css';
import { Fade } from 'react-reveal';

import { BsFillTrashFill, BsCheckLg } from 'react-icons/bs';

import { Button, ToggleButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';

const TipOnHover = ({ key, placement, tip, children }) => (
    <OverlayTrigger key={key} placement={placement} overlay={<Tooltip>{tip}</Tooltip>}>
        {children}
    </OverlayTrigger>
);

const MandatoryMarker = ({ value }) => {
    const [checked, setChecked] = useState(false);
    return (
        <TipOnHover key="weight" placement="top" tip={checked ? 'SetNonMandatory' : 'SetMandatory'}>
            <ToggleButton
                className="mb-0"
                id={value}
                type="checkbox"
                variant="outline-success"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
                size="md"
            >
                <BsCheckLg />
            </ToggleButton>
        </TipOnHover>
    );
};

const Box = ({ value }) => (
    <Fade left>
        <div className={`${styles['box']}`}>
            <div className={`${styles['box__inner']}`}>
                <div className={`${styles['title']}`}>
                    <p>{value}</p>
                </div>
                <div className={`${styles['action']}`}>
                    <TipOnHover key="weight" placement="top" tip="Weight">
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="10"
                            defaultValue="1"
                            className={`${styles['weight-input']}`}
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </TipOnHover>
                    <div>
                        <MandatoryMarker value={value} />{' '}
                        <TipOnHover key="weight" placement="top" tip="Delete">
                            <Button variant="danger" size="md" on>
                                <BsFillTrashFill onClick={() => console.log('----------')} />
                            </Button>
                        </TipOnHover>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
);
const ListSelector = ({ list }) => {
    return (
        <div className={`${styles['skill-list-wrapper']}`}>
            {list.map((k) => (
                <Box key={k.label} value={k.label} object={k} />
            ))}
        </div>
    );
};
export default ListSelector;
