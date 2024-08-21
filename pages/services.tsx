import React from 'react';
import { Nav } from '../components/navbar/navbar';
import type {NextPage} from 'next';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import { Features1 } from '../components/features1'; 
import {Services1} from '../components/services1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';
import { Services2 } from '../components/services2';
import { Services3 } from '../components/services3';
import { Services4 } from '../components/services4';
import { Services5 } from '../components/services5';

const ServicesPage = () => {
    return (
        <> 
            <Nav/>
            <Services1 id="it-services"/>
            <Services2 id="llm-services"/>
            <Services3 id="software-development"/> 
            <Services4 id="outsourcing"/> 
            <Services5 id="support-services"/>
           
          
       
            <Trial /> 
            <Footer />
            </>
  );
};

export default ServicesPage;
