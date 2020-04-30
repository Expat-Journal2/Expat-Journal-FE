import React,{useState} from "react"
import { Modal} from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

function AllPostImageModal (props){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    console.log("Image Modal",modal)

    return (
        <div >
            <CardImg xl="6" src={props.img} width={props.width} onClick={toggle} />       
            <Modal size="xl"  isOpen={modal} toggle={toggle} className="imageModal" >
                <div >
                    <img src={props.img} onClick={toggle} className="large-image"/>
                </div>
            </Modal>
        </div>
    )
}

export default AllPostImageModal