import { gql } from 'apollo-boost';

export const QUERY_CONCEPT = gql`
    query ConceptData($id: Int!) {
        concept (id: $id) {
            id
            title
            description
            
            # Resources associated with concept.
            resourceSet {
                id
                title
                description
            }

            # Prerequisite for Concept
            endConcept {
                startConcept {
                    id
                    title
                }
            }

            # Postrequisite for Concept
            startConcept {
                endConcept {
                    id
                    title
                }
            }
        }
    }
  `;

export const QUERY_CONCEPTS = gql`
    query AllConcepts {
        concepts {
            id
            title
            description
        }
    }
`;