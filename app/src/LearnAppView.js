import { ConceptsView } from './components/Concept'
import { ConceptView } from './components/Concept'
import React, { useState } from 'react';


export function LearnApp() {
    const [concept, setConcept] = useState(null);

    if (concept === null) {
        return <ConceptsView setConcept={ setConcept }/>
    }
    else {
        return (
            <ConceptView concept={ concept } setConcept={ setConcept }/>
        )
    }

    
}