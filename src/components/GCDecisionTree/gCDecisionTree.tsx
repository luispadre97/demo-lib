import React from 'react';
import styled from 'styled-components';

const StyledGCDecisionTree = styled.div`
	width: 100% !important;
	max-width: 100% !important;
	max-height: 60rem;
	
	overflow:scroll;
`;

//https://github.com/MrBlenny/react-flow-chart
import { FlowChartWithState } from "@mrblenny/react-flow-chart";

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "generic-node",
      innerText: "Is it performant critical?",
      position: {
        x: 100,
        y: 20
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            value: "yes"
          }
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "no"
          }
        }
      }
    },
    node2: {
      id: "node2",
      type: "generic-node",
      innerText: "Are you trying to transfer ownership of data?",
      position: {
        x: 300,
        y: 120
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "no"
          }          
        },
        port3: {
          id: "port3",
          type: "output",
          properties: {
            value: "yes"
          }          
        }
      }
    },
    node3: {
      id: "node3",
      type: "generic-node",
      innerText: "Are you trying to guard internal state of struct?",
      position: {
        x: 300,
        y: 260
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "yes"
          }          
          
        },
        port3: {
          id: "port3",
          type: "output",
          properties: {
            value: "no"
          }          
        }
      }
    },
    node4: {
      id: "node4",
      type: "generic-node",
      innerText: "Are you trying to coordinate multiple peices of logic?",
      position: {
        x: 300,
        y: 400
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "no"
          }          
        },
        port3: {
          id: "port3",
          type: "output",
          properties: {
            value: "yes"
          }          
        }
      }
    },
    node5: {
      id: "node5",
      type: "generic-node",
      innerText: "Use Primitives.",
      position: {
        x: 100,
        y: 500
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
      }
    },
    node6: {
      id: "node6",
      type: "generic-node",
      innerText: "Use Channels.",
      position: {
        x: 800,
        y: 500
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
      }
    },            
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port2"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      },
    },
    link2: {
      id: "link2",
      from: {
        nodeId: "node1",
        portId: "port1"
      },
      to: {
        nodeId: "node5",
        portId: "port1"
      },
    },
    link3: {
      id: "link3",
      from: {
        nodeId: "node2",
        portId: "port3"
      },
      to: {
        nodeId: "node6",
        portId: "port1"
      },
    }, 
    link4: {
      id: "link4",
      from: {
        nodeId: "node2",
        portId: "port2"
      },
      to: {
        nodeId: "node3",
        portId: "port1"
      },
    },
    link5: {
      id: "link5",
      from: {
        nodeId: "node3",
        portId: "port2"
      },
      to: {
        nodeId: "node5",
        portId: "port1"
      },
    }, 
     link6: {
      id: "link6",
      from: {
        nodeId: "node3",
        portId: "port3"
      },
      to: {
        nodeId: "node4",
        portId: "port1"
      },
    },
     link7: {
      id: "link7",
      from: {
        nodeId: "node4",
        portId: "port2"
      },
      to: {
        nodeId: "node5",
        portId: "port1"
      },
    },
     link8: {
      id: "link8",
      from: {
        nodeId: "node4",
        portId: "port3"
      },
      to: {
        nodeId: "node6",
        portId: "port1"
      },
    },                            
  },
  selected: {},
  hovered: {}
};



//https://github.com/MrBlenny/react-flow-chart
//https://mrblenny.github.io/react-flow-chart/index.html?path=/story/state--internal-react-state
export function GCDecisionTree() {
	const CEL = styled.div`
		padding: 30px;
	`;
		
	const NodeInnerCustom = ({ node, config }) => {
		console.log("GODT NODE: ",node);
		return(
			<CEL>{node.innerText}</CEL>
		)
		/* And Switch on Type 
		if (node.type === 'GCDT-1') {
		    return (
		      <CEL>
		        <p>Use Node inner to customise the content of the node</p>
		      </CEL>
		    )		
		}
		else {
			return(
				<div>Stuff</div>
			)
		}
		*/
		
	}
	
	
	const PortDefaultOuter = styled.div`
	  width: 24px;
	  height: 24px;
	  background: cornflowerblue;
	  cursor: pointer;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	`;	
	const PortCustom = (props) => (
	  <PortDefaultOuter>
	    { props.port.properties && props.port.properties.value === 'yes' && (
	      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
	        <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
	      </svg>
	    )}
	    { props.port.properties && props.port.properties.value === 'no' && (
	      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
	        <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
	      </svg>
	    )}
	    { !props.port.properties && (
	      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
	        <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
	      </svg>
	    )}
	  </PortDefaultOuter>
	)	
	
	return(
		<StyledGCDecisionTree>
			<FlowChartWithState initialValue={chartSimple} Components={{  NodeInner: NodeInnerCustom, Port: PortCustom }}/>
		</StyledGCDecisionTree>
	)
}