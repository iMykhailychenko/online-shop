import React, { ReactElement } from 'react';

import Pictures from '../Pictures';
import css from './index.module.css';

const About = (): ReactElement => {
    return (
        <>
            <Pictures />
            <div className={css.flex}>
                <p>
                    Ad aliquid amet animi aperiam at commodi consequatur, deserunt ducimus enim eum fuga illum ipsa
                    ipsum, itaque laudantium libero magnam maiores, maxime nisi numquam qui quibusdam quidem quo sint
                    tempore ullam voluptatem voluptatibus?
                </p>
                <p>
                    Alias corporis debitis excepturi explicabo facere fugit, natus nihil nostrum quibusdam, quo
                    reiciendis voluptatum? Aperiam dolorem id incidunt iure magnam officia quos sunt.
                </p>
            </div>
        </>
    );
};

export default About;
