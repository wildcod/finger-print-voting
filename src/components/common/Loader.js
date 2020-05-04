import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'
import '../../css/loader.css'

const LoaderContainer = () => {
   return  <Segment className="loader-segment">
               <Dimmer active className="loader-dimmer">
                  <Loader />
               </Dimmer>
            </Segment>
}

export default LoaderContainer