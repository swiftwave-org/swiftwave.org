import React from 'react';
import GitHubButton from 'react-github-btn'

export default function () {
    return (
        <div className="mr-10 lg:mr-0 pt-2">
            <GitHubButton href="https://github.com/swiftwave-org/swiftwave" class="p-0 m-0" data-color-scheme="light" data-size="large" data-show-count="true" data-text="Star" aria-label="Star swiftwave-org/swiftwave on GitHub">Star</GitHubButton>
        </div>
    );
}