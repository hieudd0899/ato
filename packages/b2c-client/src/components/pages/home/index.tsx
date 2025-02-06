import React from 'react';

import { Banner } from './banner';
import { DomesticTravel } from './domestic-travel';
import { Introduce } from './introduce';

export const Home = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <DomesticTravel />
            Home
        </div>
    );
};
