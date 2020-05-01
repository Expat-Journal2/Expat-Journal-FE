import React, {useState, useEffect} from "react"
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { date } from "yup";

const team={
    PL:[ "MileyWright" ],
    backend:["devaneereid"],
    react:["gordoncaister", "tippitytapp", "galfarotolon"],
    ui:["Roboblox"]
}

export const PLCard = () => {
const [plInfo, setPlInfo] = useState({})
useEffect(()=>{
    axios.get(`https://api.github.com/users/${team.PL[0]}`)
    .then(res => {
        console.log("response from pl axios", res.data);
        setPlInfo(res.data)
    })
    .catch(err => {console.log("error from pl axios", err)})
},[])

    
    return(
            <Card className="PLCard indcard">
                <CardImg top width="150px" src={plInfo.avatar_url} />
                <CardBody>
                    <CardTitle>{plInfo.name}</CardTitle>
                    <CardSubtitle>Foreigner Files Project Lead</CardSubtitle>
                    <CardText>
                    GitHub Handle: <a href={plInfo.html_url}>{plInfo.login}</a>
                    </CardText>
                </CardBody>
            </Card>
    )
}

export const BackEndCard = () => {
    const [beInfo, setBeInfo] = useState({})
    useEffect(()=>{
        axios.get(`https://api.github.com/users/${team.backend[0]}`)
        .then(res => {
            console.log("response from pl axios", res.data);
            setBeInfo(res.data)
        })
        .catch(err => {console.log("error from pl axios", err)})
    },[])
    
        
        return(
                <Card className="BECard indcard">
                    <CardImg top width="150px" src={beInfo.avatar_url} />
                    <CardBody>
                        <CardTitle>{beInfo.name}</CardTitle>
                        <CardSubtitle>Foreigner Files BackEnd</CardSubtitle>
                        <CardText>
                        GitHub Handle: <a href={beInfo.html_url}>{beInfo.login}</a>
                        </CardText>
                    </CardBody>
                </Card>
        )
    }

export const UICard = () => {
    const [uiInfo, setuiInfo] = useState([])
    useEffect(()=>{
        axios.get(`https://api.github.com/users/${team.ui[0]}`)
        .then(res => {
            console.log("response from pl axios", res.data);
            setuiInfo(res.data)
        })
        .catch(err => {console.log("error from pl axios", err)})
    },[])
    
        
        return(
                <Card className="BECard indcard">
                    <CardImg top width="150px" src={uiInfo.avatar_url} />
                    <CardBody>
                        <CardTitle>{uiInfo.name}</CardTitle>
                        <CardSubtitle>Foreigner Files User Interface</CardSubtitle>
                        <CardText>
                        GitHub Handle: <a href={uiInfo.html_url}>{uiInfo.login}</a>
                        </CardText>
                    </CardBody>
                </Card>
        )
    }


    export const ReactCard1 = () => {
        const [react1Info, setreact1Info] = useState([])
        useEffect(()=>{
            axios.get(`https://api.github.com/users/${team.react[0]}`)
            .then(res => {
                console.log("response from pl axios", res.data);
                setreact1Info(res.data)
            })
            .catch(err => {console.log("error from pl axios", err)})
        },[])
        
            
            return(
                    <Card className="BECard indcard">
                        <CardImg top width="150px" src={react1Info.avatar_url} />
                        <CardBody>
                            <CardTitle>{react1Info.name}</CardTitle>
                            <CardSubtitle>Foreigner Files User Interface</CardSubtitle>
                            <CardText>
                            GitHub Handle: <a href={react1Info.html_url}>{react1Info.login}</a>
                            </CardText>
                        </CardBody>
                    </Card>
            )
        }
        export const ReactCard2 = () => {
            const [react2Info, setreact2Info] = useState([])
            useEffect(()=>{
                axios.get(`https://api.github.com/users/${team.react[1]}`)
                .then(res => {
                    console.log("response from pl axios", res.data);
                    setreact2Info(res.data)
                })
                .catch(err => {console.log("error from pl axios", err)})
            },[])
            
                
                return(
                        <Card className="BECard indcard">
                            <CardImg top width="150px" src={react2Info.avatar_url} />
                            <CardBody>
                                <CardTitle>{react2Info.name}</CardTitle>
                                <CardSubtitle>Foreigner Files User Interface</CardSubtitle>
                                <CardText>
                                GitHub Handle: <a href={react2Info.html_url}>{react2Info.login}</a>
                                </CardText>
                            </CardBody>
                        </Card>
                )
            }
            export const ReactCard3 = () => {
                const [react3Info, setreact3Info] = useState([])
                useEffect(()=>{
                    axios.get(`https://api.github.com/users/${team.react[2]}`)
                    .then(res => {
                        console.log("response from pl axios", res.data);
                        setreact3Info(res.data)
                    })
                    .catch(err => {console.log("error from pl axios", err)})
                },[])
                
                    
                    return(
                            <Card className="BECard indcard">
                                <CardImg top width="150px" src={react3Info.avatar_url} />
                                <CardBody>
                                    <CardTitle>{react3Info.name}</CardTitle>
                                    <CardSubtitle>Foreigner Files User Interface</CardSubtitle>
                                    <CardText>
                                    GitHub Handle: <a href={react3Info.html_url}>{react3Info.login}</a>
                                    </CardText>
                                </CardBody>
                            </Card>
                    )
                }
