import React, {Component, useState} from 'react'
import AsyncSelect from 'react-select/async';
import { db } from "../config/fire";
import "../styles/Purchase.css";

class Serch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTag: [],
            selectedTag1:[]
        }
    }
    loadOptions = async (inputValue) => {
        inputValue = inputValue.toUpperCase().replace(/\W/g, "");
        return new Promise((resolve => {
                db.collection('Purchase')
                    .orderBy('trucknumber')
                    .startAt(inputValue)
                    .endAt(inputValue + "\uf8ff")
                    .get()
                    .then(docs => {
                        if (!docs.empty) {
                            let recommendedTags = []
                            docs.forEach(function (doc) {
                                const tag = {
                                    value: doc.id,
                                    label: doc.data()
                                    .trucknumber + ' | ' + 'Date Is : '+ ' ' +
                                     doc.data().date + ' | ' + 'In Weight : '+ ' ' +
                                     doc.data().weight + ' | ' + 'Out Weight : '+ ' ' +                            
                                     doc.data().outweight + ' | ' + 'Cotton Weight : '+ ' ' +                                   
                                     doc.data().weight + ' | ' + 'price : '+ ' ' +
                                     doc.data().price + ' | ' + 'totalrupee : '+ ' ' +
                                     doc.data().totalrupee + ' | ' + 'party-name : '+ ' ' +
                                     doc.data().partiname + ' | ' + 'Farmer-Name : '+ ' ' +
                                     doc.data().farmername + ' | ' + 'Distribute-Amount : '+ ' ' +
                                     doc.data().disamount + ' | ' + 'Broker-Name : '+ ' ' +
                                     doc.data().brokername
                                }
                                recommendedTags.push(tag)
                            });
                            return resolve(recommendedTags)
                        } else {
                            return resolve([])
                        }
                    })

            })
        )
    }

    loadOptionses = async (inputValue) => {
        inputValue = inputValue.toLowerCase().replace(/\W/g, "");
        return new Promise((resolve => {
            db.collection('Purchase')
            .orderBy('partiname')
            .startAt(inputValue)
            .endAt(inputValue + "\uf8ff")
            .get()
            .then(docs => {
                if (!docs.empty) {
                    let recommendedTags = []
                    docs.forEach(function (doc) {
                        const tag = {
                            value: doc.id,
                            label: doc.data()
                            .trucknumber + ' | ' + 'Date Is : '+ ' ' +
                             doc.data().date + ' | ' + 'In Weight : '+ ' ' +
                             doc.data().weight + ' | ' + 'Out Weight : '+ ' ' +                            
                             doc.data().outweight + ' | ' + 'Cotton Weight : '+ ' ' +                                   
                             doc.data().weight + ' | ' + 'price : '+ ' ' +
                             doc.data().price + ' | ' + 'totalrupee : '+ ' ' +
                             doc.data().totalrupee + ' | ' + 'party-name : '+ ' ' +
                             doc.data().partiname + ' | ' + 'Farmer-Name : '+ ' ' +
                             doc.data().farmername + ' | ' + 'Distribute-Amount : '+ ' ' +
                             doc.data().disamount + ' | ' + 'Broker-Name : '+ ' ' +
                             doc.data().brokername
                        }
                        recommendedTags.push(tag)
                    });
                    return resolve(recommendedTags)
                } else {
                    return resolve([])
                }
            })

    })
)
    }

    handleOnChange = (tags) => {
        this.setState({
            selectedTag: [tags]
        })
    }
    handleOnChange2 = (tags) => {
        this.setState({
            selectedTag1: [tags]
        })
    }

    render() {
        return (
            <div >
                <div className="searchBoxe">
                <AsyncSelect
                    loadOptions={this.loadOptions}
                    onChange={this.handleOnChange}
                    placeholder="Search Truck Number...."
                    className="serchtextbox"
                />
                <AsyncSelect
                 loadOptions={this.loadOptionses}
                 onChange={this.handleOnChange2}
                 placeholder="Search as a Parti Name..."
                 className="serchtextboxparti"
                />
                </div>
                <br></br>
                {
                    this.state.selectedTag.map(e => {
                        return (
                            <div className="listserchBox">
                            <li className="lidatasearch" key={e.value}>
                                {e.label}
                            </li>
                            </div>   
                        )
                    })
                }
                {
                    this.state.selectedTag1.map(e => {
                        return (
                            <div className="listserchBoxpar">
                            <li className="lidatasearch" key={e.value}>
                                {e.label}
                            </li>
                            </div>   
                        )
                    })
                }
            </div>
        );
    }

}

export default Serch