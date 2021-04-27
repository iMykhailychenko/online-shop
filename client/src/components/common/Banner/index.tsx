import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faViber } from '@fortawesome/free-brands-svg-icons/faViber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import config from '../../../assets/config';
import css from './index.module.css';

const Banner = (): ReactElement => {
    return (
        <div className={css.wrp}>
            <div className={css.main}>
                <h1 className={css.title}>Discover our t-shirts online magaz</h1>
                <p className={css.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, at aut delectus eos excepturi
                    explicabo facilis iure iusto laboriosam laudantium nisi perspiciatis rerum, sequi sint, ullam? A
                    fugiat numquam saepe?
                </p>
            </div>

            <aside className={css.aside}>
                <ul className={css.socials}>
                    <li>
                        <a
                            className={css.link}
                            href={`http://www.facebook.com/sharer.php?u=${config.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a
                            className={css.link}
                            href={`https://telegram.me/share/url?url=${config.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </li>
                    <li>
                        <a
                            className={css.link}
                            href={`viber://forward?text=${config.url}%0D%0A%0D%0AOnline-Magaz`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faViber} />
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Banner;
