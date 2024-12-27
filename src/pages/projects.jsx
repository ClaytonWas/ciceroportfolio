import React from 'react';
import NavBar from '../components/NavBar';
import Project from '../components/Project';

import DeNatura from '../assets/images/800px-Cicero,_De_natura_deorum,_BAV,_Urb._lat._319.jpg'
import Paradoxa from '../assets/images/M._Tullii_Ciceronis_Paradoxa_Stoicorum_BPL_136_H.pdf_-_page_6.jpg'

const Projects = () => (
    <div className="bg-gray-200 min-h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-grow flex-col justify-center items-center m-2 md:m-0">
            <Project 
                title="De Natura Deorum" 
                description="For time destroys the fictions of error and opinion, while it confirms the determinations of nature and of truth. (Opinionis enim commenta delet dies, naturae iudicia confirmat) (II, 2)"
                picture={DeNatura}
                html_link="https://en.wikipedia.org/wiki/De_Natura_Deorum"
            />
            <Project 
                title="Paradoxa Stoicorum" 
                description="The matter it may be said is a trifle, but the crime is enormous; for crimes are not to be measured by the issue of events, but from the bad intentions of men."
                picture={Paradoxa}
                html_link="https://en.wikipedia.org/wiki/Paradoxa_Stoicorum"
            />
        </div>
    </div>
);

export default Projects;
