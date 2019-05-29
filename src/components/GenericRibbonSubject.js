'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GenericRibbonItem from './GenericRibbonItem';
import GenericRibbonSubjectLabel from './GenericRibbonSubjectLabel';
import { POSITION } from '../enums';

class GenericRibbonSubject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories,
      subject: props.subject,

      showItemAll : props.showItemAll,

      subjectLabelPosition: props.subjectLabelPosition,
      subjectBaseURL : props.subjectBaseURL,

      classLabels: props.classLabels,
      annotationLabels: props.annotationLabels,
      colorBy: props.colorBy,
      binaryColor: props.binaryColor,
      minColor: props.minColor,
      maxColor: props.maxColor,
      maxHeatLevel: props.maxHeatLevel,

      itemEnter : props.itemEnter,
      itemLeave : props.itemLeave,
      itemOver : props.itemOver,
      itemClick : props.itemClick    
}
  }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    // console.log("Subject: ", this.state.subject);
    return (
      <div className='ontology-ribbon__strip'>

        { (this.state.subjectLabelPosition == POSITION.LEFT) ?
          <GenericRibbonSubjectLabel  subjectId={this.state.subject.id} 
                                      subjectLabel={this.state.subject.label}
                                      subjectTaxon={this.state.subject.taxon_label}
                                      subjectBaseURL={this.state.subjectBaseURL} />
                                      : ''
        }      

        { (this.state.showItemAll) ?
          <div  className='ontology-ribbon__item__category'>        
          <GenericRibbonItem          subject={this.state.subject}
                                      group={ 
                                        {
                                          "id" : "all",
                                          "label" : "All annotations",
                                          "description" : "Contains all the annotations for all groups",
                                          "type" : "GlobalAll"
                                        }
                                      } 
                                      data={
                                        {
                                          "ALL": {
                                            "nb_classes" : this.state.subject.nb_classes,
                                            "nb_annotations": this.state.subject.nb_annotations
                                          }
                                        }
                                      } 

                                      classLabels={this.state.classLabels}
                                      annotationLabels={this.state.annotationLabels}
                                      colorBy={this.state.colorBy} 
                                      binaryColor={this.state.binaryColor} 
                                      minColor={this.state.minColor}
                                      maxColor={this.state.maxColor}
                                      maxHeatLevel={this.state.maxHeatLevel}    
                          
                                      itemEnter={this.state.itemEnter}
                                      itemLeave={this.state.itemLeave}
                                      itemOver={this.state.itemOver}
                                      itemClick={this.state.itemClick}
                                                                  
                                      />                        
                                      </div>
                                      : ''
        }

        {
          this.state.categories.map((category, index) => {   
            return (
              <div  className='ontology-ribbon__item__category'
                    key={this.state.subject + "_" + category.id}>
              {
                category.groups.map((group, index) => {
                  return (
                    <GenericRibbonItem  subject={this.state.subject}
                                        group={group} 
                                        data={this.state.subject.groups[group.id]} 

                                        classLabels={this.state.classLabels}
                                        annotationLabels={this.state.annotationLabels}
                                        colorBy={this.state.colorBy} 
                                        binaryColor={this.state.binaryColor} 
                                        minColor={this.state.minColor}
                                        maxColor={this.state.maxColor}
                                        maxHeatLevel={this.state.maxHeatLevel}    
                            
                                        itemEnter={this.state.itemEnter}
                                        itemLeave={this.state.itemLeave}
                                        itemOver={this.state.itemOver}
                                        itemClick={this.state.itemClick}
                                                                    
                                        key={this.state.subject + "_" + category.id + "_" + group.id + "_" + index} />
                  )
                })
              }
              </div>
            )

          })

        }
        
        { (this.state.subjectLabelPosition == POSITION.RIGHT) ?
          <GenericRibbonSubjectLabel  subjectId={this.state.subject.id} 
                                      subjectLabel={this.state.subject.label}
                                      subjectTaxon={this.state.subject.taxon_label}
                                      subjectBaseURL={this.state.subjectBaseURL} />
                                      : ''
        }
      </div>
    )

  }

}

GenericRibbonSubject.propTypes = {
  categories: PropTypes.array.isRequired,
  subject: PropTypes.object.isRequired,

  showItemAll : PropTypes.bool,

  subjectLabelPosition: PropTypes.number,
  subjectBaseURL : PropTypes.string,

  classLabels: PropTypes.array,
  annotationLabels: PropTypes.array,
  colorBy: PropTypes.number,
  binaryColor: PropTypes.bool,
  minColor: PropTypes.array,
  maxColor: PropTypes.array,
  maxHeatLevel: PropTypes.number,

  itemEnter : PropTypes.func,
  itemLeave : PropTypes.func,
  itemOver : PropTypes.func,
  itemClick : PropTypes.func  
}

GenericRibbonSubject.defaultProps = {
}

export default GenericRibbonSubject;

