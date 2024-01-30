import React from 'react';
import GitHubButton from 'react-github-btn'

export default function () {
    return (
        <li className='menu__link' style={{
            top: "0.25rem"
        }}>
            <GitHubButton href="https://github.com/swiftwave-org/swiftwave" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" data-show-count="true" aria-label="Star swiftwave-org/swiftwave on GitHub">Star</GitHubButton>
        </li>
    );
}